import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../BooksAPI";
export const BookDetails = () => {
  const [book, setBook] = useState({});
  const { book_id } = useParams();
  useEffect(() => {
    get(book_id).then((res) => {
      setBook(res);
    });
  }, [book_id]);
  return (
    <div className="book-details">
      <section className="book-details__main">
        <div className="book-cover__container">
          <div
            className="book-cover__img"
            style={{
              backgroundImage: `url("${book?.imageLinks?.thumbnail || ""}")`,
            }}
          ></div>
        </div>
        <div className="book-details__info">
          <h1 className="book-details__title">{book?.title}</h1>
          <span className="book-details__subtitle"> {book?.subtitle}</span>
          <p className="book-details__meta">Shelf : {book?.shelf}</p>
          <p className="book-details__desc">Description : </p>
          <p className="book-details__desc">{book?.description}</p>
          <div>
            <div className="book-details__meta">
              <p>
                Categories:{" "}
                {book.categories ? book?.categories.join(" , ") : "No category"}
              </p>
              <p>No. of pages : {book?.pageCount}</p>
              <p>
                Average rating :{" "}
                {book?.averageRating ? book.averageRating : "0"}
              </p>
              <p>Language : {book?.language}</p>
              <p>Authoors : {book?.authors?.join(" , ")}</p>
              {book.publisher && <p>Publisher : {book?.publisher}</p>}
              <p>Publish date : {book?.publishedDate}</p>
            </div>
            <button className="btn btn--primary">
              <a href={book?.previewLink}> preview link</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
