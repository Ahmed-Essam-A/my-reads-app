import React from "react";
import ShelvesList from "./ShelvesList";
import "./MainPage.css";



const MainPage = ({changeBookShelfHandler,changedBooks}) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <ShelvesList
          changedBooks={changedBooks}
          changeBookShelfHandler={changeBookShelfHandler}
        />
      </div>
    </div>
  );
};
export default MainPage;
