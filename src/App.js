import "./App.css";
import "antd/dist/antd.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ListBooks } from "./pages/listBooksPage";
import { SearchPage } from "./pages/searchPage";
import * as BooksApi from "./BooksAPI";
import { NotFound } from "./pages/not-found";
import { BookDetails } from "./pages/bookDetails";
function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  useEffect(() => {
    BooksApi.getAll().then((res) => {
      setBooks(res);
    });
  }, []);
  const handleshelfChange = useCallback(
    async (e, selectBook) => {
      const { value } = e.target;
      await BooksApi.update(selectBook, value);
      if (selectBook.shelf) {
        const updatedBooks = books.map((book) => {
          return book.id === selectBook.id
            ? { ...book, shelf: value }
            : { ...book };
        });
        setBooks(updatedBooks);
      } else {
        const searchBook = searchBooks.find(
          (book) => book.id === selectBook.id
        );
        setBooks((book) => {
          return [{ ...searchBook, shelf: value }, ...book].map((book) => {
            return book.id === selectBook.id
              ? { ...book, shelf: value }
              : { ...book };
          });
        });
      }
    },
    [books, searchBooks]
  );
  const handleSearch = useCallback((e) => {
    const { value } = e.target;
    setSearch(value);
    if (value !== "") {
      BooksApi.search(value).then((res) => {
        if (!res?.error) setSearchBooks(res);
        else setSearchBooks(res.items);
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks books={books} handleshelfChange={handleshelfChange} />
          )}
        />
        <Route
          exact
          path="/books/:book_id"
          render={() => <BookDetails handleshelfChange={handleshelfChange} />}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              books={books}
              searchBooks={searchBooks}
              search={search}
              handleSearch={handleSearch}
              handleshelfChange={handleshelfChange}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
