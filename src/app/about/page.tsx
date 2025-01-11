import Image from "next/image";
import HeroImage from "../components/HeroImage";

function About() {
  return (
    <>
      <HeroImage image={"/images/hero/hero_01.webp"} />

      {/* Text about */}
      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        {/* <h1 className="text-primary text-xl md:text-4xl font-bold "></h1> */}

        {/* start CSS for all text boxes */}
        <div className="text-secondary text-lg md:text-xl space-y-4">
          <p>
            <span className="font-bold">„Ihr Erfolg ist unser Ziel“</span> –
            Profitieren Sie von unserer jahrzehntelangen Erfahrung und
            Praxissicherheit in den differenziertesten Branchen.
          </p>
          <p>
            Die mc - maag consulting GmbH steht für herausragendes
            Management-Wissen in Verbindung mit innovativer
            Technologie-Beratung.
          </p>
          <p>
            Die Fähigkeit die bei uns vorhandenen Erfahrungswerte zu
            abstrahieren und anhand innovativer und bewährter Konzepte
            branchenspezifisch in die Praxis umzusetzen, sind der Schlüssel für
            den garantierten Geschäftserfolg unserer Kunden.
          </p>
          <p>
            Die mc - maag consulting GmbH betreut namhafte mittelständische
            Kunden sowie international tätige Unternehmen und ist somit
            branchenübergreifend in der nationalen wie internationalen
            Wirtschaft zuhause.
          </p>

          {/* ##################### Bilder GF ###################### */}

          <div className="text-secondary text-lg md:text-xl text-center flex flex-col md:flex-row gap-4 justify-around md:items-start">
            {/* icon projektmanagement */}
            <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
              <Image
                src="/images/GF/Sebb_portrait.jpg"
                alt="Sebb_portrait.jpg"
                width={214}
                height={206}
              />
              <p className="font-bold">Dipl.-Ing. Sebastian Maag</p>
              <p>Geschäftsführer</p>

              {/* Insta und Linkind icon links */}
              <div className="flex flex-row flex-start gap-4">
                
                <a href="https://www.linkedin.com/in/sebastian-maag-4a072bb4/" target='blank'>
                  <Image
                    src="/images/icon/linkedin.png"
                    alt="linkedin.png"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/coach.me.well/" target='blank'>
                  <Image
                    src="/images/icon/insta.png"
                    alt="insta.png"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>

            {/* icon Process Reengineering */}
            <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
              <Image
                src="/images/GF/Mich_portrait.jpg"
                alt="Mich_portrait.jpg"
                width={211}
                height={207}
              />
              <p className="font-bold">Dipl.-Ing. Michael Maag</p>
              <p>Geschäftsführer</p>
            </div>
          </div>
          {/* ############################### CV Sebastian Maag ############################### */}
          <p>
            <span className="font-bold">Sebastian Maag,</span> Senior Consultant
            & Systemischer Coach
          </p>
          <p>
            <span className="font-bold">Mein Ansatz:</span> Effiziente Prozesse
            erfordern Transparenz und Konsequenz - und sind letztendlich doch
            nichts ohne die handelnden Menschen. Grundlage meines nachhaltigen
            Beratungsansatzes ist die Einsicht, daß sich fachliche und soziale
            „Effizienz“ bzw. Verträglichkeit gegenseitig bedingen. Die
            prozessuale Beratung und das Systemische Coaching sind im Idealfall
            gleichgerichtet und somit maximal lösungsorientiert.
          </p>
          <p>Dabei gilt: So lange wie nötig, so kurz wie möglich!</p>
          <p>
            <span className="font-bold">Meine Erfahrung:</span> Während meines
            Berufslebens bin ich, ob nun als operatives Projektmitglied,
            Führungskraft oder Berater, immer wieder projektbedingt in neue
            (Team)strukturen eingetaucht. Durch meine Begegnungen mit den darin
            eingebundenen Menschen habe ich neben der fachlichen Expertise auch
            die unterschiedlichen Arbeitsweisen innerhalb bzw. zwischen den
            Systemen erleben können.
          </p>
          <p>
            Somit konnte ich praxisnah die aus einer Umsetzung resultierenden
            Herausforderungen und die individuelle Belastbarkeit von Teams und
            Einzelpersonen beobachten und verstehen. Denn oft wird der
            anfängliche Enthusiasmus Einzelner ("...denn in jedem Neuanfang
            wohnt der Zauber der Hoffnung.") durch Verunsicherung oder
            Frustration gedämpft und die tägliche Zusammenarbeit blockiert.
          </p>
          <p>
            Daher habe ich meine Beratungskompetenz um das Systemischen Coaching
            erweitert, um neben der prozessualen Optimierung auch eine Stärkung
            der beruflichen Rollen im professionellen Umfeld gesamtheitlich zu
            unterstützen.
          </p>
          <p>
            <span className="font-bold">Mein Credo:</span> "Es gibt keine Fehler
            – Es gibt nur Erfahrungen und Deine Reaktionen darauf", Tom Krause,
            Opernsänger (1934-2013)
          </p>
          <p>
            Diese Aussage spiegelt sehr treffend die Sichtweise auf meine Arbeit
            als Systemischer Coach wieder. Darin werde ich immer wieder im
            Coaching mit meinen Kunden bzw. Coachees bestätigt.
          </p>
        </div>
        {/* end CSS for all text boxes */}
      </div>
    </>
  );
}

export default About;
