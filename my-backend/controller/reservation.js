import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, contact, date, time } = req.body; // Changed phone to contact

  // Check if any required field is missing
  if (!firstName || !lastName || !email || !contact || !date || !time) {
    return next(new ErrorHandler("Please fill all details!", 400));
  }

  try {
    // Create a new reservation with the received data
    await Reservation.create({
      firstName,
      lastName,
      email,
      contact,
      date,
      time,
    });

    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }

    // Handle other errors
    return next(error);
  }
 
};

export default sendReservation;
