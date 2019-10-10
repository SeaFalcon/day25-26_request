import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  let { url } = req.query;
  if (typeof url === "string" && !url.includes("http")) url = `http://${url}`;
  console.log(url);
  request(url, (err, res2, body) => {
    console.log("error:", err); // Print the error if one occurred
    console.log("statusCode:", res2 && res2.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.

    if (res2.statusCode <= 445) return res.send("up");
    return res.json("down");
  });
});

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

// /?url=nomadcoders.co
