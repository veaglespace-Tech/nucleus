const bcrypt = require('bcrypt');
const { User } = require('./src/models'); // Sequelize models
const { sequelize } = require('./src/config/db');

async function seedAdmin() {
  try {
    // Force sync the database if you want it to be COMPLETELY NEW (WARNING: Wipes all data)
    // await sequelize.sync({ force: true });
    
    // OR just use alter to keep existing data and create tables if they don't exist
    await sequelize.sync({ alter: true });
    console.log("Database synced.");

    const username = 'riteshpote0603@gmail.com';
    const password = 'Veagle@123'; // Updated password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user already exists
    const existingAdmin = await User.findOne({ where: { username } });
    if (existingAdmin) {
      console.log("Admin user exists, updating password...");
      await existingAdmin.update({ password: hashedPassword });
      console.log(`✅ Admin password updated successfully!`);
    } else {
      // Create the admin user
      await User.create({
        username: username,
        password: hashedPassword
      });
      console.log(`✅ Admin user created successfully!`);
    }

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
  } finally {
    process.exit();
  }
}

seedAdmin();
