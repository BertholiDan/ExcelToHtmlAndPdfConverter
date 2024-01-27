var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

// var dados = leitor.Read("./users.csv");

async function main() {
  var dados = await leitor.Read("./users.csv");
  // console.log(dados);
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  // console.log(usuarios.rows);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".PDF", html);

  // console.log(html);

  // usuarios.rows.push(["jao ajo", "Formação PHP", "php", "32"]);
  // usuarios.rows.push(["jao ajo", "Formação PHP", "php", "32"]);

  // console.log(usuarios.RowCount);
  // console.log(usuarios.ColumnCount);

  // console.log(usuarios.rows);
}

main();
