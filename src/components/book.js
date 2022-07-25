import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { ShelfChanger } from "./shelfChanger";
export const Book = ({ book, handleshelfChange, shelf }) => {
  const { imageLinks, title, authors } = book;
  const history = useHistory();
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            onClick={() => history.push(`books/${book.id}`)}
            style={{
              cursor: "pointer",
              width: 128,
              height: 193,
              backgroundImage: `url("${
                imageLinks ? imageLinks.smallThumbnail : ""
              }")`,
            }}
          ></div>
          <ShelfChanger
            book={book}
            handleshelfChange={handleshelfChange}
            shelf={shelf}
          />
        </div>
        <div className="book-title">{title}</div>
        {authors !== undefined &&
          authors.map((author, i) => (
            <div className="book-authors" key={i}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleshelfChange: PropTypes.func.isRequired,
  shelf: PropTypes.string,
};
