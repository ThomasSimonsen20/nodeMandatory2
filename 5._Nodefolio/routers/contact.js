import express from "express"
const router = express.Router()

import nodemailer from 'nodemailer'
import { connection } from "../database/connectSqlite.js";

router.post("/api/contact", async (req,res) => {
    const emailDetails = await connection.get(`SELECT * FROM email WHERE id = 1`)
 
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: emailDetails.accountName, 
          pass: emailDetails.password, 
          //Har smidt et fake password ind i DB (usikker på om vi skulle aflevere DB), men så har de i hvert fald ikke mit password :)
        },
    });
    
      transporter.sendMail({
        from: '"Nodemailer contact" <nodemailertest202@gmail.com>', 
        to: "bestpalaeu20@gmail.com", 
        subject: "Node contact request", 
        text: "pewpew", 
        html: output, 
    });
    
    res.send()
})


export default router
