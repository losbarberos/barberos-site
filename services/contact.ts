import emailjs from 'emailjs-com';

const serviceID = 'service_vjoe69z';
const templateID = 'template_gjxfz9d';
const userID = 'user_fn0iIiHO8aXQlrkntWsog';

export type ContactRequest = {
  contactName: string;
  contactEmail: string;
  subject: string;
  message: string;
};

export const contactUs = async (contactRequest: ContactRequest) => {
  return emailjs.send(serviceID, templateID, contactRequest, userID);
};
