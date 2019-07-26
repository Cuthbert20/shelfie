module.exports = {
    getThings: async (req,res) => {
        const db = req.app.get('db')
        //when using async await we have to assign the get_all_things() to a variable, in this case allThings
        let allThings = await db.get_all_things()
        res.status(200).send(allThings)
    },
    newThing: async (req,res) => {
        const db = req.app.get('db')
        let aNewThing = await db.create_things(req.body).catch(err => {
            res.status(500).send(err)
        })
        res.status(201).send(aNewThing)
    },
    oneThing: (req,res) => {
        const db = req.app.get('db')

        db
        //when getting params ie :id  remeber to pass in [req.params.id]
        .get_one_thing([req.params.id])
        .then(thing => res.status(200).send(thing))
        .catch(err => {
            res.status(500).send(err)
        })
    },
    deleteThing: (req,res) => {
        const db = req.app.get('db')

        db
        .delete_thing([req.params.id])
        .then(thing => res.status(200).send(thing))
        .catch(hi => {
            res.status(500).send(hi)
        })
    }
}