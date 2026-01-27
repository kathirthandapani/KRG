const twilio = require('twilio');

// Configuration from server.js
const TWILIO_ACCOUNT_SID = 'AC56733acf25a8df8b233e9ffe8b41edcd';
const TWILIO_AUTH_TOKEN = 'b10fab4798a065aa37815c7113cc4e76';
const TWILIO_PHONE_NUMBER = '+12297159583';
const TARGET_PHONE = '+919245555687'; // User's number

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

console.log("Attempting to verify SMS to:", TARGET_PHONE);

client.messages.create({
    body: `Test SMS from your Application. If you see this, IT WORKS!`,
    to: TARGET_PHONE,
    from: TWILIO_PHONE_NUMBER,
})
    .then((message) => {
        console.log(`[SUCCESS] Message sent! SID: ${message.sid}`);
    })
    .catch((error) => {
        console.error(`[ERROR] Failed to send:`, error);
    });
