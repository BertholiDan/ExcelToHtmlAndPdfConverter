const { Console } = require("console");

class Processor {
  static Process(data) {
    var a = data.split("\r\n");
    var rows = [];
    // console.log(a);
    a.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
    return rows;
    // console.log(rows);
  }
}

module.exports = Processor;
