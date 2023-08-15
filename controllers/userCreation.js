const bcrypt = require('bcrypt');
const { createUser } = require("./userController.js")
const newUser = {
  username: "fresho",
  email: "fresho@example.com",
  password: "secretpassword",
};

bcrypt.genSalt(10, (err,salt) => {
    if (err) throw err;

    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err;

    newUser.password = hash;

    try {
      const user = await createUser(newUser);
      console.log('New user created:', user);
    } catch (error) {
      console.error('Invalid information provided:', error);
    }
  });
});

