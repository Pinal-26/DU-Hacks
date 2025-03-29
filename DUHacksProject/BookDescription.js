import { useState } from "react";
import "../styles/BookDescription.css"; // Import CSS animations

const BookDescription = ({ book }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="book-container">
      <button onClick={() => setIsVisible(!isVisible)}>Show Description</button>

      {isVisible && (
        <div className={`description-box ${book.genre.toLowerCase()}`}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>

          {/* Conditional elements for animations */}
          {book.genre === "Romantic" && <div className="floating-hearts"></div>}
          {book.genre === "Horror" && <div className="spooky-effect"></div>}
          {book.genre === "Fiction" && <div className="fiction"></div>}
          {book.genre === "Historical Fiction" && <div className="historical"></div>}
        {book.genre === "Autobiography" && <div className="autobiography"></div>}
        {book.genre === "Motivational" && <div className="motivational"></div>}
        {book.genre === "Magical Realism" && <div className="magical-realism"></div>}
        {book.genre === "Mythology" && <div className="mythology"></div>}
        {book.genre === "Adventure" && <div className="adventure"></div>}
        {book.genre === "Thriller" && <div className="thriller"></div>}
        {book.genre === "Satire" && <div className="satire"></div>}
        {book.genre === "Short Stories" && <div className="short-stories"></div>}
        {book.genre === "Poetry" && <div className="poetry"></div>}
        {book.genre === "Philosophy" && <div className="philosophy"></div>}
        {book.genre === "Dystopian" && <div className="thriller"></div>}
        {book.genre === "Tragedy" && <div className="historical-fiction"></div>}
        {book.genre === "Coming-of-Age" && <div className="autobiography"></div>}

        </div>
      )}
    </div>
  );
};

export default BookDescription;