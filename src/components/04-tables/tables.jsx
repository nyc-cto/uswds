/**
 * JSX Tables Component Attributes
 * @function Tables
 * @param {Object} config The configuration object for table attributes
 * @property {string} config.name  - The name of the table.
 * @property {string} config.class - The classes inherited from the USWDS CSS files. The default class is `usa-table` and additions can be appended.
 * @property {Array} config.header - The array of data for the column header.
 * @property {Array} config.row    - The array string array to define each row and its corresponding cell.
 * @property {string} config.id    - The ID of the table
 * @example
 *   const config = {
 *     name: "Table",
 *     class: "usa-table--borderless",
 *     header: [
 *       "Document title",
 *       "Description",
 *       "Year"
 *     ],
 *     row: [
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
 *     ],
 *     id: "813"
 *   };
 *   Tables(config)
 * @returns {Tables} The Tables
 */
exports.Tables = function(config) {
  return (
    <table id={`${config.tableID}`} class={`usa-table ${config.class}`}>
      <caption>{config.caption}</caption>
      <thead>
        <tr>{createHeader(config)}</tr>
      </thead>
      <tbody>{createRow(config)}</tbody>
    </table>
  );
};

// createHeader will generate the columns
function createHeader(config) {
  let tableHeader = [];

  for (let i = 0; i < config.header.length; i++) {
    tableHeader.push(`<th scope='col'>${config.header[i]}</th>`);
  }

  return tableHeader.join("\n");
}
// createRow will generate 1 or more rows depending on config specified
function createRow(config) {
  let tableData = [];

  for (let i = 0; i < config.row.length; i++) {
    tableData.push("<tr>", `<th scope='row'>${config.row[i][0]}</th>`);

    for (let j = 1; j < config.row[i].length; j++) {
      tableData.push(`<td>${config.row[i][j]}</td>`);
    }

    tableData.push("</tr>");
  }

  return tableData.join("\n");
}
