import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";

/**
 * good documentation on typescript/express dev
 * http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WQzLkOXyvIU
 * 
 * express w/nodemon and browsersync
 * https://github.com/voorhoede/front-end-tooling-recipes/blob/master/express-with-nodemon-browsersync/
 */

// Get our API routes
import {router} from "./routes/api";

var app = express();

// remove powered by header
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', router);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, function () {
    console.log('listening on port 3000');
});