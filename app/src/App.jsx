import "./App.css";

import EventExample from "./EventExample";
import bookArray from "./books";
import Book from "./Book";

function App() {
  return (
    <>
      <div id="heading">
        <h1 className="title">Amazon Best Sellers</h1>
        <p className="title">Our most popular products based on sales. Updated frequently</p>
      </div>
      
      <section className="booklist">
        <EventExample />
        {bookArray.map((book, index) => {
          const { img, title, author, id } = book;
          return <Book key={index} img={img} title={title} author={author} id={id}/>;
        })}
      </section>
    </>
  );
}

export default App;
