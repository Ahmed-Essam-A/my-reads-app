import BookData from "./BookData";
import "./BookShelf.css";

const BookShelf = ({books, title, changeBookShelfHandler}) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books"></div>
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.id}>
              <BookData book={b} changeBookShelf={changeBookShelfHandler}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
