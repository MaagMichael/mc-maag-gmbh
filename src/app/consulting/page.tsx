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

        <div className=" flex flex-wrap justify-around items-center gap-8 ring-2 ring-red-500">
          {/* icon projektmanagement */}
          <a
            href="#project" className="min-w-32 flex flex-col justify-center items-center space-y-4">
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
            href="#process" className="min-w-32 flex flex-col justify-center items-center space-y-4">
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
          <p className="font-bold">xxx</p>
          <p>xxx</p>
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
          <p className="font-bold">xxx</p>
          <p>xxx</p>
        </div>
        {/* end CSS for all text boxes */}
      </div>
    </>
  );
}

export default Consulting;
