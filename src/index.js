import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  let { url } = req.query;
  if (typeof url === "string" && !url.includes("http")) url = `http://${url}`;
  request(url, (err, res2) => {
    if (err) {
      console.log("error:", err);
      return res.json("down");
    }

    if (res2.statusCode && res2.statusCode <= 445) return res.send("up");
  });
});

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));

// /?url=nomadcoders.co
