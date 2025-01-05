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
        <div className="absolute top-1/2 md:top-2/3 right-[30%] text-xl md:text-3xl lg:text-5xl text-light uppercase px-4">
          <p>Systemisches Coaching -</p>
          <p>Eine gute Frage ...</p>
          <p>braucht keine Antwort</p>
        </div>
      </div>
    );
}
export default HeroImage