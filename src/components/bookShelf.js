import PropTypes from "prop-types";
import { Book } from "./book";
export const BookShelf = ({ books, shelf, handleshelfChange }) => {
  const changeString = (shelf) => {
    switch (shelf) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want To Read";
      case "read":
        return "Read";
      default:
        return "";
    }
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{changeString(shelf)}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(
            (book) =>
              book.shelf === shelf && (
                <Book
                  book={book}
                  key={book.id}
                  handleshelfChange={handleshelfChange}
                />
              )
          )}
        </ol>
      </div>
    </div>
  );
};
BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleshelfChange: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};
