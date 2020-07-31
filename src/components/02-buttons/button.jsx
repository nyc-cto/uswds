{
  /* 
  ATTRIBUTES FOR THE BUTTON
  ******************************
  class
  This will specify what CSS the button will get from USWDS' CSS files.
  The base class is usa-button with additions coming from the config.class property passed in
  ----------------------------
  autofocus 
  Comes from HTML5
  This Boolean attribute specifies that the button should have input focus when the page loads. 
  Only one element in a document can have this attribute. 
  ----------------------------
  disabled
  This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
  Firefox, unlike other browsers, persists the dynamic disabled state of a <button> across page loads.
  Use the autocomplete attribute to control this feature.
  ----------------------------
  name
  The name of the button, submitted as a pair with the button’s value as part of the form data.
  ----------------------------
  type
  The default behavior of the button. Possible values are:
  submit: The button submits the form data to the server.
  This is the default if the attribute is not specified for buttons associated with a <form>, or if the attribute is an empty or invalid value.
  reset: The button resets all the controls to their initial values, like <input type="reset">. (This behavior tends to annoy users.)
  button: The button has no default behavior, and does nothing when pressed by default. 
  It can have client-side scripts listen to the element's events, which are triggered when the events occur.
  ----------------------------
  value
  Defines the value associated with the button’s name when it’s submitted with the form data. This value is passed to the server in params when the form is submitted.
  */
}
exports.render = function (config) {
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
