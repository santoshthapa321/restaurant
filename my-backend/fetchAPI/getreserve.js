import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

// Handler to get all reservations
export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    return next(new ErrorHandler("Unable to fetch reservations", 500));
  }
};

export default getReservations;
