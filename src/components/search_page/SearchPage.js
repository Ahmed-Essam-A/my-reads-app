import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import "./SearchPage.css";
import * as BooksAPI from "../../BooksAPI";
import BookData from "../main_page/BookData";

const SearchPage = ({changedBooks, changeBookShelfHandler}) => {
  const [query, setQuery] = useState([]);
  const [searchBook, setSearchBook] = useState([]);
  const [searchResult, setSearchResult] = useState([]);


  const queryChangeHandler = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  useEffect(() => {
    const searchTime = setTimeout(() => {
      if (query !== "") {
        BooksAPI.search(query).then((data) => {
          if (data.error) {
            setSearchResult(<h2>No Books Found</h2>);
          } else {
            setSearchBook(data)
            setSearchResult(
              searchBook.map((b) => (
                <li key={b.id}>
                  <BookData
                    book={b}
                    changeBookShelf={changeBookShelfHandler}
                    changedBooks={changedBooks}
                  />
                </li>
              ))
            );
          }
        });
      } else {
        setSearchResult([]);
      }
    }, 200);

    return () => {
      clearTimeout(searchTime);
    };
  }, [query]);

  
  return (
    <div className="search-books">
      <SearchBar searchValue={query} onSearchChange={queryChangeHandler} />
      <div className="search-books-results">
        <ol className="books-grid">{searchResult}</ol>
      </div>
    </div>
  );
};
export default SearchPage;
