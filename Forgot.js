// Select the "Send Email" button
  const sendEmailButton = document.querySelector('.button-submit');

  // Add a click event listener to the button
  sendEmailButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    alert('An email has been sent to your address!');
  });