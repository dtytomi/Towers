'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var course = require('../../app/controllers/course');

	// Jobs Routes
	app.route('/course')
		.get(course.list)
		.post(users.requiresLogin, course.create);

	app.route('/course/:courseId')
		.get(course.read)
		.put(users.requiresLogin, course.hasAuthorization, course.update)
		.delete(users.requiresLogin, course.hasAuthorization, course.delete);

	// Finish by binding the Job middleware
	app.param('courseId', course.courseByID);
};