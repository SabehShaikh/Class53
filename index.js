import express from 'express'
// const express = require("express")
import cors from 'cors'
import router from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/', (req, res, next) => {
    console.log("agai request....", req.query)
    if (req?.query?.apiKey === "123") {
        next();
    } else {
        res.status(401).send({ message: "not allowed" })
    }
})

app.use('/api', router)


// app.get('/users', (req, res) => {
//     res.send(users)
// })

// app.post('/user', (req, res) => {
//     try {
//         const { name, email } = req.body;
//         if (name.trim() && email.trim()) {
//             users.push({ id: users.length + 1, ...req.body })
//             return res.status(200).send({ status: 200, message: "User Added Succesfully!" })
//         }
//         else {
//             return res.status(403).send({ status: 403, message: "Email and Name is required" })
//         }
//     } catch (err) {
//         return res.status(500).send({ status: 500, message: err.message })
//     }
// })

// app.delete('/user/:id', (req, res) => {
//     let index = users.findIndex(v => v.id === Number(req.params.id));
//     if (index !== -1) {

//         users.splice(index, 1);
//     }
//     res.send({ message: "User Deleted Succesfully!" })
// })

// app.put('/user/:id', (req, res) => {
//     let index = users.findIndex(v => v.id === Number(req.params.id));
//     if (index !== -1) {
//         users.splice(index, 1, { id: Number(req.params.id), ...req.body });
//     }
//     res.send({ message: "User Updated Succesfully!" })
// })

// app.post('/order', (req, res) => {
//     console.log("order details--->", req.body)
//     res.send({ message: "Order placed" })
// })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})