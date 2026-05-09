import express from "express";
import fetch from "node-fetch";
import db from "../../databases/models/index.js";

const router = express.Router();
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxlyVwAmSUs5VcusY6nKyu6pWyEJbcVMWCkJ2BhTAkIzRjqerx7TEoVZ9hNTg7dAfQM/exec";

const getBookings = async (req, res) => {
  try {
    const bookings = await db.Booking.findAll({
      order: [["id", "DESC"]],
    });

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

router.get("", getBookings);
router.get("/", getBookings);

const sendBookingToGoogleSheet = async (bookingData) => {
  try {
    const res = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!res.ok) {
      const text = await res.text();
      console.warn("Google Sheets sync failed:", res.status, text);
    }
  } catch (error) {
    console.warn("Google Sheets sync skipped:", error.message);
  }
};

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const booking = await db.Booking.create({
      name,
      email,
      phone,
      message,
    });

    sendBookingToGoogleSheet({
      name,
      email,
      phone,
      message,
      status: booking.status,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const allowedStatuses = ["new", "contacted", "closed"];
    const { status } = req.body;

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid booking status" });
    }

    const booking = await db.Booking.findByPk(req.params.id);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    booking.status = status;
    await booking.save();

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update booking" });
  }
});

export default router;

