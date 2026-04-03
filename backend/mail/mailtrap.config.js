import { MailtrapClient } from "mailtrap";

const TOKEN = "72dfc0d3b07c363d4973a04404e6af59";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "darshankok7@gmail.com",
  }
];
``
client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);