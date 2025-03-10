import Image from "next/image";
import HeroImageCoach from "../components/HeroImageCoach";
import Link from "next/link";

function Coaching() {
  return (
    <>
      <HeroImageCoach image={"/images/hero/hero_coach.webp"} />

      {/* Text Systemisches Coaching */}
      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          Systemisches Coaching
        </h1>

        {/* start CSS for all text boxes */}
        <div className="text-secondary dark:text-secondary_light text-lg md:text-xl space-y-4">
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
            <Link
              href="/about"
              className="min-w-32 flex flex-col justify-center items-center space-y-4"
            >
              
              <div className="text-primary text-center">
                <p>mehr</p>
                <p>erfahren</p>
              </div>

              <Image
                src="/images/icon/icon_sebb_coach.jpg"
                alt="icon_sebb_coach.jpg"
                width={64}
                height={64}
              />
            </Link>
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

            {/* icon für id="fallbeispiel"*/}
            <a
              href="#fallbeispiel"
              className="min-w-32 flex flex-col justify-center items-center space-y-4"
            >
              <div className="text-primary text-center">
                <p>Coaching</p>
                <p>Fallbeispiel</p>
              </div>

              <Image
                src="/images/icon/icon_blau_coach.png"
                alt="icon_blau_coach.png"
                width={100}
                height={100}
              />
            </a>
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

            {/* icon für id="termin" */}
            <a
              href="#termin"
              className="min-w-32 flex flex-col justify-center items-center space-y-4"
            >
              <div className="text-primary text-center">
                <p>hier Termin</p>
                <p>vereinbaren</p>
              </div>
              <Image
                src="/images/icon/icon_email.png"
                alt="icon_icon_email.png"
                width={62}
                height={62}
              />
            </a>
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
        {/* end CSS for all text boxes */}

        {/* Abschnitt Fallbeispiel ######################################################## */}
        <h1
          id="fallbeispiel"
          className="scroll-mt-24 text-primary text-xl md:text-4xl font-bold "
        >
          Ablauf Systemisches Coaching (exemplarisch)
        </h1>

        {/* start CSS for all text boxes */}
        <div className="text-secondary dark:text-secondary_light text-lg md:text-xl space-y-4">
          <p className="font-bold">Ausgangssituation</p>
          <p>
            Ein Kunde hat eine Führungsposition übernommen. Dabei stellt sich,
            neben Störungen und Konflikten im beruflichen Umfeld, für ihn die
            persönliche Herausforderung dieser neuen Rolle gerecht zu werden.
            Die Lösung liegt aber nicht in der Beantwortung der Frage, was
            Führung für ihn bedeutet und erfordert. Zielführender ist es
            vielmehr zu fragen, was im Unternehmen von einer Führungskraft
            erwartet wird. Die sich daraus ergebenden Anforderungen an Position
            und Rolle führen zu einem Abgleich des eigenen Wollens und Könnens.
          </p>
          <p className="font-bold">Vorgehen</p>
          <p>
            Das Systemische Coaching startet mit einem kostenfreien
            Erstgespräch, bei dem vor allem das gegenseitige Kennenlernen im
            Vordergrund steht. Ein Coaching kann nur dann erfolgreich sein, wenn
            das nötige Vertrauen vorhanden ist. Der Kunde entscheidet selbst,
            was für ihn gerade relevant ist und beschreibt seine Erwartungen und
            sein persönliches Coaching- Ziel, was in Form einer
            „Auftragsbestätigung“ festgehalten wird.
          </p>
          <p>
            Für das hier beschriebene Fallbeispiel kommt ein effizienter und
            erprobter Methodenfundus zur Anwendung (Auszug):
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-between space-y-4 ">
            <ul className="list-disc pl-6">
              <li>Analyse Ist-Zustand</li>
              <li>Eigenskalierung</li>
              <li>Erwartungskarusell</li>
              <li>Dual- und Teamsystem Analyse</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Systemisches Rollenmodell</li>
              <li>Eigenkompetenz und -reflexion</li>
              <li>Ressourcenmobilisierung & Lösung</li>
              <li>Hausaufgaben</li>
            </ul>
          </div>

          <p>
            Alle Sitzungsergebnisse werden dokumentiert und zur Unterstützung
            des individuellen Entwicklungsprozesses zur Verfügung gestellt.
          </p>
          <p className="font-bold">Individuelle Lösungen</p>

          <p>
            Sehr oft erkennt der Kunde während seines Coachings eingeprägte
            Verhaltensmuster, die ihn im Privaten einerseits stärken, ihn aber
            andererseits im beruflichen Alltags hinderlich sind. Da die privaten
            Lebensbereiche kaum klar abgrenzbar sind, muss zur Optimierung und
            Erweiterung der eigenen Handlungsmöglichkeiten im Beruf auch der
            punktuelle Bezug zum Privaten hergestellt werden. Die dabei
            entwickelten neuen Verhaltensweisen können Sie dann direkt zur
            Problemlösung in Ihrem Umfeld umsetzen.
          </p>
          <p>
            Wir agieren auf Augenhöhe und ich bin als neutrale Begleiter für den
            Lösungsweg bzw. den Coaching Prozess zuständig. Dabei bestimmen Sie
            alleine, wie weit oder wie tief Sie dabei in Ihrer momentanen
            Situation gehen möchten.
          </p>
          <p>
            Mit meiner Unterstützung erarbeiten Sie durch gezielt ausgewählte
            Methoden des systemischen Coachings Ihren Lösungsweg im Rahmen Ihrer
            eigenen Kompetenzen.
          </p>
        </div>
        {/* end CSS for all text boxes */}
      </div>
      <div id="termin" className="scroll-mt-24"></div>
    </>
  );
}

export default Coaching;
