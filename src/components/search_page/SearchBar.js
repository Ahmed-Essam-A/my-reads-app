import "./SearchBar.css";




const SearchBar = (props) => {



  return (
    <div className="search-books-bar">
      <a className="close-search" >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" value={props.searchValue} onChange={props.onSearchChange}  />
      </div>
    </div>
  );
};
export default SearchBar;
