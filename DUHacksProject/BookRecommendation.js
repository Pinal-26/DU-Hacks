import React, { useState, useEffect } from "react";
import { Bookmark, Star } from "lucide-react";
import "../styles/BookDescription.css"; // Import styles

const booksData = [
  { id: 1,
    title: "The Guide",
    author: "R.K. Narayan",
    genre: "Fiction",
    rating: 4.2,
    description: "A novel about a tour guide who transforms into a spiritual guru...",
    year: 1958,
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a4/TheGuide.jpg"
  },
  { id: 2, title: "Train to Pakistan", author: "Khushwant Singh", genre: "Historical Fiction", rating: 4.5, 
    description: "A gripping tale of love and tragedy set during India's partition, portraying the horrors of communal violence. The novel captures the emotional and social turmoil of the era.", 
    year: 1956, cover: "https://m.media-amazon.com/images/I/915ojTuXD+L.jpg" 
  },
  { id: 3, title: "The God of Small Things", author: "Arundhati Roy", genre: "Fiction", rating: 4.3, 
    description: "A Booker Prize-winning novel about love and loss in Kerala, told through the eyes of twin siblings navigating a complex world. It explores caste discrimination and forbidden relationships.", 
    year: 1997, cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1318966691i/37819.jpg" 
  },
  { id: 4, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", genre: "Autobiography", rating: 4.8, 
    description: "An inspiring autobiography of India's missile man, chronicling his journey from a small town to becoming a scientist and leader. It highlights his vision for India’s scientific progress.", 
    year: 1999, cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/j/b/wings-of-fire-original-imah4ssxb4y9zmvg.jpeg?q=90&crop=false" 
  },
  { id: 5, title: "Ignited Minds", author: "A.P.J. Abdul Kalam", genre: "Motivational", rating: 4.6, 
    description: "A book that ignites the minds of young Indians, encouraging them to dream big and contribute to the nation's growth. It emphasizes the power of youth in shaping the future.", 
    year: 2002, cover: "https://m.media-amazon.com/images/I/81y66NkOkpL.jpg" 
  },
  { id: 6, title: "The White Tiger", author: "Aravind Adiga", genre: "Fiction", rating: 4.1, 
    description: "A darkly humorous story of ambition and corruption in India, narrated by an ambitious chauffeur who rises to power. It sheds light on the stark realities of social inequality.", 
    year: 2008, cover: "https://m.media-amazon.com/images/I/81TQpJPgUtL._AC_UF1000,1000_QL80_.jpg" 
  },
  { id: 7,title: "The Hard Thing About Hard Things",author: "Ben Horowitz",genre: "Business",rating: 4.5,
    description: "A practical guide on the challenges of building and running a startup, filled with real-world advice from Ben Horowitz, a seasoned entrepreneur and investor.",
    year: 2014,cover: "https://m.media-amazon.com/images/I/810u9MkT3SL._AC_UF1000,1000_QL80_.jpg"
  },
  { id: 8, title: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", genre: "Mythology", rating: 4.5, 
    description: "A retelling of the Mahabharata from Draupadi's perspective, offering a fresh take on her emotions, struggles, and strength. It reimagines her story with a powerful and independent voice.", 
    year: 2008, cover: "https://m.media-amazon.com/images/I/51HkhnXXvLL._UF1000,1000_QL80_.jpg" 
  },
  { id: 9, title: "The Immortals of Meluha", author: "Amish Tripathi", genre: "Mythology", rating: 4.3, 
    description: "A re-imagining of Lord Shiva's story in a fictional world, where he is depicted as a mortal who becomes a god. The book merges mythology with history and adventure.", 
    year: 2010, cover: "https://m.media-amazon.com/images/I/818bGgNn0EL.jpg" 
  },
  { id: 10, title: "The Namesake", author: "Jhumpa Lahiri", genre: "Fiction", rating: 4.2, 
    description: "A poignant story of identity and belonging, following an Indian-American protagonist as he navigates cultural expectations. It beautifully captures the immigrant experience and generational conflicts.", 
    year: 2003, cover: "https://m.media-amazon.com/images/I/71t19fqA5SL._AC_UF1000,1000_QL80_.jpg" 
  },
{ id: 11, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", rating: 4.7, 
  description: "A philosophical novel about following one's dreams. It inspires readers to pursue their destiny with faith and perseverance. The journey of the protagonist teaches valuable life lessons on fate and self-discovery.", 
  year: 1988, cover: "https://m.media-amazon.com/images/I/81UGPuNl7kL._UF1000,1000_QL80_.jpg" 
},
{ id: 12, title: "Shantaram", author: "Gregory David Roberts", genre: "Adventure", rating: 4.6, 
  description: "A thrilling story of an Australian fugitive in Mumbai. It explores themes of love, survival, and redemption in an unfamiliar land. The book vividly portrays the chaos and beauty of Mumbai’s underworld.", 
  year: 2003, cover: "https://m.media-amazon.com/images/M/MV5BNzdlODA5MWEtOTM3MC00NjZkLTk2MjItMzExZTk1NjUxZGViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
},
{ id: 13, title: "I Too Had a Love Story", author: "Ravinder Singh", genre: "Romantic", rating: 4.0, 
  description: "A heart-touching love story based on true events. It beautifully portrays emotions of love, loss, and longing. This deeply emotional novel resonates with anyone who has experienced true love.", 
  year: 2008, cover: "https://m.media-amazon.com/images/I/81ilCcnwayL.jpg" 
},
{ id: 14, title: "Five Point Someone", author: "Chetan Bhagat", genre: "Fiction", rating: 3.9, 
  description: "A story about three engineering students and their struggles. It humorously reflects on the Indian education system and friendship. The novel highlights the pressures of academics and personal ambitions.", 
  year: 2004, cover: "https://rukminim2.flixcart.com/image/850/1000/book/5/9/5/five-point-someone-original-imad8u32adtehwfa.jpeg?q=90&crop=false" 
},
{ id: 15, title: "Revolution 2020", author: "Chetan Bhagat", genre: "Fiction", rating: 4.0, 
  description: "A tale of love, ambition, and corruption in India. It questions moral dilemmas faced by young individuals in society. The novel captures the essence of youthful dreams and the price of success.", 
  year: 2011, cover: "https://m.media-amazon.com/images/I/817tkiYPPsL.jpg" 
},
{ id: 16, title: "The Rozabal Line", author: "Ashwin Sanghi", genre: "Thriller", rating: 4.2, 
  description: "A gripping thriller about the hidden past of Jesus Christ. The story masterfully blends history, religion, and conspiracy theories. With its fast-paced narrative, it keeps readers on the edge of their seats.", 
  year: 2007, cover: "https://m.media-amazon.com/images/I/71lVNJhQn8L.jpg" 
},
{ id: 17, title: "Serious Men", author: "Manu Joseph", genre: "Satire", rating: 4.1, 
  description: "A satirical novel about caste and ambition in India. It presents a sharp critique of social inequalities and human aspirations. The novel balances humor and serious themes to create a thought-provoking read.", 
  year: 2010, cover: "https://m.media-amazon.com/images/I/71fnQBbqLcL._UF1000,1000_QL80_.jpg" 
},
{ id: 18, title: "Karukku", author: "Bama", genre: "Autobiography", rating: 4.3, 
  description: "A powerful autobiography of a Dalit woman. It narrates her journey of self-discovery and resistance against oppression. The book provides a raw and honest insight into caste discrimination in India.", 
  year: 1992, cover: "https://m.media-amazon.com/images/I/51My5NBcgfL._AC_UF1000,1000_QL80_.jpg" 
},
{ id: 19, title: "Malgudi Days", author: "R.K. Narayan", genre: "Short Stories", rating: 4.6, 
  description: "A collection of heartwarming short stories set in India. Each story captures the simplicity and charm of small-town life. The book remains a timeless classic in Indian literature.", 
  year: 1943, cover: "https://m.media-amazon.com/images/M/MV5BZWJhZGEzZjUtZGZiMC00OTFkLTk0YmUtMTNiNTBjZDFkZDU2XkEyXkFqcGc@._V1_.jpg" 
},
{ id: 20, title: "The Great Indian Novel", author: "Shashi Tharoor", genre: "Satire", rating: 4.4, 
  description: "A satirical retelling of the Mahabharata set in modern India. It blends mythology with contemporary political narratives. The novel uses humor and wit to comment on India's socio-political landscape.", 
  year: 1989, cover: "https://m.media-amazon.com/images/I/81Lfw-skUsL.jpg" 
},
{ id: 21, title: "Raja Rao's Kanthapura", author: "Raja Rao", genre: "Historical Fiction", rating: 4.5, 
  description: "A novel depicting India's freedom struggle through the eyes of villagers. It highlights the impact of Gandhi's principles on rural India. The book captures the spirit of resistance and cultural transformation.", 
  year: 1938, cover: "https://cdn.sanity.io/images/p34gzxcg/production/a6ae573cb8c2e745225d9ac04d872c0cc0970d8c-731x1121.jpg?dl=Kanthapura.jpg" 
},
{ id: 22, title: "Gitanjali", author: "Rabindranath Tagore", genre: "Poetry", rating: 4.8, 
  description: "A collection of spiritual and devotional poems that won the Nobel Prize. The verses express deep philosophical and mystical insights. Tagore's poetry beautifully captures the essence of divine love and human emotions.", 
  year: 1910, cover: "https://rukminim2.flixcart.com/image/850/1000/kialrww0-0/book/r/a/u/gitanjali-original-imafy3svpf3mgcb4.jpeg?q=20&crop=false" 
},
{ id: 23, title: "A Suitable Boy", author: "Vikram Seth", genre: "Fiction", rating: 4.6, 
  description: "A sweeping novel about post-independence India and arranged marriage. It portrays the complexities of family, love, and politics. The book is known for its intricate storytelling and rich character development.", 
  year: 1993, cover: "https://m.media-amazon.com/images/I/71MQpt0wCkL._AC_UF1000,1000_QL80_.jpg" 
},
{ id: 24, title: "The Inheritance of Loss", author: "Kiran Desai", genre: "Fiction", rating: 4.2, 
  description: "A Booker Prize-winning novel about love, loss, and class struggle. It explores themes of globalization and personal identity. The book is a deeply introspective and beautifully written literary work.", 
  year: 2006, cover: "https://m.media-amazon.com/images/I/81gLGsizwxL.jpg" 
},
{ id: 25, title: "The Argumentative Indian", author: "Amartya Sen", genre: "Philosophy", rating: 4.5, 
  description: "An insightful analysis of India's rich intellectual and cultural history. It presents arguments on democracy, identity, and public debate. The book encourages critical thinking about India's past and future.", 
  year: 2005, cover: "https://m.media-amazon.com/images/I/81jz1oGFymL.jpg" 
  },
{ 
  id: 26,title: "To Kill a Mockingbird",author: "Harper Lee",genre: "Fiction",rating: 4.8,
  description: "A Pulitzer Prize-winning novel that explores themes of racial injustice, morality, and childhood innocence in the American South. The story is told through the eyes of Scout Finch, whose father, Atticus Finch, defends a Black man falsely accused of a crime.",
  year: 1960,cover: "https://m.media-amazon.com/images/I/811NqsxadrS._AC_UF1000,1000_QL80_.jpg"
},
{ id: 27, title: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", genre: "Mythology", rating: 4.7, 
  description: "A retelling of the Mahabharata from Draupadi’s perspective. It provides a fresh feminist take on the legendary epic. The novel explores love, power, and destiny through the eyes of a powerful woman.", 
  year: 2008, cover: "https://via.placeholder.com/150" 
},
{ id: 28,title: "1984",author: "George Orwell",genre: "Dystopian",rating: 4.7,
    description: "A classic novel that presents a chilling vision of a totalitarian society controlled by surveillance and propaganda. It explores themes of government control, truth manipulation, and resistance.",
    year: 1949,cover: "https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg"
},
{ id: 29,title: "Pride and Prejudice",author: "Jane Austen",genre: "Romantic",rating: 4.6,
  description: "A timeless love story that explores themes of class, marriage, and societal expectations. The witty and independent Elizabeth Bennet navigates romance and social pressures in 19th-century England.",
  year: 1813,cover: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg"
},
{ id: 30,title: "The Great Gatsby",author:"F.Scott Fitzgerald",genre: "Tragedy",rating: 4.5,
  description: "A novel set in the Roaring Twenties, depicting themes of wealth, ambition, love, and the American Dream through the life of the mysterious Jay Gatsby and his obsession with Daisy Buchanan.",
  year: 1925,cover: "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg"
},
{ id: 31, title: "Nectar in a Sieve", author: "Kamala Markandaya", genre: "Fiction", rating: 4.3, 
  description: "A powerful novel about a woman’s struggles in rural India. It highlights themes of poverty, resilience, and changing traditions. The story portrays the sacrifices made for survival and the strength of the human spirit.", 
  year: 1954, cover: "https://m.media-amazon.com/images/I/81-gPbEPbEL._AC_UF1000,1000_QL80_.jpg" 
},
{ id: 32, title: "Godan", author: "Munshi Premchand", genre: "Fiction", rating: 4.7, 
  description: "A masterpiece of Hindi literature about the struggles of a poor farmer. It highlights issues of caste, poverty, and social injustice. The novel remains a deeply moving and relevant depiction of rural life.", 
  year: 1936, cover: "https://www.jaicobooks.com/wp-content/uploads/2022/12/j-52-godan-premchand-300x464.jpg" 
},
{ id: 33, title: "Shadow Lines", author: "Amitav Ghosh", genre: "Historical Fiction", rating: 4.4, 
  description: "A novel that explores the meaning of borders and identity. It interweaves personal and political narratives across different time periods. The story beautifully examines memory, history, and human connections.", 
  year: 1988, cover: "https://cdn.penguin.co.in/wp-content/uploads/2023/05/9780143066569.png" 
},
{ id: 34, title: "The Lowland", author: "Jhumpa Lahiri", genre: "Fiction", rating: 4.2, 
  description: "A moving novel about two brothers caught in political turmoil. It examines themes of family, sacrifice, and destiny. The story beautifully portrays the emotional conflicts of migration and belonging.", 
  year: 2013, cover: "https://m.media-amazon.com/images/I/71Yq+5iL8fL._AC_UF1000,1000_QL80_.jpg" 
},
{ id: 29,
  title: "The Catcher in the Rye",author: "J.D. Salinger",genre: "Coming-of-Age",rating: 4.3,
  description: "A novel that captures the struggles of teenage alienation and rebellion through the perspective of Holden Caulfield, a disillusioned young man navigating life in New York City.",
  year: 1951,cover: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg"
},
{ id: 36, title: "Interpreter of Maladies", author: "Jhumpa Lahiri", genre: "Short Stories", rating: 4.6, 
  description: "A Pulitzer Prize-winning collection of short stories about Indian immigrants. Each story beautifully captures human relationships and cultural clashes. The book showcases Lahiri’s talent for subtle, evocative storytelling.", 
  year: 1999, cover: "https://m.media-amazon.com/images/I/81LkW6GZoBL._AC_UF1000,1000_QL80_.jpg" 
},
{ id: 37, title: "The Glass Palace", author: "Amitav Ghosh", genre: "Historical Fiction", rating: 4.5, 
  description: "A sweeping historical novel spanning multiple generations and countries. It narrates the impact of war, colonialism, and exile on individuals. The book is a beautifully written epic about love and loss.", 
  year: 2000, cover: "https://m.media-amazon.com/images/I/71r0ssb2NKL._AC_UF1000,1000_QL80_.jpg" 
},
{ id: 38, title: "Sea of Poppies", author: "Amitav Ghosh", genre: "Historical Fiction", rating: 4.4, 
  description: "The first book in the Ibis Trilogy about the opium trade. It paints a vivid picture of colonial India and maritime adventures. The novel is rich in historical detail and compelling characters.", 
  year: 2008, cover: "https://m.media-amazon.com/images/I/81Xj0peu0IL._UF1000,1000_QL80_.jpg" 
},
{ id: 39,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    rating: 4.6,
    description: "A revolutionary approach to business and product development, focusing on continuous innovation, validated learning, and rapid experimentation to build successful startups.",
    year: 2011,
    cover: "https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg"
},
{ 
   id: 41,
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    rating: 4.8,
    description: "A psychological horror novel about a family staying in an isolated hotel where supernatural forces influence the father into violence, while his son experiences disturbing premonitions.",
    year: 1977,
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-BjwEU-l3otB4NEKlJBbd36cFRg5eZaIdg&s"
  },
];

