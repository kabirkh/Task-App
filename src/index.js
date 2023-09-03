const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on  port " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "red123!$" }, "thisisanewcourse",{expiresIn:"6 sec"});
//   console.log(token);

//   setTimeout(() => {
//     const data = jwt.verify(token, "thisisanewcourse");
//     console.log(data);
//   }, 2000);
// };

// myFunction();

// const pet = {
//   name: "Hal",
// };

// pet.toJSON = function () {
//   console.log(this);
//   return this;
// };

// console.log(JSON.stringify(pet));

// const Task = require("./models/task");
// const User = require("./models/user")

// const main = async () => {
// const task = await Task.findById("64de681651cb9e88ddb4fe25");
// await task.populate("owner")
// console.log(task.owner);

// const user = await User.findById("64de67ed51cb9e88ddb4fe1f")
// await user.populate("tasks")
// console.log(user.tasks);

// };

// main();
// settimeout call backs promises async await .then()
// call back hell
