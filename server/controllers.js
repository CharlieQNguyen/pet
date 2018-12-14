const Pets = require("./models")
// readAll
function readAll(req, res) {
    Pets.find({}).sort({type:"ascending"})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// readOne
function readOne(req, res) {
    Pets.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// deleteOne
function deleteOne(req, res) {
    Pets.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// editOne
function editOne(req, res) { // with added runValidators
    Pets.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, context: "query"
        })
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// createOne
function createOne(req, res) {
    Pets.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

module.exports = {
    readAll: readAll,
    readOne: readOne,
    deleteOne: deleteOne,
    editOne: editOne,
    createOne: createOne,
};