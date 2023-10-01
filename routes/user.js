import express from 'express'

const router = express.Router();

const users = [
    {
        id: 1,
        name: "Sabeh",
        email: "sabeh123@gmail.com"
    }, {
        id: 2,
        name: "shaikh",
        email: "shaikh123@gmail.com"
    }
]

router.get('/', (req, res) => {
    res.status(200).send({ users: users })
})

export default router;