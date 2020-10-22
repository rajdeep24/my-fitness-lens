const db = require("../models");

//   * Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View the combined weight of multiple exercises on the `stats` page.

module.exports = function (app) {
	//The following get route returns all workouts
	app.get("/api/workouts", function (req, res) {
		db.Workout.find({})
			.then((foundWorkouts) => {
				res.json(foundWorkouts);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					error: true,
					data: null,
					message: "Failed to retrieve workouts.",
				});
			});
	});

	//The following get route returns a workout by id
	app.get("/api/workouts/:id", function (req, res) {
		db.Workout.findById(req.params.id)
			.then((foundWorkouts) => {
				res.json(foundWorkouts);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					error: true,
					data: null,
					message: "Failed to retrieve workout by id.",
				});
			});
	});

	app.post("/api/workouts", function (req, res) {
		db.Workout.create(req.body)
			.then((newWorkout) => {
				res.json(newWorkout);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					error: true,
					data: null,
					message: "Failed to create a workout.",
				});
			});
	});

	app.get("/api/workouts/range", function (req, res) {
		db.Workout.find()
			.then((foundWorkouts) => {
				res.json(foundWorkouts);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					error: true,
					data: null,
					message: "Failed to retrieve the combined workout range.",
				});
			});
	});

	app.post("/api/workouts/range", function (req, res) {
		db.Workout.create({})
			.then((foundWorkouts) => {
				res.json(foundWorkouts);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					error: true,
					data: null,
					message: "Failed to retrieve the combined workout range.",
				});
			});
	});
	app.put("/api/workouts/:id", function ({ body, params }, res) {
		db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
			.then((updatedWorkout) => {
				res.json(updatedWorkout);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					error: true,
					data: null,
					message: "Failed to update workout by id.",
				});
			});
	});
};
