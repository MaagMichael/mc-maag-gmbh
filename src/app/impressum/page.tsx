// import HeroImage from "../components/HeroImage";

function Impressum() {
  return (
    <div className="">
      {/* <HeroImage image={"/images/hero/hero_02.webp"} /> */}

      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          Impressum
        </h1>

        <div className="text-secondary text-lg md:text-xl space-y-4">
          <p>Angaben gemäß § 5 TMG</p>
          <div>
            <p>mc-maag consulting GmbH</p>
            <p>Stoßäckerstrasse 124</p>
            <p>70563 Stuttgart, Germany</p>
          </div>
          <p>Vertreten durch:</p>
          <div>
            <p>Dipl.-Ing. Sebastian Maag, Geschäftsführer</p>
            <p>Dipl.-Ing. Michael Maag, Geschäftsführer</p>
          </div>
          <p>Kontakt:</p>
          <div>
            <p>Telefon: +49 711 1267342</p>
            <p>E-Mail: info@maag-consulting.com</p>
            <p>Internet: www.maag-consulting.com</p>
          </div>
          <p>Registereintrag:</p>
          <div>
            <p>Sitz der Gesellschaft: Stuttgart (Deutschland)</p>
            <p>Eintragung im Registergericht: Amtsgericht Stuttgart, Registernummer: HRB 751766</p>
            <p>Umsatzsteuer-ID: 99067/10465</p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE298440414</p>
          </div>
          <div>
            <p>Inhaltlich Verantwortlicher gem. § 18 Abs. 2 MStV:</p>
            <p>Dipl.-Ing. Sebastian Maag, Geschäftsführer</p>
            <p>Dipl.-Ing. Michael Maag, Geschäftsführer</p>
            <p>(Kontakt s.o.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
