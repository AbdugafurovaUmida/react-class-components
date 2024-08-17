import './ControlledForm.css';

const ControlledForm = () => {
  return (
    <div className="controlled-wrapper">
      <h1>Controlled Form</h1>
      <form action="">
        <div>
          <div className="input-field">
            <label htmlFor="name">Full Name:</label>
            <input className="usual-field" type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age:</label>
            <input className="usual-field" type="number" id="age" placeholder="Enter your age" min="0" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input className="usual-field" type="text" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input className="usual-field" type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input className="usual-field" type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="input-field">
            <label htmlFor="female">Female:</label>
            <input type="radio" name="gender" value="female" id="female" />
          </div>
          <div className="input-field">
            <label htmlFor="male">Male:</label>
            <input type="radio" name="gender" value="male" id="male" />
          </div>
          <div className="input-field">
            <label htmlFor="terms">
              <input type="checkbox" name="terms" id="terms" required />I agree to the Terms and Conditions
            </label>
            {/* {!agreeToTerms && <div className="error">You must agree to the Terms and Conditions.</div>} */}
          </div>
          <div className="input-field">
            <input type="file" />
          </div>
          <div className="input-field">
            <label htmlFor="country">Country:</label>
            <input className="usual-field" type="text" id="country" placeholder="Search for a country" />
          </div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
