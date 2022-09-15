
// Declare React States for error messages and isSubmitted

// errorMessages: Store an object with an error message and the name of the field.
const [errorMessages, setErrorMessages] = useState({});

// isSubmitted: boolean value to indicate if the form is successfully submitted or not.
const [isSubmitted, setIsSubmitted] = useState(false);


// The renderErrorMessage function returns JSX code for displaying the error message associated with the field name.

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  // JSX code for login form
  // Additionally, we will also add error messages below every form input element.


  // JSX code for login form
const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
 );


// Validate form input with user details
// To add login functionality to the form, first, we declare all the correct user details in JS constants.
// The following steps are required to accomplish the functionality:


/*  Find expected user details by matching user names.
    If a match is not found then add the error message “invalid username“
    else validate the password, show the error message “invalid password” if validation fails.
    setIsSubmitted(true) if all validations pass.  */

    // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
// Add function to handle form submit
// To achieve login functionality, we need to create a JS function to handle form submission with validations.
// The handleSubmit() function accesses the event object of the form element
// event.preventDefault() code avoids default form submit action which includes reloading of the page.


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Show success message after submit
  // We will add condition rending in React JS based on the isSubmitted state value.
  
  // If isSubmitted=true, show message “User is successfully logged in”.
  // Else isSubmitted=false, display the login form.

  <div className="login-form">
  <div className="title">Login</div>
  {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
</div>