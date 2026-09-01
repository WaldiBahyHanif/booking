import Image from "next/image";

interface HeaderSectionProps {
  title: string;
  subTitle: string;
}

export default function HeaderSection({ title, subTitle }: HeaderSectionProps) {
  return (
    <header className="relative h-60 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="header image"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Konten Teks */}
      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight capitalize">
          {title}
        </h1>
        <p className="text-base md:text-lg text-gray-300 mt-2">{subTitle}</p>
      </div>
    </header>
  );
}
