// App.js
import React, { useState } from "react";
import Home from "./Home";
import BookRecommendation from "./components/BookRecommendation";

export default function App() {
  const [user, setUser] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("Fantasy");

  return (
    <div>
      {user ? <BookRecommendation /> : <Home onLogin={setUser} />}
    </div>
    
  );
}