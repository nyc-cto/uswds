let config = {
  class: "usa-table--borderless"
  header: ["Column1", "Column2", "Coulmn3"],
  row: 3,
  name: "Table",
  data: {
    row1: ["Row 1 Column 1", "Row 1 Column 2 ", "Row 1 Column 3"],
    row2: ["Row 2 Column 1", "Row 2 Column 2", "Row 2 Column 3"],
    row3: ["Row 3 Column 1", "Row 3 Column 2", "Row 3 Column 3"],
  }
};

//createHeader will generate the columns
function createHeader(config) {
  let tableHeader = [];
  for (let i = 0; i < config.header.length; i++) {
    let replaceHeader = `<th scope='col'>${config.header[i]}</th>`;
    tableHeader.push(replaceHeader);
  }
  return tableHeader.join("\n");
}
//createRow will generate 1 or more rows depending on config specified
function createRow(config) {
  let tableData = [];
  let replaceData;
  //take data object and seperate each array
  for (const rows in config.data) {
    //split arrays per element into table html style <tr> <td> data </td> </tr>
    for (const rowsArray of config.data[rows]) {
      if (rowsArray == config.data[rows][config.row - 1]) {
        replaceData = `<td scope='row'>${rowsArray}</td> </tr>`;
        tableData.push(replaceData);
      } else {
        replaceData = `<td scope='row'>${rowsArray}</td>`;
        //if row data is at element 0 create new table row tag
        if (rowsArray == config.data[rows][0]) {
          replaceData = `<tr>  <th scope='row'>${rowsArray}</th>`;
        }
        tableData.push(replaceData);
      }
    }
  }
  return tableData.join("\n");
}

exports.Table = function (config) {
  return (
    <table class={`usa-table ${config.class}`}>
      <caption>{config.caption}</caption>
      <thead>
        <tr>{createHeader(config)}</tr>
      </thead>
      <tbody>{createRow(config)}</tbody>
    </table>
  );
}