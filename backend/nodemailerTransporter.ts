"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "frault2.hostarmada.net",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function emailSendHandler(
	email: string,
	subject: string,
	html: string
) {
	try {
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject: subject,
			html: html,
		});
	} catch (error) {
		throw error;
	}
}
