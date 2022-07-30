import React from "react";
import "./ShelvesList.css";
import BookShelf from "./BookShelf";

const ShelvesList = ({ books,changeBookShelfHandler }) => {
  const curReading = books.filter (book => book.shelf === "currentlyReading");
  const wToRead = books.filter (book => book.shelf === "wantToRead");
  const read = books.filter (book => book.shelf === "read");

  return (
    <div>
      <BookShelf title="Currently Reading" books={curReading} changeBookShelfHandler={changeBookShelfHandler}/>
      <BookShelf title="Want To Read" books={wToRead} changeBookShelfHandler={changeBookShelfHandler}/>
      <BookShelf title="Read" books={read} changeBookShelfHandler={changeBookShelfHandler}/>
    </div>
  );
};

export default ShelvesList;
