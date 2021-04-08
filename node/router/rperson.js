const express = require('express')
const router = express.Router();
const mstudent = require('../model/mstudent')

// router.get('/', (req, res) => {
//     res.json("Router is work")
// })

//create
router.post('/', async (req, res) => {
    console.log(req.body);
    let data = new mstudent({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    })
    await data.save()

    res.json(data)
})

//getAll
router.get('/', async (req, res) => {
    let getData = await mstudent.find();
    res.json(getData)
})

//update
router.put('/update', async (req, res) => {
    let updateData = await mstudent.update({ _id: req.body._id }, {
        $set: {
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        }
    })
    res.json(updateData)
})

// delete 
router.delete('/del/:id', async (req, res) => {
    let deleteData = await mstudent.findByIdAndRemove(req.params.id).then(e => {
        res.json('Delected sucessfully')
    })
    // res.json(deleteData)
})

module.exports = router;
