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
exports.Accordion = function (config) {
  const variant = config.variant ? `usa-accordion--${config.variant}` : "";
  const itemArray = [];

  for (let i = 0; i < config.items.length; i += 1) {
    itemArray.push(AccordionItem(config.id_prefix, config.items[i]));
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
/**
 * JSX Accordion Item Component Attributes
 * @function AccordionItem
 * @param {string} id_prefix - The ID prefix for the entire accordion
 * @param {Object} itemConfig - Configuration object containing all properties for an accordion item
 * @property {boolean} itemConfig.expanded  - The boolean that determines if the item is expanded
 * @property {string} itemConfig.id         - The ID of an item
 * @property {string} itemConfig.title      - The title of an item
 * @property {string} itemConfig.content    - The content of an item
 * @example
 *    const itemConfig={
 *      expanded: false,
 *      id: "1",
 *      title: "Example",
 *      content: "This is just an example of what could be inside of an accordion item"
 * }
 * AccordionItem ("a", itemConfig);
 */
exports.AccordionItem = function (id_prefix, itemConfig) {
  return (
    <>
      <h2 class="usa-accordion__heading">
        <button
          class="usa-accordion__button"
          aria-expanded={itemConfig.expanded}
          aria-controls={`${id_prefix}${itemConfig.id}`}
        >
          {itemConfig.title}
        </button>
      </h2>
      <div
        id={`${id_prefix}${itemConfig.id}`}
        class="usa-accordion__content usa-prose"
      >
        <p> {itemConfig.content}</p>
      </div>
    </>
  );
};
