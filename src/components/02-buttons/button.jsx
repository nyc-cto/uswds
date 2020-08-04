{
  /**  
  ATTRIBUTES FOR THE BUTTON
  ******************************
  @namespace
  @property {string} class
   - This will specify what CSS the button will get from USWDS' CSS files.
  The base class is usa-button with additions coming from the config.class property passed in
  ----------------------------
  @property {boolean} autofocus 
   - This Boolean attribute specifies that the button should have input focus when the page loads. 
  Only one element(button) in a document can have this attribute. 
  ----------------------------
  @property {boolean} disabled
   - Boolean attribute that prevents the user from interacting with a button i.e.(cannot click on the button).
  ----------------------------
  @property {string} name      - The name of the button.
  ----------------------------
  @property {string} type      - 
  submit: The button submits the form data to the server (default type if not specifed). 
  button: Used for events (onclick, onfocus, onhover)
  reset: reset controls to their initial values
  ----------------------------
  @property {string} value
   - Defines the value associated with the button’s name when it’s submitted with the form data. This value is passed to the server in params when the form is submitted.
  ------------------------------
  @property {string} innerText  - The text to displayed on the button 
  Setting Up Config 
  ******************************
  single class usage
  @example 
  const config = {
    class: "--secondary",
    autofocus: "true",  //boolean value only
    disabled: "false",  //boolean value only
    name: "Button",
    type: "submit",
    value: "",
    innerText ="Button"
  }
  @returns
  <button
      class="uswds-button--secondary"
      autofocus=true
      disabled=true
      name="Button"
      type="submit"
      value=""
    >
      Button
    </button>
-------------------------------------
  multiple class usage
  @example
    const config = {
    class: "--outline usa-button--inverse",
    autofocus: "true",  //boolean value only
    disabled: "false",  //boolean value only
    name: "Button",
    type: "submit",
    value: "",
    innerText ="Button"
  }
  @returns
  <button
      class="uswds-button--outline usa-button--inverse"
      autofocus=true
      disabled=true
      name="Button"
      type="submit"
      value=""
    >
      Button
    </button>
  */
}
exports.render = function(config) {
  return (
    <button
      class={`uswds-button${config.class}`}
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
