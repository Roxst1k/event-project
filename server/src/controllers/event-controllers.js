import MyEvent from "../models/events.js";

export const getEvents = (req, res) => {
    MyEvent
        .find({})
        .sort({ createdAt: -1 })
        .then((events) => {
            res.status(200);
            res.json(events)
        })
        .catch(err => console.log(err))
};

export const postEvent = (req, res) => {
    const { title, description, views = [] } = req.body;


    const newEvent = {
        title,
        description,
        views,
    }

    const event = new MyEvent(newEvent);

    event
        .save()
        .then(event => {
            res
                .status(201)
                .json(event);
        })
        .catch(err => console.log(err));
}

export const getEventById = (req, res) => {
    const { id } = req.params;

    MyEvent
        .findById(id)
        .then((event) => {
            if (event) {
                res
                    .status(200)
                    .json(event);
            } else {
                res
                    .status(404)
                    .json({ message: 'Event not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res
                .status(500)
                .json({ message: 'Server error' });
        });
}

export const updateEventById = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;


    MyEvent
        .findByIdAndUpdate(id, updateData, { new: true })
        .then((event) => {
            if (event) {
                res
                    .status(200)
                    .json(event);
            } else {
                res
                    .status(404)
                    .json({ message: 'Event not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res
                .status(500)
                .json({ message: 'Server error' });
        });
}

export const deleteEventById = (req, res) => {
    const { id } = req.params;

    MyEvent
        .findByIdAndDelete(id)
        .then((result) => {
            res
                .status(200)
                .json({ message: 'Event deleted', result });
        })
}

export const addNewViewersEvent = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, email } = req.body;

    try {
        const updatedEvent = await MyEvent
            .findByIdAndUpdate(id, {
                $push: {
                    views: { name, lastName, email }
                }
            },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error('Error adding viewer:', error);
        res.status(500).json({ message: 'Server error' });
    }
};