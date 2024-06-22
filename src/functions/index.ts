import axios from "axios"
import { EmailData } from "../types"

export const sendEmail = async (data: EmailData) => {
    try {
        const url = "https://api.emailjs.com/api/v1.0/email/send"
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log("Email Sent", response.data)
    } catch (error) {
        console.log("FAILED :", error)
    }
}

// const templateParams = {
//     username: username,
//     user_email: email,
//     verificationCode: verificationCode,
// }

// emailjs
//     .send("service_18nvoaw", "template_hrxbnbj", templateParams, {
//         publicKey: "auihK9lT1-3yCjdUP",
//     })
//     .then(
//         (response) => {
//             console.log("SUCCESS!", response.status, response.text)
//         },
//         (err) => {
//             console.log("FAILED...", err)
//         }
//     )

// console.log("code:", verificationCode)
