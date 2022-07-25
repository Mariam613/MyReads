import PropTypes from "prop-types";
import { BookShelf } from "../components/bookShelf";
import { Link } from "react-router-dom";
export const ListBooks = ({ books, handleshelfChange }) => {
  const shelfs = ["currentlyReading", "wantToRead", "read"];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf, i) => {
            return (
              <BookShelf
                key={i}
                shelf={shelf}
                books={books}
                handleshelfChange={handleshelfChange}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleshelfChange: PropTypes.func.isRequired,
};
