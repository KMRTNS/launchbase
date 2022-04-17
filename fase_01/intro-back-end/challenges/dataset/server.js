const express = require('express')
const nunjucks = require('nunjucks')
const post = require('./data')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render("courses", { dataset: post})
})

server.get("/about", function(req, res){

    const dataset = {
        logo: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default",
        title: "Rocketseat",
        description: 'Lorem ipsum dolor sit amet consectetur, <a href="">adipisicing elit</a>.',
        list: [
            {technology: "HTML"},
            {technology: "JavaScript"},
            {technology: "CSS"}
        ],
        links: [
            {url: "/", urlName: "GitHub"},
            {url: "/", urlName: "Instagram"},
            {url: "/", urlName: "Facebook"}
        ]
    }

    return res.render("about", {data: dataset})
})

server.use(function(req, res) {
    return res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("started")
})