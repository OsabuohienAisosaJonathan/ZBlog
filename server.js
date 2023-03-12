//preparing the server 
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    //set header content type
    // res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello, zuxa</p>');
    // res.write('<p>hello again, zuxa</p>');
    // res.end();

    //lodash
    const num =_.random(0, 20);
    console.log(num); //generates a random number from 1-20

    // another function
    const greet =_.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    //Routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else
            res.write(data);
            res.end();
    })

});




//listen method for an event

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});