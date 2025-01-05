

import HeroImage from "./components/HeroImage";
import Colordesign from "./components/Colordesign";

export default function Home() {
  return (
    <div className="">
      <HeroImage image = {"/images/hero/hero_01.webp"} />
      <Colordesign />
    </div>
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
