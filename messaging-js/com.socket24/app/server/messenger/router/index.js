'use strict';
/* api/router/index.js */
const morgan = require('morgan');
/*
  Bootstrap routes on main express app.
*/
let bootstrap = (app, express, config) => {
	
	app.use('/static', express.static('public'))
	
	//app.set("view engine", "ejs");
	
	// Express middleware
	app.use(morgan('tiny'));
	
	config.routes.forEach(function (page, index) {
		
		if (page.isDynamic) {
			
			app.get(page.url, function (req, res) {
				res.render(page.id, {
					roomID: req.params.room,
				});
			});
			
		} else {
			
			if (page.isStatic) {
				
				if (page.isHtml) {
					
					fs.readFile(page.path, 'utf-8', function (error, data) {
						if (error) {
							res.writeHead(500, {'content-type': page.mime});
							res.end(error);
						} else {
							res.writeHead(200, {'content-type': page.mime});
							res.end(data);
						}
					});
					
				}else{
					
					return
					
					fs.readFile(__dirname + req.url, function (err,data) {
						if (err) {
							res.writeHead(404);
							res.end(JSON.stringify(err));
							return;
						}
						res.writeHead(200);
						res.end(data);
					});
					
				}
				
			} else {
				
				if (page.redirect) {
					
					app.get(page.url, function (req, res) {
						res.redirect(page.path);
					});
					
				} else {
					
					app.get(page.url, function (req, res) {
						res.sendFile(config.homeDir + page.path);
					});
					
				}
				
			}
			
		}
		
	});
	
};

module.exports = {
	bootstrap: bootstrap
};
