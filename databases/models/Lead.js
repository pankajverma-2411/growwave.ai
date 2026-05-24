export default (sequelize, DataTypes) => {
  const Lead = sequelize.define(
    "Lead",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.TEXT,
        unique: true,
      },
      source: DataTypes.TEXT,
      ip_address: DataTypes.TEXT,
    },
    {
      timestamps: false,
    }
  );

  return Lead;
};
