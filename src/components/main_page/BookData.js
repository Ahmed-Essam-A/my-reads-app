import "./BookData.css";
import BookShelfChanger from "./BookShelfChanger";

const BookData = ( {book, changeBookShelf}) => {


  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193,backgroundImage:`url(http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api})`}}></div>
        <div className="book-shelf-changer">
        <BookShelfChanger item={book.shelf} onChange={(e) => changeBookShelf(book, e.target.value)}/>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default BookData;
