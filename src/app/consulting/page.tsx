import Image from "next/image";
import HeroImage from "../components/HeroImage";

function Consulting() {
  return (
    <>
      <HeroImage image={"/images/hero/hero_03.webp"} />

      {/* Text Consulting */}
      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          Beratungsleistung
        </h1>

        <p>
          Die mc - maag consulting GmbH steht für zielgerichtete Konzeptionen
          zur Prozessoptimierung und Effizienzsteigerung der Abläufe innerhalb
          des gesamten Produktentstehungsprozesses im Projekt oder Unternehmen.
          Hierbei unterstützen wir Sie sowohl bei der Einführung neuer Prozesse
          als auch bei der Implementierung von Digitalisierungsprojekten und
          sichern durch unsere operative Beteiligung Ihren nachhaltigen Erfolg.
        </p>

        <div className=" flex flex-wrap justify-around items-center gap-4">
          {/* icon projektmanagement */}
          <a
            href="#project"
            className="min-w-32 flex flex-col justify-center items-center space-y-4"
          >
            <p className="font-bold">Multi-/Project Management</p>
            <Image
              src="/images/icon/icon-orange-projectmanagement.png"
              alt="icon-orange-projectmanagement.png"
              width={144}
              height={144}
            />
          </a>

          {/* icon Process Reengineering */}
          <a
            href="#process"
            className="min-w-32 flex flex-col justify-center items-center space-y-4"
          >
            <p className="font-bold">Process Reengineering</p>
            <Image
              src="/images/icon/icon_blau_reenginieering.png"
              alt="icon_blau_reenginieering.png"
              width={144}
              height={144}
            />
          </a>

          {/* icon qualitymanagement */}
          <a
            href="#quality"
            className="min-w-32 flex flex-col justify-center items-center space-y-4"
          >
            <p className="font-bold">Qualität & Zulieferkette</p>
            <Image
              src="/images/icon/icon-orange-quality.png"
              alt="icon-orange-quality.png"
              width={144}
              height={144}
            />
          </a>
        </div>

        {/* ######################## Detail areas of bussiness ######################### */}

        {/* ######################### Multi-/Project Management ######################### */}
        <h1
          id="project"
          className="text-primary text-xl md:text-4xl font-bold scroll-mt-24"
        >
          Multi-/Project Management
        </h1>
        {/* start CSS for all text boxes */}
        <div className="text-secondary text-lg md:text-xl space-y-4">
          <p className="font-bold">xxx</p>
          <p>xxx</p>
        </div>
        {/* end CSS for all text boxes */}
        {/* ######################### Process Reengineering ######################### */}
        <h1
          id="process"
          className="text-primary text-xl md:text-4xl font-bold scroll-mt-24"
        >
          Process Reengineering
        </h1>
        {/* start CSS for all text boxes */}

        <div className="text-secondary text-lg md:text-xl space-y-4">
          <p className="font-bold">Business-Process-Reengineering (BPR)</p>
          <p>
            Bei diesem Ansatz verfolgen wir die Geschäftsprozesse eines
            Unternehmens von Grund auf neu zu gestalten. So soll das Unternehmen
            sich von einer funktionalen zu einer prozessorientierten
            Organisation wandeln.
          </p>
          <p>
            Bei dieser Methode der Prozessumgestaltung legen wir den Fokus auf
            die wichtigsten Prozesse innerhalb eines Unternehmens, wobei die
            stetige Kundenausrichtung sowohl Ziel als auch permanente Aufgabe
            sein soll. Der zweite Fokus des Business-Process-Reengineerings
            liegt bei uns darüber hinaus auf den Kernkompetenzen des
            Unternehmens. Grundsätzlich lassen sich solche Beratungsprojekte in
            folgende Schritte unterteilen:
          </p>
          <ol className="list-decimal pl-6">
            <li>Erfolgsfaktoren - <span className="italic">Entwicklung Strategie</span></li>
            <li>Fokussierung - <span className="italic">Definition Kernkompetenzen und Schlüsselprozesse</span></li>
            <li>Kreative Gestaltung - <span className="italic">Fundamentale und radikale Neugestaltung der Abläufe</span></li>
            <li>Managemententwicklung - <span className="italic">Anpassungen, Strukturierung, Personal, Controlling, Führung</span></li>
            <li>Umsetzungsplanung - <span className="italic">Einführungsplan mit Machbarkeitsprüfung</span></li>
            <li>Implementierung - <span className="italic">Umsetzung nach dem Projektplan</span></li>
          </ol>
          <p>
            Unserer Erfahrung nach ist die oft prognostizierte Optimierung von
            bis zu 30 Prozent bei den Zielgrößen Qualität, Zeit, Kosten und
            Service durch BPR eher kritisch zu betrachten. Viele
            Verbesserungspotentiale können in der angesetzten Projektlaufzeit
            nicht vollständig gehoben werden. Die Ursachen dafür liegen oftmals
            darin, dass Projekte nicht ganzheitlich gestaltet und nahezu
            ausschließlich auf Kostenreduzierung und Optimierung von Abläufen
            ausgerichtet sind. Ändern sich aber die Managementsysteme und das
            Führungshandeln entsprechend, wird die Änderungskapazität eines
            Unternehmens nicht ausgeschöpft. Leider wird auch oft die
            Möglichkeit einer konsequenten Nutzung neuer Technologien versäumt.
          </p>
          <p>
            <span className="font-bold">Die mc - maag consulting GmbH</span>{" "}
            kombiniert daher den BPR Ansatz gerne mit einem
            Business-Process-Management (BPM).
          </p>
          <p className="font-bold">Business-Process-Management (BPM)</p>
          <p>
            Ziel des Business Process Managements ist es, einen Kundennutzen zu
            schaffen und damit auch für das Unternehmen Werte wie z.B. kürzere
            Lieferzeiten, höhere Durchlaufraten, etc. zu generieren. Ziel des
            Business Process Management ist es zudem konkrete Standards für
            Prozesse zur Erbringung bestimmter Leistungen zu definieren und zu
            etablieren. Somit kann in Verbindung mit einem Qualität Management
            System die entsprechende Leistung nicht zufällig in der gewünschten
            Qualität erbracht werden, sondern regelmäßig.
          </p>
          
        </div>
        {/* end CSS for all text boxes */}

        {/* ######################### Quality Management ######################### */}
        <h1
          id="quality"
          className="text-primary text-xl md:text-4xl font-bold scroll-mt-24"
        >
          Qualitäts Management
        </h1>

        {/* start CSS for all text boxes */}
        <div className="text-secondary text-lg md:text-xl space-y-4">
          <p className="font-bold">Qualität als der Wettbewerbsfaktor</p>
          <p>
            Durch die zunehmende Globalisierung der Märkte entwickeln sich die
            kostenoptimierte Entwicklung, Produktion und Lieferungen von
            Produkten und Dienstleistungen zu dem entscheidenden
            Wettbewerbsfaktor für Unternehmen.
          </p>
          <p>
            Immer mehr Kunden fordern von ihren Lieferanten und Dienstleistern
            ein zertifiziertes QM-System als Voraussetzung für eine Fortführung
            der Geschäftsbeziehung. Um langfristig auf qualitativ hohem Niveau
            handlungsfähig zu bleiben und entstehende Haftungsrisiken zu
            minimieren, bildet die QM Zertifizierung auch eine gute
            Voraussetzung bei zukünftigen Auftragsvergaben oder
            Lieferantenbewerbungen.
          </p>
          <div className="flex flex-col md:flex-row gap-4 ">
            <p className="md:w-1/2">
              <span className="font-bold">DIN EN ISO 9001…</span> die Abläufe in
              einem Unternehmen so zu gestalten, dass am Ende eine bestmögliche
              oder geplante Qualität des Produktes oder der Dienstleistung
              herauskommt.
            </p>
            <p className="md:w-1/2">
              <span className="font-bold">DIN EN ISO 14001 …</span> legt
              Anforderungen in einem Umweltmanagementsystem fest, mit dem das
              Unternehmen seine Umweltleistung verbessern, rechtliche und
              sonstige Verpflichtungen erfüllen und die Umweltziele erreichen
              kann.
            </p>
          </div>
          <p>
            Die überarbeiteten Fassung der Norm für Qualitätsmanagement ISO 9001
            und für Umweltmanagement ISO 14001 sorgt dafür, dass das
            Qualitätsmanagement nun vollständig in Ihre Geschäftsstrategien
            integriert ist und auf diese abgestimmt wird. Die umfassend
            aktualisierte Revision 2015 stellt eine hervorragende Gelegenheit
            dar, Ihre Unternehmensprozesse noch effizienter zu gestalten sowie
            die Kundenzufriedenheit zu steigern.
          </p>
          <p>
            <span className="font-bold">Die mc - maag consulting GmbH</span>{" "}
            unterstützt Sie in allen Prozessen rund um die Einführung und
            Zertifizierung von Qualität Managementsystemen - von der
            Leistungsbewertung Ihrer Arbeitsabläufe über die Vorbereitung und
            Umsetzung des Audits bis zur Schulung Ihrer Mitarbeiter und
            Überwachung der jeweiligen Arbeitsprozesse.
          </p>
        </div>
        {/* end CSS for all text boxes */}
      </div>
    </>
  );
}

export default Consulting;
