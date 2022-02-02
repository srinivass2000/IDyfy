const { spawn } = require("child_process");

sentence = "fuck you bitch";

const childPython = spawn("python", ["predict.py", sentence]);

childPython.stdout.on("data", (data) => {
  console.log(`stdout : ${data}`);
});

childPython.stderr.on("data", (data) => {
  console.log(`stderr : ${data}`);
});

childPython.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
