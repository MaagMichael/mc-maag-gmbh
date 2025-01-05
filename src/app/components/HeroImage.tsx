import Image from "next/image";

type HeroImageProps = {
  image: string;
};

function HeroImage({ image }: HeroImageProps) {
  return (
      <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] relative">
        <Image
          src={image}
          alt="Hero Image of page"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
          priority
        />
        <div className="absolute top-1/2 right-[30%] text-xl md:text-3xl lg:text-5xl text-light uppercase px-4">
          <p>Effiziente Prozesse</p>
          <p>erfordern Transparenz und</p>
          <p>Konsequenz</p>
        </div>
      </div>
    );
}
export default HeroImage