var faker = require('faker');


function notifications() {
  const notifications = [];
  for (let nt = 0; nt < 10; nt++) {
    notifications.push({
      id: faker.random.uuid(),
      description: faker.random.words(10),
      is_read: false
    });
  }
  return notifications;
}

module.exports = {
  notifications
};
