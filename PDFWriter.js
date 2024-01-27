var pdf = require("html-pdf");

class PDFWriter {
  static WritePDF(filename, html) {
    pdf
      .create(html, {
        childProcessOptions: {
          env: {
            OPENSSL_CONF: "/dev/null",
          },
        },
      })
      .toFile(filename, (err) => {});
  }
}

module.exports = PDFWriter;
