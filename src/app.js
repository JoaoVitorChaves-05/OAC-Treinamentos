const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

const user = "E-MAIL";
const pass = "SENHA";

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/cursos', function(req, res) {
    res.sendFile(__dirname + '/views/courses.html');
})

app.get('/contato', function(req, res) {
    res.sendFile(__dirname + '/views/contact-us.html');
})

app.post('/avaliacao', function(req, res) {
    let ratingMail = {
        from: req.body.email+" <joaovmanciochaves@gmail.com>",
        to: "creepergames.jvmc@gmail.com",
        subject: req.body.subject,
        text: req.body.message
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    transporter.sendMail(ratingMail).then(info => {
        res.send(info);
    }).catch(error => {
        res.send(error)
    })
})

app.post('/contato-comercial', function(req, res) {
    let contactMail = {
        from: req.body.nome+" <joaovmanciochaves@gmail.com>",
        to: "creepergames.jvmc@gmail.com",
        subject: req.body.subject,
        text: "Contato: "+ req.body.email + "\n" + req.body.message
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    transporter.sendMail(contactMail).then(info => {
        res.send(info);
    }).catch(error => {
        res.send(error)
    })
})

app.listen(3000);