import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    views: [{
        name: String,
        email: String,
    }]
}, { timestamps: true });

const MyEvent = mongoose.model('MyEvent', eventsSchema);

export default MyEvent;