export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("bookings", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.TEXT,
    email: Sequelize.TEXT,
    phone: Sequelize.TEXT,
    message: Sequelize.TEXT,
    status: {
      type: Sequelize.TEXT,
      defaultValue: "new",
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable("bookings");
}