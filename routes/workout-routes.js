const db = require("../models");

module.exports = function (app) {
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
};
