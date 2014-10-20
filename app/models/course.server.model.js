'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CourseSchema = new Schema({
	courseTitle : {
		type: String,
		default: ''
	},

	grade: {
		type: String,
		default: ''
	},

	courseUnit: {
		type: Number,
		default: ''
	},

	score: {
		type: Number,
		default: ''
	},

	Admin: {
		type: Schema.ObjectId,
		ref: 'User'
	}

});

mongoose.model('Course', CourseSchema);