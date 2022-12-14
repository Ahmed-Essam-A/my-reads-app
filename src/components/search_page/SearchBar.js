import "./SearchBar.css";
import {Link} from "react-router-dom";




const SearchBar = (props) => {



  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search" >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" value={props.searchValue} onChange={props.onSearchChange}  />
      </div>
    </div>
  );
};
export default SearchBar;
