/**
 * JSX Label Component Attributes
 * @function Label
 * @param {Object} config The configuration object for label attributes
 * @property {string} config.class - The classes inherited from the USWDS CSS files. The default class is `usa-label` and additions can be appended.
 * @property {string} config.for - The for attribute is supposed to match the 'id' attribute of a labelable form element that exists within the same document as the <label> element.
 *  The first element in the document with an id matching the value of the for attribute is the labeled control for this label element, if it is a labelable element.
 * If it is not labelable then the for attribute has no effect.
 * If there are other elements which also match the id value, later in the document, they are not considered.
 * @property {string} config.innerText - The text to be displayed for the label
 * @example
 * const config = {
 *     class: "",
 *     for: "submit"
 *     innerText: "Click here to submit your form: "
 *   }
 * Label(config);
 * @returns {HTMLLabelElement} The HTML Label
 * <label class=`usa-label` for="submit">
 *    Click here to submit your form: 
 * </label>
 */

exports.Label = function (config) {
  return (
    <label class={`usa-label ${config.class}`} for={config.for}>
      {config.innerText}
    </label>
  );
};
