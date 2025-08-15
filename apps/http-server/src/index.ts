import express, { json } from "express";
import { dbClient } from "@repo/db/client";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi there");
});
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await dbClient.user.create({
      data: {
        email,
        password,
      },
    });
    console.log("user created");

    res.status(201).json({
      message: "user created succesfully",
      id: user.id,
      email: user.email,
      password: user.password,
    });
  } catch (error) {}
});

app.listen(3002);
