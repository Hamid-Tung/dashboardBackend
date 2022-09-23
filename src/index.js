import express from "express";
import bodyparser from "express";
import "./DBconfig/db.js";
import userroute from "./routes/user.route.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send({ message: "Hy from server" });
});

app.use("/user", userroute);

app.listen(port, () => console.log(`server is running on port ${port}`));
