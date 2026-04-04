import { MailtrapClient } from "mailtrap";
import "dotenv/config";


export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_END_POINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Burak",
};

console.log(process.env.MAILTRAP_TOKEN);