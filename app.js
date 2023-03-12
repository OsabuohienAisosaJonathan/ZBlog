const express = require('express');

//Express app
const app = express();

//register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);


//routes
app.get('/', (req, res) => {
    const zblog = [
        {title: 'Jumanji 1', snippet: 'Lorem Ipsum dolor sit amet consectetur'},
        {title: 'Jumanji 2', snippet: 'Lorem Ipsum dolor sit amet consectetur'},
        {title: 'Jumanji 3', snippet: 'Lorem Ipsum dolor sit amet consectetur'},
    ];
    // res.send('<p>Home page</p>');
    res.render('index', {title: 'Home', zblog});
}); //homepage route

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', {title: 'About Us'});
}); //about route

//redirects
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// });

app.get('/zblog/create', (req, res) => {
    res.render('create', {title: 'Admin Only'});
})

//404 error page
app.use((req,res) => {
    res.status(404).render('404', {title: '404'});
});