export default function ContactPage() {
  return (
    <div className="contact-body">
      <form action="" method="get" className="form-example">
        <div className="form-example">
          <label htmlFor="name">Name: </label><br />
          <input type="text" name="name" id="name" size="36" required />
        </div>
        <div className="form-example">
          <label htmlFor="email">Email Address: </label><br />
          <input type="email" name="email" id="email" size="36" required />
        </div>
        <div className="form-example">
          <label htmlFor="message">Message: </label><br />
          <textarea name="message" id="message"/>
        </div>
        <div className="form-example">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
