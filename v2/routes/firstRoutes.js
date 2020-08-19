const path = require("path");

const html_dir = path.join(__dirname, "/../files/");

module.exports = (app) => {
  //Homepage
  app.get("/", (req, res) => {
      try{
        res.sendFile(html_dir + "/index.html");
      }
      catch{
        res.status(404).send("Sorry can't find that!")
      }

  });

    //wowpage
    app.get("/wow", (req, res) => {
        try{
            res.sendFile(html_dir + "/wow.html");
        }
        catch{
            res.status(404).send("Sorry can't find that!");
        }
      });
}