export default function BookRecommendation() {
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [preferredGenre, setPreferredGenre] = useState("");
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);
  const [userRatings, setUserRatings] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });

  useEffect(() => {
    let updatedBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    if (preferredGenre) {
      updatedBooks = updatedBooks.filter(
        (book) => book.genre.toLowerCase() === preferredGenre.toLowerCase()
      );
    }
    setFilteredBooks(updatedBooks);
  }, [search, preferredGenre]);

  const toggleBookmark = (book) => {
    setBookmarkedBooks((prev) =>
      prev.includes(book) ? prev.filter((b) => b !== book) : [...prev, book]
    );
  };

  const handleRating = (bookId, rating) => {
    setUserRatings((prevRatings) => ({ ...prevRatings, [bookId]: rating }));
  };

  const addBook = () => {
    if (newBook.title && newBook.author && newBook.genre) {
      const bookToAdd = {
        ...newBook,
        id: filteredBooks.length + 1,
        rating: 4.0,
        cover: "https://via.placeholder.com/150"
      };
      setFilteredBooks([...filteredBooks, bookToAdd]);
      setNewBook({ title: "", author: "", genre: "" });
      setShowAddBookForm(false);
    }
  };

  return (
    <div className="container">
      <button onClick={() => setShowAddBookForm(true)}>Add Book</button>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={preferredGenre} onChange={(e) => setPreferredGenre(e.target.value)}>
        <option value="">All Genres</option>
        {[...new Set(booksData.map((book) => book.genre))].map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select>
        <option value="">Bookmarked Books</option>
        {bookmarkedBooks.map((book) => (
          <option key={book.id} value={book.title}>
            {book.title}
          </option>
        ))}
      </select>

      {showAddBookForm && (
        <div>
          <input
            type="text"
            placeholder="Book Name"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author Name"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Genre"
            value={newBook.genre}
            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          />
          <button onClick={addBook}>Add</button>
        </div>
      )}

      <div className="grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card">
            <h3
              onClick={() => setSelectedBook(book)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {book.title}
            </h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => handleRating(book.id, star)}
                  color={userRatings[book.id] >= star ? "gold" : "gray"}
                  fill={userRatings[book.id] >= star ? "gold" : "gray"}
                />
              ))}
              <span>{book.rating}</span>
            </div>
            <button onClick={() => toggleBookmark(book)}>
              <Bookmark color={bookmarkedBooks.includes(book) ? "gold" : "gray"} />
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="dialog-overlay" onClick={() => setSelectedBook(null)}>
          <div
            className={`dialog-box ${selectedBook.genre.toLowerCase()}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelectedBook(null)}>
              &times;
            </span>
            <h2>{selectedBook.title}</h2>
            <img src={selectedBook.cover} alt={selectedBook.title} className="book-cover" />
            <p>
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p>
              <strong>Genre:</strong> {selectedBook.genre}
            </p>
            <p>
              <strong>Year:</strong> {selectedBook.year}
            </p>
            <p>
              <strong>Rating:</strong> {selectedBook.rating}
            </p>
            <p>
              <strong>Description:</strong> {selectedBook.description}
            </p>

            {/* Adding genre-based animations inside the dialog */}
            {selectedBook.genre === "Romantic" && <div className="floating-hearts"></div>}
            {selectedBook.genre === "Horror" && <div className="spooky-effect"></div>}
          </div>
        </div>
      )}
    </div>
  );
}