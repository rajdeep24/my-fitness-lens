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
};
