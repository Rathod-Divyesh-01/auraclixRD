import express from "express";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hlw kem chho ?");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server renning on port: http://localhost:${port}`);
});
