const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator")

mongoose.connect("mongodb://localhost:27017/pets3", {
    useNewUrlParser: true
}, (errs) => console.log(errs || 'db = gucci'));

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be longer than 3 characters.']
    },
    type: {
        type: String,
        minlength: [3, 'Type must be longer than 3 characters.']
    },
    description: {
        type: String,
        required: true,
        minlength: [3, 'description must be longer than 3 characters.']
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Pets = mongoose.model('pet', PetSchema);
PetSchema.plugin(unique, {
    message: "this is Unique"
})

module.exports = Pets;