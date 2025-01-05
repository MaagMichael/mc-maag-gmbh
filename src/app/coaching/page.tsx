import Image from "next/image";
import HeroImageCoach from "../components/HeroImageCoach";

function Coaching() {
  return (
    <div className="">
      <HeroImageCoach image={"/images/hero/hero_coach.webp"} />

      {/* Text Systemisches Coaching */}
      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold uppercase">
          Systemisches Coaching
        </h1>

        <div className="text-secondary text-xl md:text-2xl space-y-4">
          <p className="font-bold">
            ...ist eine kontextbezogene, ressourcen- und lösungsorientierte
            Beratungsform für Führungs- und Leitungskräfte sowie Teams und
            Einzelpersonen in Organisationen.
          </p>
          <p>
            Es richtet sich an Menschen, die z.B. durch eine scheinbar unlösbare
            Herausforderung schwer belastet sind oder an einem Wendepunkt ihres
            Lebens stehen.
          </p>
          <p className="font-bold">Systemisches Coaching ist:</p>

          <div>
            <ul className="list-disc pl-6">
              <li>
                Keine Beratung - es werden keine Ratschläge oder
                Handlungsempfehlungen gegeben
              </li>
              <li>Kein Training - es werden keine Verhaltensweisen geschult</li>
              <li>
                Keine Psychotherapie - dafür müsste eine diagnostizierte Störung
                bzw. Krankheitsbild vorliegen. Dies würde dann in den Bereich
                der psychologischen oder ärztlichen Psychotherapeuten fallen.
              </li>
            </ul>
          </div>

          {/* 1 Text box  with icon and link */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 ">
            {/* text */}
            <div className="space-y-4">
              <p>
                Ich selbst habe langjährige Berufserfahrung als leitende
                Führungskraft, Niederlassungsleiter und selbstständiger Berater
                in der Automobil- und Bauindustrie.
              </p>
              <p>
                Vereint mit meiner Expertise als Systemischer Coach bin ich der
                Fachmann für die „richtigen“ Fragen, wie Menschen und soziale
                Systeme „funktionieren“ und welche Methoden Ihre
                Weiterentwicklung voranbringen. Somit kann ich Sie optimal in
                Ihrem ganz persönlichen Entwicklungsprozess unterstützen.
              </p>
            </div>

            {/* icon */}
            <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
              <p className="text-primary text-center">mehr erfahren</p>
              <Image
                src="/images/icon/icon_sebb_coach.jpg"
                alt="icon_sebb_coach.jpg"
                width={64}
                height={64}
              />
            </div>
          </div>

          {/* 2 Text box  with icon and link */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 ">
            {/* text */}
            <div className="space-y-4">
              <p className="font-bold">
                Wer profitiert von einem Systemischen Coaching?
              </p>

              <div>
                <ul className="list-disc pl-6">
                  <li>Führungskräfte, Angestellte in Unternehmen</li>
                  <li>selbstständige Unternehmer (Freelancer)</li>
                  <li>Persönliche Bereiche</li>
                </ul>
              </div>
            </div>

            {/* icon */}
            <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
              <p className="text-primary text-center">
                Coaching <br /> Fallbeispiel
              </p>
              <Image
                src="/images/icon/icon_blau_coach.png"
                alt="icon_blau_coach.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* 3 Text box  with icon and link */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 ">
            {/* text */}
            <div className="space-y-4">
              <p className="font-bold">
                Wobei unterstützt Systemisches Coaching?
              </p>

              <div>
                <ul className="list-disc pl-6">
                  <li>(Nachwuchs-)Führungstraining und Teamentwicklung</li>
                  <li>
                    Konfliktmanagement (z.B. Verhandlungs- und Gesprächsführung)
                  </li>
                  <li>Reorganisation und Veränderungsprozesse</li>
                  <li>Krisenbewältigung</li>
                </ul>
              </div>
            </div>

            {/* icon */}
            <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
              <p className="text-primary text-center">
                hier Termin <br /> vereinbaren
              </p>
              <Image
                src="/images/icon/icon_email.png"
                alt="icon_icon_email.png"
                width={62}
                height={62}
              />
            </div>
          </div>

          <p>
            Sie erhöhen Ihre Selbstreflexionsfähigkeit hinsichtlich dem
            Zusammenspiel von Ratio und Emotionen. Dadurch sind Sie besser in
            der Lage an der ein und anderen Stellschraube zu drehen, um
            nachhaltige und wirkungsvolle Lösungen im beruflichen Umfeld
            entwickeln zu können -{" "}
            <span className="font-bold">
              letztendlich Hilfe zur Selbsthilfe.
            </span>
          </p>
          <p>
            <span className="font-bold">Coachingdauer:</span> 5 Sitzungen je 90
            min – in Präsenz und Online (Google Meet, Teams)
          </p>
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default Coaching;
