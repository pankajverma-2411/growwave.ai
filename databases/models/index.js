import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../backend/config/db.js";

import BookingModel from "./Booking.js";
import LeadModel from "./Lead.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Booking = BookingModel(sequelize, DataTypes);
db.Lead = LeadModel(sequelize, DataTypes);

export default db;