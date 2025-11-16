const apiKey = process.env.BREVO_API_KEY;
const sender = process.env.BREVO_SENDER;
const brevoEmail = process.env.BREVO_EMAIL;
const receiverEmail = process.env.RECIEVER_EMAIL;
const receiverName = process.env.RECIEVER_NAME;

export async function POST(req) {
  const { senderEmail, senderPhone, senderName, message } = await req.json();

  try {
    if (!senderEmail || !senderPhone || !senderName || !message) {
      return Response.json(
        {
          message: "All fields are required!",
        },
        {
          status: 400,
        },
      );
    }

    if (!apiKey || !sender || !brevoEmail) {
      return Response.json(
        { message: "Credentials are missing!" },
        {
          status: 400,
        },
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: sender,
          email: brevoEmail,
        },
        to: [{ email: receiverEmail, name: receiverName }],
        subject: `${senderEmail}`,
        htmlContent: `
         <div style="font-family:sans-serif;padding:14px;border-radius:10px;background:#eef4ff;border:1px solid #c7d7ff">
  <h3 style="margin:0;color:#3b5bff">✨ Message</h3>
  <p><b>Name:</b> ${senderName}</p>
  <p><b>Email:</b> ${senderEmail}</p>
  <p><b>Phone:</b> ${senderPhone}</p>
  <p><b>Msg:</b><br>${message}</p>
</div>`,
      }),
    });
    if (!response.ok) {
      return Response.json(
        { message: "Error while sending Email :" },
        {
          status: 400,
        },
      );
    }

    return Response.json(
      { message: "Email sent successfully" },
      {
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      { error: error.message , message:"Error while sending Email :"},
      {
        status: 500,
      },
    );
  }
}
