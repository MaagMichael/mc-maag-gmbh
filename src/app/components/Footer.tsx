

function Footer() {

    const sendEmail = async (fromData: FormData) => {
        "use server";
    
        const fullname = fromData  .get("fullname");
        const email = fromData  .get("email");
        const message = fromData  .get("message");
    
        if (!fullname && !email && !message) {
          return;
        }
    
        try {
          const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              service_id: process.env.EMAILJS_SERVICE_ID,
              template_id: process.env.EMAILJS_TEMPLATE_ID,
              user_id: process.env.EMAILJS_PUBLIC_KEY,
              accessToken: process.env.EMAILJS_ACCESS_TOKEN,
              template_params: {
                fullname,
                email,
                message,
              },
            }),
          });
    
          if (!res.ok) {
            throw new Error("Failed to send email");
          }
        } catch (error) {
          console.error("Error sending email:", error);
        }
      };

  return (
    <div className="bg-[rgb(42,42,42)] text-gray-300 p-8">
      
      <div className="text-lg mb-4">
        Haben wir Ihr Interesse geweckt? Sehr gut!
        <p className="mt-2">
          Für eine Anfrage oder für einen fachlichen Austausch schreiben Sie uns
          bitte eine E-Mail oder rufen Sie uns gerne einfach an.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <div className="space-y-2">
            <p>mc-maag consulting GmbH</p>
            <p>Stoßäckerstrasse 124</p>
            <p>70563 Stuttgart, Germany</p>
            <p className="mt-4">
              <a
                href="https://maag-consulting.com"
                className="hover:text-gray-100"
              >
                https://maag-consulting.com
              </a>
            </p>
            <p>E-Mail: info(at)maag-consulting.com</p>
            <p>Telefon: +49 711 22665494</p>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Standorte</h2>
          <div className="space-y-2">
            <p>Stuttgart</p>
            <p>München</p>
            <p>Frankfurt</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nachricht</h2>
          <form action={""} className="space-y-4">
            <div>
              <label className="block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 bg-white text-gray-900 rounded"
                required
              />
            </div>

            <div>
              <label className="block">
                Text <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full p-2 bg-white text-gray-900 rounded"
                rows={4}
                required
              />
            </div>

            <div>
              <label className="block">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full p-2 bg-white text-gray-900 rounded"
                required
              />
            </div>

            <div>
              <p>Es gilt unsere Datenschutzerklärung</p>
            </div>

            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
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

      <footer className="mt-16 text-sm border-t border-gray-700 pt-4">
        <div className="space-x-2">
          <a href="#" className="hover:text-gray-100">
            Impressum
          </a>{" "}
          |
          <a href="#" className="hover:text-gray-100">
            Datenschutz
          </a>{" "}
          |
          <a href="#" className="hover:text-gray-100">
            Cookie-Richtlinie
          </a>{" "}
          |
          <a href="#" className="hover:text-gray-100">
            Sitemap
          </a>
        </div>
        <div className="mt-2">
          Copyright © 2023 mc - maag consulting GmbH. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
