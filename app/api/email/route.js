const apiKey = process.env.BREVO_API_KEY;
const sender = process.env.BREVO_SENDER;
const brevoEmail = process.env.BREVO_EMAIL;

export async function POST(req, res) {
  const { senderEmail, senderPhone, senderName, message } = await req.json();

  try {
    if (!senderPhone || !senderName || !senderEmail || !message) {
      throw new Error("All the input field are required");
    }

    if (!apiKey || !sender || !brevoEmail) {
      throw new Error("Creds missing");
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
        to: [
          { email: "milanbhattarai0007@gmail.com", name: "Milan Bhattarai" },
        ],
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

    console.log("Response from email : ", response);

    return Response.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    return Response.json({
      message: "Failed to send email",
      status: 500,
      error: error.message,
    });
  }
}
