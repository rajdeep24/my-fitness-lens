//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//PORT
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-fitness-lens", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

//MONGOOSE CONNECTION CONFIRMATION and ERROR HANDLING

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose successfully connected");
});

const workoutController = require("./controllers/workoutController.js");
const exerciseController = require("./controllers/exerciseController.js");

app.use(workoutController);
app.use(exerciseController);

//ROUTES
app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

//LISTENER
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
