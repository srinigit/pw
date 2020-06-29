const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BEUGmTb48S2PqKalj-3-jt3HAtqOhFa1DZjqjRY4kHSFlKiupptexxiWmlRDjaHEv-uQJxWv0GYqkZj2AcrtUIY",
  privateKey: "ipCiblZ3evF8aJBr93Q_YcINvkbXwA6IFVBKqFJeV5k"
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fQWrx9xKub4:APA91bG7oqFNoFOWJgxdOVfYuc1Fbem5lP3q5oJvzb4yDvC1aEcB4e_Z6Go96odfCkFtr4IvV2kQMx5FD_CBXpCw5tGhVn8dwHSjr6KzKtE6ELoHoQjo79uClH98z8RdLp3DFw7092Ol","expirationTime":null,"keys":{"p256dh":"BO986gkd3y33dFnBWeyjSJ1EB1zz8KDRqjIBk0V8hpzpXyjjfJ15vFsuHCtgeUI7Wyy1Q4zRbP-4jT5XAKxZw_Y","auth":"lLNppXG8IloFgiWPUYasIA"}}
webpush.sendNotification(pushSubscription, "Hello from a shot of code!!");
