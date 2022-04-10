const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="form__container">
        <form
          action="mailto:galvan1522@gmail.com"
          method="POST"
          encType="text/plain"
          name="ContactFrom"
        >
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea name="message" id="message" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
