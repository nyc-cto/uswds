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
 * @property {Array} config.header - The array of data for the column header.
 * @example
 *  const config = {
 *   header: [
 *       "Document title",
 *       "Description",
 *       "Year"
 *     ]
 * }
 * TableHeader(config);
 * @returns {HTMLTableHeaderCellElement} - The HTML for the table header
 */
exports.TableHeader = function (config) {
  let tableHeader = [];

  for (let i = 0; i < config.header.length; i++) {
    tableHeader.push(`<th scope='col'>${config.header[i]}</th>`);
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
 * @property {Array} config.row - The 2D array of strings that define each row and cell within that row.
 * @example
 * const config = {
 *  row: [
 *       [
 *         "Declaration of Independence",
 *         "Statement adopted by the...",
 *         "1776",
 *       ],
 *       [
 *         "Bill of Rights",
 *         "The first ten amendments of the U.S...",
 *         "1791"
 *       ],
 *       [
 *         "Row-n Column-1",
 *         "Row-n Column-2",
 *         "Row-n Column-3"
 *       ],
 *     ]
 * };
 * TableRow(config);
 * @returns {HTMLTableRowElement} - The HTML for the table row
 */
exports.TableRow = function (config) {
  let tableData = [];

  for (let i = 0; i < config.row.length; i++) {
    tableData.push("<tr>", `<th scope='row'>${config.row[i][0]}</th>`);

    for (let j = 1; j < config.row[i].length; j++) {
      tableData.push(`<td>${config.row[i][j]}</td>`);
    }

    tableData.push("</tr>");
  }

  return <tbody>{tableData.join("\n")}</tbody>;
};
