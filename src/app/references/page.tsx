import HeroImage from "../components/HeroImage";

function References() {
  return (
    <div className="">
      <HeroImage image={"/images/hero/hero_02.webp"} />

      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          Referenzen
        </h1>

        <div className="text-secondary text-xl md:text-2xl space-y-4">
          <p>
            Möchten Sie Referenzen über unsere Beratungsleistungen einholen? -
            Wir nennen Ihnen gerne unsere Ansprechpartner.
          </p>
          <p>
            Für eine Anfrage schreiben Sie uns bitte eine E-Mail unter Angabe
            des Themenfeldes oder nutzen Sie die Nachrichtenfunktion der Webseite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default References;
