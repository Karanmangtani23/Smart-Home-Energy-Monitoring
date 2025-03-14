module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("EnergyUsage", [
      {
        userId: 1,
        consumption: 200.5,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        consumption: 150.75,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("EnergyUsage", null, {});
  },
};
