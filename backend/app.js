var express = require('express');

const app = express();



app.use('/api/posts' ,(req, res, next) => {
	const posts = [
		{ 
			id: 'asg3444gassd',
			title: 'First server side post',
			content: 'This is the first post coming from server.'
		},
		{
			id: 'hrtheg4g5465',
			title: 'Second server-side post',
			content: 'This is the second post coming from express server.'
		}
	];
	res.status(200).json({
		message: 'Posts feteced successfully!',
		posts: posts
	});
});

module.exports = app;


