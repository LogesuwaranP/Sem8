const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");


// send mail
router.post("/",  (req, res) => {

    const { email } = req.body;
    const { count } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "logesuwaran005@gmail.com",
                pass: "ityrdtxbqnwfuqkp"
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Need to refill the stocks",
            html: `<p>Good Afternoon, Out shop abc branch 5 is out of stock  so we request to bring <b>${count}</b> stocks as soon as posible and please update the time of arrival </p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;