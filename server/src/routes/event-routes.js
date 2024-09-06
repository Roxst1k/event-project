import express from "express";
import {
    getEvents,
    postEvent,
    getEventById,
    updateEventById,
    deleteEventById, addNewViewersEvent
} from "../controllers/event-controllers.js";

export const router = express.Router();


// Отримання всіх івентів
router.get('/events',getEvents)

// Додавання івенту до списку івентів
router.post('/events', postEvent)

// Отримання івенту по id
router.get('/events/:id', getEventById)

// Зміна даних івенту
router.put('/events/:id', updateEventById)

// Видалення івенту по id
router.delete('/events/:id', deleteEventById)

// Add new viewers
router.put('/events/:id/viewers', addNewViewersEvent)


