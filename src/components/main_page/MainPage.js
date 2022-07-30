import React from "react";
import ShelvesList from "./ShelvesList";
import "./MainPage.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../../BooksAPI";


const MainPage = () => {
  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setChangedBooks(data);
    });
  }, []);
  
  const [changedBooks, setChangedBooks] = useState([]);

  const changeBookShelfHandler = (book, targetShelf) => {
    const updatedBook = changedBooks.map((s) => {
      if (s.id === book.id) {
        book.shelf = targetShelf;
        return book;
      }
      return s;
    });
    setChangedBooks(updatedBook);
    BooksAPI.update(book, targetShelf).then((data) => {
      setChangedBooks(updatedBook);
    });
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <ShelvesList
          books={changedBooks}
          changeBookShelfHandler={changeBookShelfHandler}
        />
      </div>
    </div>
  );
};
export default MainPage;
