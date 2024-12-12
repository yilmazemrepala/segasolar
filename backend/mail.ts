import { emailSendHandler } from "@/backend/nodemailerTransporter";

export const sendNewsletter = async (email: string) => {
	const subject = "Sega Solar Newsletter!";
	const html = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, nam? Accusantium cupiditate fugit quam soluta? Minima, temporibus optio. Sint, cum.</p>`;

	await emailSendHandler(email, subject, html);
};
