import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle erforderlichen Felder aus." },
        { status: 400 }
      );
    }

    // In production with RESEND_API_KEY set:
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "C-Concepts Web <noreply@cconcepts.eu>",
            to: ["sauer@cconcepts.de", "weisbrod@cconcepts.de"],
            reply_to: email,
            subject: `Neue Kontaktanfrage von ${name} - C-Concepts Website`,
            text: `Neue Kontaktanfrage über die Website:\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\n\nNachricht:\n${message}\n\nEingegangen am: ${new Date().toLocaleString("de-DE")}`,
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.json();
          console.warn("Resend API warning:", errData);
        }
      } catch (emailErr) {
        console.error("Resend API Versandfehler:", emailErr);
      }
    } else {
      // Local dev & staging fallback log
      console.log("Mock Email Dispatch (RESEND_API_KEY not set):", {
        to: ["sauer@cconcepts.de", "weisbrod@cconcepts.de"],
        from: email,
        name,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank! Ihre Nachricht wurde erfolgreich an Andreas Sauer und Ralf Weisbrod übermittelt. Wir melden uns schnellstmöglich bei Ihnen.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Anfrage:", error);
    return NextResponse.json(
      { error: "Ein interner Serverfehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
