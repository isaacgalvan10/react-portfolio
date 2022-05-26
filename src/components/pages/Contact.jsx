import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="form-container card2">
        <div>
          <p>
            Email:{' '}
            <a
              href="mailto:galvan1522@gmail.com"
              target={'_blank'}
              rel="noreferrer"
            >
              galvan1522@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p>
            Number:{' '}
            <a href="tel:+14093137845" target={'_blank'} rel="noreferrer">
              +1(409)-313-7845
            </a>
          </p>
        </div>

        {/* <form
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
          <textarea name="message" id="message" rows="5" />
          <br />
          <input type="submit" value="Submit" className="card__btn" />
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
