{
  /* 
  ATTRIBUTES FOR THE BUTTON
  ******************************
  class
  This will specify what CSS the button will get from USWDS' CSS files.
  The base class is usa-button with additions coming from the config.class property passed in
  ----------------------------
  autofocus 
  This Boolean attribute specifies that the button should have input focus when the page loads. 
  Only one element(button) in a document can have this attribute. 
  ----------------------------
  disabled
  Boolean attribute that prevents the user from interacting with a button i.e.(cannot click on the button).
  ----------------------------
  name
  The name of the button.
  ----------------------------
  type
  submit: The button submits the form data to the server (default type if not specifed). 
  button: Used for events (onclick, onfocus, onhover)
  reset: reset controls to their initial values
   ----------------------------
  value
  Defines the value associated with the button’s name when it’s submitted with the form data. This value is passed to the server in params when the form is submitted.
  */
}
exports.render = function(config) {
  return (
    <button
      class={`uswds-button ${config.class}`}
      autofocus={config.autofocus}
      disabled={config.disabled}
      name={config.name}
      type={config.type}
      value={config.value}
    >
      {config.innerText}
    </button>
  );
};
