function submissionForm() {
    //RECORD PARAMETERS
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("emailAdd").value;
    
    //PRINT TO BROWSER CONSOLE
    console.clear();
    console.log("USER INFORMATION:");
    console.log("   Name: " + firstName + lastName);
    console.log("   Email Address: " + email);
};

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
};