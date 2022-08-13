import "./App.css";
import SearchPage from "./components/search_page/SearchPage";
import MainPage from "./components/main_page/MainPage";
import { Route, Routes, Link } from "react-router-dom";
import react, {useState, useEffect} from "react";
import * as BooksAPI from "./BooksAPI";

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}

function App({ book }) {
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
    });
  };

  return (
    <div>
      <div className="app">

        <Routes>
          <Route path="/search" element={<SearchPage changedBooks={changedBooks} changeBookShelfHandler={changeBookShelfHandler}/>} />
          <Route path="/" element={<MainPage changedBooks={changedBooks} changeBookShelfHandler={changeBookShelfHandler} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
