import './App.css'

function App() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src='https://m.media-amazon.com/images/I/512cU+NhyAL._SX314_BO1,204,203,200_.jpg' alt='Lessons in Chemistry, Bonnnie Garmus'/>;
const Title = () => <h2>Lessons in Chemistry</h2>
const Author =() => <h4>Bonnie Garmus</h4>

export default App
