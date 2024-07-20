const express = require('express')
const app = express()

//template engines -- ejs , pug , jade , handlebars
//ejs is similar to html with powers (it can do calculations and other things) -- markup style hai jo html me convert hota hai
// ejs setup karneke steps 
// 1 - install ejs -- npm i ejs
// 2 - configure ejs -- app.set("view engine","ejs") 
// 3 - create a folder named "views"
// 4 - create a file named "index.ejs" in "views" wala folder
// 5 - res.send ki jagah res.render karo  aur reder karte waqt views folder ke andar wali hi file ka naaam likho i.e usko render karo aur render function ke andar .ejs mat likho

// Setup EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static('./public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index', { name: 'sammo' }); // Render 'index.ejs' with a parameter
});

app.get('/proj1', (req, res) => {
    res.render('proj1'); // Render 'proj1.ejs'
});

app.get('/proj2', (req, res) => {
    res.render('proj2'); // Render 'proj2.ejs'
});

app.get('/proj3', (req, res) => {
    res.render('proj3'); // Render 'proj3.ejs'
});

app.get('/error', (req, res) => {
    throw new Error('SORRY FAM SOMETHING WENT WRONG'); // Simulate an error
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err }); // Render 'error.ejs'
});



//Static files setup karneke steps
// 1 - create a folder named "public"
// 2 - create 3 files in it named "images","stylesheets" and "javascripts"
// 3 - configure express static  -- app.use(express.static('./public'));
// 4 - undersand the path
app.listen(3000)