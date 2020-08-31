/**
 * @function Tooltip
 * @param {Object} config - Configuration object for tooltip components
 * @property {string} config.class - string that specifies class for the tooltip
 * @property {string} config.id - ID number in string form for the tooltip
 * @property {boolean} config.hidden - Boolean property that if set to "true" removes that element and all of its children from the accessibility tree
 * @property {string} config.innerText - string that is the actual text to be displayed in the tooltip
 * @example
 * const config={
 *      class: "usa-tooltip__body--top"
 *      id: "867530"
 *      hidden: true
 *      innerText: "This text will be displayed on top"
 * }
 * Tooltip(config)
 * @example
 * const config={
 *      class: "usa-tooltip__body--right"
 *      id: "013370"
 *      hidden: true
 *      innerText: "This text will be displayed on to the right"
 * }
 * Tooltip(config)
 * @returns {HTMLSpanElement} - The HTML code for the tooltip
 */

exports.Tooltip = function (config) {
  return (
    <span class="usa-tooltip">
      <span
        class={`usa-tooltip__body ${config.class}`}
        id={`tooltip-${config.id}`}
        role="tooltip"
        aria-hidden={config.hidden}
      >
        {config.innerText}
      </span>
    </span>
  );
};
