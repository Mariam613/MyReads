import PropTypes from "prop-types";
export const ShelfChanger = ({ book, handleshelfChange, shelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => handleshelfChange(e, book)}
        defaultValue={book?.shelf || shelf || "none"}
      >
        <option value="nonee" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  handleshelfChange: PropTypes.func.isRequired,
  shelf: PropTypes.string,
};
