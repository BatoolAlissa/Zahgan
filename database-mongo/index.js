const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Event Schema and model for the creator
const EventSchema = new Schema({
    creatorName: {
        type: String,
        required: [true, 'Name Field is Required']
    },

    eventName: {
        type: String,
        required: [true, 'Name Field is Required']
    },

    cost: {
        type: Number,
        required: [true, 'Name Field is Required']
    },
    des: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    url: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    date: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    availableSeats: {
        type: Number,
        required: [true, 'Name Field is Required']

    },
    eventLocation: {
        type: Array,
        required: [true, 'Name Field is Required']
    },
    attending: {
        type: Array
    },
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
