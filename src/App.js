import "./App.css";
import { useState } from "react";
import SearchPage from "./components/search_page/SearchPage";
import MainPage from "./components/main_page/MainPage";

function App({book}) {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const showSearchPageHandler= ()=>{
    setShowSearchPage(true);
  }

  const stopShowingSearchPage= ()=>{
    setShowSearchPage(false);
  }

  return (
    <div>
      <div className="app">
        {showSearchPage && <SearchPage onBackArrow={stopShowingSearchPage} book={book}/>}
        {!showSearchPage && <MainPage />}
      </div>
      <div className="open-search">
        <a onClick={showSearchPageHandler}>Add a book</a>
      </div>
    </div>
  );
}

export default App;
