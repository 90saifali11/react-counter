function Input(){
    return (<section id="contact">
        <h2>Contact</h2>
        <form action="submit_form.php" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required="" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required="" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required="" defaultValue={""} />
          <button type="submit">Send Message</button>
        </form>
      </section>)
}
export default Input