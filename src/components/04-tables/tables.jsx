/**
 * JSX Tables Component Attributes
 * @function Tables
 * @param {Object} config - The configuration object for table attributes
 * @property {string} config.name  - The name of the table.
 * @property {string} config.class - The classes inherited from the USWDS CSS files. The default class is `usa-table` and additions can be appended.
 * @property {Array} config.children - When this template is used to make a react component @babel/core will change "config" to "props" so that children components can be accessed.
 * @property {string} config.id    - The ID of the table
 * @example
 *   const config = {
 *     name: "Table",
 *     class: "usa-table--borderless",
 *     id: "813"
 *   };
 *   Tables(config)
 * @returns {HTMLTableElement} The HTML Table
 */
exports.Tables = function (config) {
  return (
    <table id={`${config.tableID}`} class={`usa-table ${config.class}`}>
      <caption>{config.caption}</caption>
      {config.children}
    </table>
  );
};

/**
 * @function TableHeader - function that returns HTML code for a table header
 * @param {Object} config - configuration object for tables
 * @property {Array} config.header - The array of objects that contain data for the column header
 * @property {string} config.header.text - Text to be placed in the table header cell
 * @property {string} [config.header.class] - Additional class to be placed into <th> element (Optional)
 * @example
 *  const config = {
 *   header: [
 *       {
 *        text: "Document title",
 *        class: ""
 *       },
 *       {
 *        text: "Description",
 *        class: ""
 *       },
 *       {
 *        text: "Year",
 *        class: ""
 *       }
 *     ]
 * }
 * TableHeader(config);
 * @returns {HTMLTableHeaderElement} - The HTML for the table header
 */
exports.TableHeader = function (config) {
  let tableHeader = [];

  for (let i = 0; i < config.header.length; i++) {
    tableHeader.push(
      `<th class='${config.header[i].text}' scope='col'>${config.header[i].text}</th>`
    );
  }

  return (
    <thead>
      <tr>{tableHeader.join("\n")}</tr>
    </thead>
  );
};
/**
 * @function TableRow - function that returns HTML code for a table row
 * @param {Object} config - configuration object for tables
 * @property {string} [config.class] - Class that can be added into <th> element (Optional)
 * @property {Array} config.data - The array of strings that define each cell within a row.
 * @example
 * const config = {
 *  class: ""
 *  data: [
 *         "Declaration of Independence",
 *         "Statement adopted by the...",
 *         "1776",
 *       ]
 * };
 * TableRow(config);
 * @returns {HTMLTableRowElement} - The HTML for the table row
 */
exports.TableRow = function (config) {
  let tableData = [];
  tableData.push(
    `<th class='${config.class}' scope='row'>${config.data[0]}</th>`
  );

  for (let i = 1; i < config.row.length; i++) {
    tableData.push(`<td>${config.row[i]}</td>`);
  }

  return <tr>{tableData.join("\n")}</tr>;
};
