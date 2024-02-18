import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div
      key={photo.id}
      className="h-64 bg-gray-200 rounded-xl relative overflow-hidden hover:opacity-75">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        sizes="(min-width: 1380px) 310px, (min-width: 1040px) calc(18.75vw + 55px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="object-cover  cursor-pointer"
      />
    </div>
  );
}
