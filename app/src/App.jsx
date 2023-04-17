import './App.css'

const EventExample = () => {

  const handleFormInput = (event) => {
    console.log(event.target.value, event.target.name);
  }

  const handleClick = (event) => {
    console.log("Button Clicked!", event.target)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", e);
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Some Form</h2>
        <input
        type='text'
        name='example'
        onChange={(e) => {console.log(e.target.value)}}
        style={{margin: "1rem 0"}} />
        <button type='submit'>Submit Form</button>
      </form>
      <button onClick={handleClick}>Click Me!</button>
    </section>
  )
}

const bookArray = [{
  img: "https://m.media-amazon.com/images/I/512cU+NhyAL._SX314_BO1,204,203,200_.jpg",
  title: "Lessons in Chemistry",
  author: "Bonnie Garmus",
  id: 1
},
{
  img: "https://m.media-amazon.com/images/I/4138h5XntrL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
  title: "The Boy, The Mole, The Fox and The Horse",
  author: "Charlie Mackesy",
  id: 2
}]

function App() {

  const getBook = (id) => {
    let findBook = bookArray.filter(bookArray => bookArray.id === id)
    console.log(findBook)
  }

  return (
    <section className='booklist'>
      <EventExample/>
      {bookArray.map((book) => {
        const { img, title, author, id} = book;
        return (
          <Book
            key={id}
            img={img}
            title={title} 
            author={author}
            getbook={getBook(id)}/>
        )
      })}
    </section>
  );
}

function Book({ img, title, author, children, getBook, id}) {


  return (
    <article className='book'>
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      <button onClick={(e) => {getBook(id)}}>Click ME!</button>
    </article>
  );
}

export default App
