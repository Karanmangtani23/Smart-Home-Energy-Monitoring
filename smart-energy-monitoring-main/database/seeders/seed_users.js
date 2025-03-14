module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "$2b$10$hashedpassword123", // Hash before inserting in production
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "$2b$10$hashedpassword456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
