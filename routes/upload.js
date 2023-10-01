import express from 'express'
import multer from 'multer';
import fs from 'fs-extra'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router();




router.post('/', upload.single('file'), (req, res) => {

    fs.remove('images/weather-app-logo (1).png', err => {
        if (err) return console.error(err)
        console.log('success!')
    })

    res.send({ message: "Uploaded" })
})


export default router;