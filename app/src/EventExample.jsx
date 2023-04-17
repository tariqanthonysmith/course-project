const EventExample = () => {
    const handleFormInput = (event) => {
      console.log(event.target.value, event.target.name);
    };
  
    const handleClick = (event) => {
      console.log("Button Clicked!", event.target);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted", e);
    };
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Some Form</h2>
          <input
            type="text"
            name="example"
            onChange={handleFormInput}
            style={{ margin: "1rem 0" }}
          />
        </form>
        <button onClick={handleClick}>Click Me!</button>
      </section>
    );
};

export default EventExample