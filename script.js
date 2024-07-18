const express = require('express')
const app = express()

//middleware -- we can make multiple middlewares too  
//req me user ka data hota hai jo server pe jata hai
//res me server se jo code/control hote hai jiske basis pe hum server se response bhej te hai 
//next is used to give a push to the next route
// app.use(function(req,res,next){
//     console.log("middleware1");
//     next();
// })
// app.use(function(req,res,next){
//     console.log("middleware2");
//     next();
// })

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/profile', function (req, res) {
//   res.send('Hello profile')
// })
// app.get('/profile/:username', function (req, res) {
//     //  :username    :ke baad kuch bhi param daldo to make it dynamic
//     // ``use karo usme ${} iske andar req.param.jobhiparamkanaam tha dalo
//     // req.param coz vo user se data jaaraha haina  
//   res.send(`haan bhay mai ${req.params.username}`)
// })


//template engines -- ejs , pug , jade , handlebars
//ejs is similar to html with powers (it can do calculations and other things) -- markup style hai jo html me convert hota hai
// ejs setup karneke steps 
// 1 - install ejs -- npm i ejs
// 2 - configure ejs -- app.set("view engine","ejs") 
// 3 - create a folder named "views"
// 4 - create a file named "index.ejs" in "views" wala folder
// 5 - res.send ki jagah res.render karo  aur reder karte waqt views folder ke andar wali hi file ka naaam likho i.e usko render karo aur render function ke andar .ejs mat likho

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get("/", function (req, res) {
    res.render("index", { name: "sammo" })
    //{param:value} aisa karke idhar se index me data bhej skte hai
})
app.get("/proj1", function (req, res) {
    res.render("proj1")
})
app.get("/proj2", function (req, res) {
    res.render("proj2")
})
app.get("/proj3", function (req, res) {
    res.render("proj3")
})
app.get("/error",function(req,res){
    throw Error("SORRY FAM SOMETHING WENT WRONG")
})

app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})



//Static files setup karneke steps
// 1 - create a folder named "public"
// 2 - create 3 files in it named "images","stylesheets" and "javascripts"
// 3 - configure express static  -- app.use(express.static('./public'));
// 4 - undersand the path
app.listen(3000)