/**
 * JSX Alert Component Attributes
 * @function Alert
 * @param {Object} config - The configuration object for alert attributes
 * @property {string} config.class - The classes inherited from the USWDS CSS files. The default class is `usa-alert` and additions can be appended.
 * @property {string} config.headerText - The text to be displayed as the header for the alert, if its supposed to have one.
 * @property {string} config.innerText - The actual alert message text to be displayed in the body of the Alert element
 * @example
 * const config = {
 *      class: "usa-alert--success",
 *      headerText: "Success status"
 *      innerText: "Your submission was successfull! You should recieve an email from us shortly."
 * }
 * @example - When using "usa-alert--slim" or "usa-alert--no-icon" there is not supposed to be a header
 *  const config = {
 *      class: "usa-alert--info usa-alert--slim",
 *      headerText: null
 *      innerText: "Note: Some aspects of the site are a work in progress and may have some bugs. We appreciate your patience."
 * }
 * @returns {HTMLDivElement} The JSX HTML Alert element
 */

exports.Alert = function (config) {
  theHeader = alertHeader(config);
  return (
    <div class={`usa-alert ${config.class}`}>
      ::before
      <div class="usa-alert__body">
        {theHeader}
        <p class="usa-alert__text">{config.innerText}</p>
      </div>
    </div>
  );
};
/**
 * @function alertHeader
 * @param {Object} config - The configuration object for alert attributes
 * @property {string} config.headerText - The text to be displayed as the header for the alert, if its supposed to have one.
 * @returns {HTMLHeadElement} - The header that may or may not be in the alert element
 */
let alertHeader = function (config) {
  if (
    //these 2 CSS classes aren't supposed to have a header
    config.class.includes("usa-alert--slim") ||
    config.class.includes("usa-alert--no-icon")
  ) {
    return;
  } else {
    //any other class can have a header
    return <h3 class="usa-alert__heading">{config.headerText}</h3>;
  }
};
