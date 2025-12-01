import './FeedbackForm.css';
function FeedbackForm() {
  return (
    <div className="feedback-form">
      <label>Name</label>
      <input type="text" placeholder="Enter your Name.." />
      <label>Email</label>
      <input type="email" placeholder="Enter Your E-Mail.." />
      <label>Feedback Message</label>
      <textarea placeholder="Your FeedBack Message" />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </div>
  );
}
export default FeedbackForm;
