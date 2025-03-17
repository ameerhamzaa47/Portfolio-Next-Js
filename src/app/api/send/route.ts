import { EmailTemplate } from '../../../../Components/email-tamplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const formEmail = process.env.FORM_EMAIL || 'default@example.com';

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: formEmail,
      to: ['hamzaataariq12@gmail.com'],
      subject: 'Hello world',
      react: await EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}