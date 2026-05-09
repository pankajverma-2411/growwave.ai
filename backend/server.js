import express from "express";
import cors from "cors";
import db from "../databases/models/index.js";
import bookingRoutes from "./routes/bookings.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await db.Booking.findAll({
      order: [["id", "DESC"]],
    });

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });
