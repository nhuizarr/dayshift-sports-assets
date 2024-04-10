require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(
    `DayShift Sports Assets server running at http://localhost:${port}`
  );
});
