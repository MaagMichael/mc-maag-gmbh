import Link from "next/link";
import HeroImage from "./components/HeroImage";
import Image from "next/image";
// import Colordesign from "./components/Colordesign";

export default function Home() {
  return (
    <>
      <HeroImage image={"/images/hero/hero_01.webp"} />
      {/* <Colordesign /> */}

      {/* Text Home */}
      <div className="max-w-[1024px] mx-auto p-4 space-y-4 mb-8">
        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          mc - maag consulting GmbH
        </h1>

        {/* start CSS for all text boxes */}
        <div className="text-secondary text-lg md:text-xl space-y-4">
          <p>
            Optimale und damit effiziente Prozesse erfordern maximale
            Transparenz und Konsequenz - danach handeln wir! Das ist unser
            zentrales Versprechen an unsere Kunden.
          </p>
          <p>
            Um der steigenden Komplexität und der erhöhten Entscheidungsfrequenz
            in den Unternehmen begegnen zu können ist heutzutage eine eng auf
            die jeweiligen operativen Prozesse & Organisationen abgestimmte IT
            Unterstützung unerlässlich. Die ganzheitliche Betrachtung von
            Prozess, Organisation und IT ist bei unseren Beratungsleistungen
            unverzichtbar und bildet den Erfolgsgaranten für eine nachhaltige
            Optimierung und Implementierung unserer Lösungen bei unseren Kunden.
          </p>
        </div>
        {/* end CSS for all text boxes */}

        <h1 className="text-primary text-xl md:text-4xl font-bold ">
          Kompetenzfelder
        </h1>

        <Link href="/consulting" className="text-secondary text-lg md:text-xl text-center flex flex-col md:flex-row gap-4 justify-around">
          {/* icon projektmanagement */}
          <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
            <p className="font-bold">Multi-/Project Management</p>
            <Image
              src="/images/icon/icon-orange-projectmanagement.png"
              alt="icon-orange-projectmanagement.png"
              width={567}
              height={567}
              className="w-36"
            />
            <p>&ldquo;Effective egine(ering) of your projects&rdquo;</p>
          </div>

          {/* icon Process Reengineering */}
          <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
            <p className="font-bold">Process Reengineering</p>
            <Image
              src="/images/icon/icon_orange_reenginieering.png"
              alt="icon_orange_reenginieering.png"
              width={567}
              height={567}
              className="w-36"
            />
            <p>&ldquo;Committed to Process Reengineering&rdquo;</p>
          </div>

          {/* icon qualitymanagement */}
          <div className="min-w-32 flex flex-col justify-center items-center space-y-4">
            <p className="font-bold">Qualität & Zulieferkette</p>
            <Image
              src="/images/icon/icon-orange-quality.png"
              alt="icon-orange-quality.png"
              width={567}
              height={567}
              className="w-36"
            />
            <p>&ldquo;Committed to supply chain in quality and cost&rdquo;</p>
          </div>
        </Link>
      </div>
    </>
  );
}

// try out data from json server and map it to the page
// interface dataProps {
//   id: number;
//   title_class: string;
// }
// export default async function Home() {
//   // start json server of vintage club npm run server
//   const response = await fetch("http://localhost:4003/classesPage");
//   const data = await response.json();
//   // console.log(data)

//   return (
//     <>
//       {data.map((item: dataProps) => (
//         <h1 key={item.id}>{item.title_class} </h1>
//       ))}
//       ;
//     </>
//   );
// }
