import "./App.css";

import EventExample from "./EventExample";
import bookArray from "./books";
import Book from "./Book";

function App() {
  return (
    <section className="booklist">
      <EventExample />
      {bookArray.map((book, index) => {
        const { img, title, author } = book;
        return <Book key={index} img={img} title={title} author={author} />;
      })}
    </section>
  );
}

export default App;
