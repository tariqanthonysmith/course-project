function Book({ img, title, author, children, id }) {
    return (
      
        <article className="book">
          <p className="number">#{id}</p>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author}</h4>
          {children}
        </article>
      
    );
}
  
export default Book;