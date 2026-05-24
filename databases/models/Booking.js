export default (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      message: DataTypes.TEXT,
      status: {
        type: DataTypes.STRING,
        defaultValue: "new",
      },
    },
    {
      timestamps: false,
    }
  );

  return Booking;
};
