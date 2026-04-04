import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async(email,verificationToken) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from : sender,
            to : recipient,
            subject : "Verify your email",
            html : VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category : "EMail Verification "
        })

        console.log("Email sent sucessfully",response);
    } catch (error) {
        console.log(`Error Sending Verification Email`,error);
        throw new Error(`Error Sending Verification Email : ${error} `);
    }
}