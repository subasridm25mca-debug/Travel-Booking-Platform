const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // ================= GUEST DETAILS =================

    fullName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    // ================= COMMON DETAILS =================

    destination: {
      type: String,
      required: true
    },

    service: {
      type: String,
      required: true
    },

    travelDate: {
      type: String,
      required: true
    },

    travellers: {
      type: String,
      required: true
    },

    package: {
      type: String,
      required: true
    },

    // ================= HOTEL DETAILS =================

    room: {
      type: String,
      default: ""
    },

    checkOutDate: {
      type: String,
      default: ""
    },

    rooms: {
      type: String,
      default: ""
    },

    // ================= SPECIAL REQUESTS =================

    requests: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Booking", bookingSchema);