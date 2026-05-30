const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const todos = [
{ id: 1, task: "Learn Docker", completed: false },
{ id: 2, task: "Deploy to ECS", completed: false }
];

app.get("/", (req, res) => {
res.json({
message: "Hello from Todo Backend API"
});
});

app.get("/api/todos", (req, res) => {
res.json(todos);
});

app.get("/health", (req, res) => {
res.status(200).send("Backend healthy");
});

app.listen(PORT, "0.0.0.0", () => {
console.log(`Backend service running on port ${PORT}`);
});
