import ContactData from '../components/ContactData';
import contact from '../api/contact.json';
import '../pages/ContactPage.css';
function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact">
        {contact.map((item, index) => (
          <ContactData key={index} tittle={item.tittle} value={item.value} />
        ))}
      </div>
    </div>
  );
}
export default Contact;
