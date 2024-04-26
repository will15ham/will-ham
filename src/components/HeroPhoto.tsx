import Image from "next/image";

export default function HeroPhoto() {
  return (
    <Image
      src="/face-photo.png"
      alt="face photo"
      className="rounded-full object-cover shadow-custom w-1/2 max-w-[300px] max-h-[300px]"
      style={{
        aspectRatio: "1",
        boxShadow:
          "0.5rem 0 0 0 #d6c9ee, 1rem 0 0 0 #e0d6f1, 1.5rem 0 0 #ebe5f4",
      }}
      width={300}
      height={300}
      priority
    />
  );
}
