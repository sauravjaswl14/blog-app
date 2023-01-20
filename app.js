const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => console.log("Listening..."));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi found eggs",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident velit pariatur fugit. Repudiandae incidunt recusandae et iste alias exercitationem laboriosam!",
    },
    {
      title: "Ryu found Aliens",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident velit pariatur fugit. Repudiandae incidunt recusandae et iste alias exercitationem laboriosam!",
    },
    {
      title: "Shaun fought the chickens",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident velit pariatur fugit. Repudiandae incidunt recusandae et iste alias exercitationem laboriosam!",
    },
  ];
  res.render("index", { blogs });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).render("404");
});
