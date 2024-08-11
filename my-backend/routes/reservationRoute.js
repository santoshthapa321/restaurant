import express from "express";
import sendReservation from "../controller/reservation.js"
import getReservations from "../fetchAPI/getreserve.js";
const router = express.Router();
router.post("/send", sendReservation);
router.get('/get', getReservations);

export default router;
