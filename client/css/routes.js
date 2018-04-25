var superagent = require('superagent');

module.exports = function (app) {
	app.get('/api', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.name )
			.query({ format: "json" })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
					res.json(response.body);
			});

	});
	
	app.get('/api/shows/:id', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/shows/' + req.params.id + '?embed=cast' )
			.query({ format: "json" })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
					res.json(response.body);
			});

	});
}