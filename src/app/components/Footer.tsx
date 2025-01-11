// https://www.ali-dev.com/blog/next-js-email-sending-with-app-router-and-emailjs
// In the EmailJS dashboard, go to Account > Security and check 'Allow EmailJS API for non-browser applications.'

function Footer() {
  const sendEmail = async (fromData: FormData) => {
    "use server";

    console.log(fromData);

    const fullname = fromData.get("fullname");
    const email = fromData.get("email");
    const message = fromData.get("message");

    if (!fullname || !email || !message) {
      console.log("Please fill out all fields");
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          accessToken: process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN!,
          template_params: {
            fullname,
            email,
            message,
          },
        }),
      });
      console.log(res);

      if (!res.ok) {
        throw new Error("Failed to send email", { cause: res.status });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="bg-secondary">
      <div className="max-w-[1024px] mx-auto  text-light p-4">
        <div className="text-lg mb-4">
          Haben wir Ihr Interesse geweckt? Sehr gut!
          <p className="mt-2">
            Für eine Anfrage oder für einen fachlichen Austausch schreiben Sie
            uns bitte eine E-Mail oder rufen Sie uns gerne einfach an.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl text-secondary_light font-semibold mb-4">
              Kontakt
            </h2>
            <div className="space-y-2">
              <p>mc-maag consulting GmbH</p>
              <p>Stoßäckerstrasse 124</p>
              <p>70563 Stuttgart, Germany</p>
              <br />
              <p className="mt-4">
                <a
                  href="https://maag-consulting.com"
                  className="hover:text-gray-100"
                >
                  https://maag-consulting.com
                </a>
              </p>
              <br />
              <p>E-Mail: info(at)maag-consulting.com</p>
              <p>Telefon: +49 711 22665494</p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-3xl text-secondary_light font-semibold mb-4">
              Standorte
            </h2>
            <div className="space-y-2">
              <p>Stuttgart</p>
              <br />
              <p>München</p>
              <br />
              <p>Frankfurt</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-96"> 
            <h1 className="text-3xl text-secondary_light font-semibold mb-4">
              Nachricht
            </h1>
            <form action={sendEmail} className="space-y-4">
              <div>
                <label className="block" htmlFor="fullname">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  className="w-full p-2 bg-light text-secondary rounded"
                />
              </div>

              <div>
                <label className="block" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 bg-light text-secondary rounded"
                />
              </div>

              <div>
                <label className="block" htmlFor="message">
                  Text <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  required
                  className="w-full p-2 bg-light text-secondary rounded"
                />
              </div>

              <div>
                <p>Es gilt unsere Datenschutzerklärung</p>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-secondary_light text-light px-4 py-2 rounded"
              >
                absenden
              </button>

              <div className="text-sm mt-2">
                <span className="text-red-500">*</span> Hinweis: Bitte die mit *
                gekennzeichneten Felder ausfüllen.
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-16 text-sm border-t border-secondary_light pt-4">
          <div className="space-x-2">
            <a href="#" className="hover:text-secondary_light">
              Impressum
            </a>{" "}
            |
            <a href="#" className="hover:text-secondary_light">
              Datenschutz
            </a>{" "}
            |
            <a href="#" className="hover:text-secondary_light">
              Cookie-Richtlinie
            </a>{" "}
            |
            <a href="#" className="hover:text-secondary_light">
              Sitemap
            </a>
          </div>
          <div className="mt-2">
            Copyright © 2023 mc - maag consulting GmbH. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
