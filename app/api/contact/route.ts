import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function validate(payload: ContactPayload) {
  if (
    !payload.name?.trim() ||
    !payload.email?.trim() ||
    !payload.phone?.trim() ||
    !payload.subject?.trim() ||
    !payload.message?.trim()
  ) {
    return "Preencha todos os campos do formulário.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return "Email inválido.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validationError = validate(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT ?? 465),
      secure: (process.env.MAIL_ENCRYPTION ?? "ssl") === "ssl",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transport.sendMail({
      from: `"${process.env.MAIL_FROM_NAME ?? "Portfolio Contact"}" <${
        process.env.MAIL_FROM_ADDRESS ?? process.env.MAIL_USERNAME
      }>`,
      to: process.env.CONTACT_TO_EMAIL ?? "diogo.luis.job@hotmail.com",
      replyTo: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      html: `
        <h2>Novo contacto do portfolio</h2>
        <p><strong>Nome:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Telefone:</strong> ${payload.phone}</p>
        <p><strong>Assunto:</strong> ${payload.subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem agora." },
      { status: 500 }
    );
  }
}
