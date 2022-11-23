import express from "express";
import bodyparser from "express";
import "./DBconfig/db.js";
import userroutes from "./routes/user.route.js";
import practiceroutes from './routes/practtice.routes.js'

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send({ message: "Hy from server" });
});

app.use("/user", userroutes);
app.use('/practice', practiceroutes)

app.listen(port, () => console.log(`server is running on port ${port}`));
