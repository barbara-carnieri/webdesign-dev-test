//Get the data value from the form

  let firstName = '';
  let lastName = '';
  let companyName = '';
  let email = '';
  let subscription = false;

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
 
    firstName = e.target[0].value;
    lastName = e.target[1].value;
    companyName = e.target[2].value;
    email = e.target[3].value;
    subscription = e.target[4].checked === true ? true : false;

    // Regroup the variables in an obj ready to POST method
    const user = {
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      email: email,
      subscription: subscription
    }
    console.log('USER DATA:', user);
  })
