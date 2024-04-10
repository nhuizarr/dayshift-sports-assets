const express = require("express");
const app = express();
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(
    `DayShift Sports Assets server running at http://localhost:${port}`
  );
});
