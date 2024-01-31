// Apply.js

import React from 'react';
import '../Style/Apply.css';

class Apply extends React.Component {
  render() {
    return (
      <RegistrationForm />
    );
  }
}

class RegistrationForm extends React.Component {
  render() {
    return (
       

      <div className="ap-bg">
        <div className="ap-fc">
          <form className="ap-f" action="#" method="POST">
            <fieldset>
              <h1>Application Form</h1>
              <div className="ap-fn">
                <input type="text" name="fName" className="ap-fn" placeholder="First Name" required />
                <input type="text" name="lName" className="ap-ln" placeholder="Last Name" required />
              </div>
              <div className="ap-oi">
                <input type="date" name="dob" className="ap-dob" placeholder="Date of Birth" required />
                <select name="gender" className="ap-gender" required>
                  <option value="" disabled selected hidden>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input type="text" name="address" className="ap-ad" placeholder="Address" required />
                <input type="tel" name="phone" className="ap-ph" placeholder="Telephone Number" required />
                <input type="email" name="email" className="ap-em" placeholder="Email Address" required />
                
                {/* New Field: Event */}
                <select name="event" className="ap-event" required>
                  <option value="" disabled selected hidden>Select Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Wedding Anniversary</option>
                  <option value="genderReveal">Gender Reveal</option>
                  <option value="successMeet">Success Meet</option>
                </select>

                {/* New Field: Total no. of people */}
                <input type="number" name="totalPeople" className="ap-total" placeholder="Total No. of People" required />
              </div>
              <div className="ap-addons">
                <label>Add-ons:</label>
                <div>
                  <input type="checkbox" name="dj" value="dj" /> DJ<br>
                  </br>
                  <input type="checkbox" name="dance" value="dance" /> Dance<br></br>
                  <input type="checkbox" name="balloons" value="balloons" /> Balloons<br></br>
                  <input type="checkbox" name="drinks" value="drinks" /> Drinks<br></br>
                  {/* Add more checkboxes for additional add-ons */}
                </div>
              </div>
              <br /><br />
              <input type="submit" name="submit" className="ap-su" />
            </fieldset>
          </form>
        </div>
      </div>
        
    );
  }
}

export default Apply;
