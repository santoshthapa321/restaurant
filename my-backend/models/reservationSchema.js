import mongoose from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength :[3, "First name must contain at least 3 letters"],
        maxLength :[15, "Max characters reached"],
    },
    lastName:{
        type: String,
        required: true,
        minLength :[3, "Last name must contain at least 3 letters"],
        maxLength :[15, "Max characters reached"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"Provide a valid email"],
    },
    contact:{
        type: String,
        required: true,
        minLength :[10, "Contact must contain at least 10"],
        maxLength :[10, "Max characters reached"]},
time:{
    type : String,
    required: true,

},
date: {
type: String,
required: true,
},
});


const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
