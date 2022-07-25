import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Book } from "../components/book";
export const SearchPage = ({
  books,
  searchBooks,
  handleSearch,
  search,
  handleshelfChange,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks !== undefined && search !== "" ? (
            searchBooks.map((book) => {
              const searchBook = books.find((b) => b.id === book.id);
              return (
                <Book
                  key={book.id}
                  book={book}
                  shelf={searchBook?.shelf}
                  handleshelfChange={handleshelfChange}
                />
              );
            })
          ) : (
            <></>
          )}
        </ol>
      </div>
    </div>
  );
};
SearchPage.propTypes = {
  books: PropTypes.array,
  searchBooks: PropTypes.array,
  handleshelfChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
};
