/**
 * JSX Accordion Component Attributes
 * @function Accordion
 * @param {Object} config The configuration object for accordion attributes
 * @property {string} config.variant          - The USWDS Accordion variant
 * @property {boolean} config.multiselectable - The aria property for multiselectable
 * @property {string} config.id_prefix        - The ID prefix for the accordion
 * @property {Array} config.items             - The array of items in the accordion body
 * @property {boolean} config.items.expanded  - The boolean that determines if the item is expanded
 * @property {string} config.items.id         - The ID of an item
 * @property {string} config.items.title      - The title of an item
 * @property {string} config.items.content    - The content of an item
 * @example
 *   const config = {
 *     variant: "bordered",
 *     multiselectable: true,
 *     id_prefix: "a",
 *     items: [
 *       {
 *         expanded: false,
 *         id: "1",
 *         title: "1st Amendment",
 *         content: "Religion and Expression",
 *       },
 *       {
 *         expanded: true,
 *         id: "2",
 *         title: "2nd Amendment",
 *         content: "Bearing Arms",
 *       },
 *     ],
 *   };
 *   Accordion(config);
 * @returns {Accordion} The Accordion
 */
exports.Accordion = function(config) {
  const variant = config.variant ? `usa-accordion--${config.variant}` : "";
  const itemArray = [];

  for (let i = 0; i < config.items.length; i += 1) {
    itemArray.push(
      <>
        <h2 class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded={config.items[i].expanded}
            aria-controls={`${config.id_prefix}${config.items[i].id}`}
          >
            {config.items[i].title}
          </button>
        </h2>
        <div
          id={`${config.id_prefix}${config.items[i].id}`}
          class="usa-accordion__content usa-prose"
        >
          {config.items[i].content}
        </div>
      </>
    );
  }

  return (
    <div
      class={`usa-accordion ${variant}`}
      aria-multiselectable={config.multiselectable}
    >
      {itemArray}
    </div>
  );
};
