import "./BookShelfChanger.css";

const BookShelfChanger = ({item, onChange}) => {  

    return (
      <select defaultValue={item? item :"none" } onChange={onChange} >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
  );
};
export default BookShelfChanger;
