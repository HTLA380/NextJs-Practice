import Image from "next/image";
import React from "react";

const Item = ({ result }) => {
  if (!result) return;

  const renderImage = result?.thumbnail?.source && (
    <Image src={result?.thumbnail?.source} width={40} height={80} />
  );

  return (
    <div className="flex items-center gap-4 my-2">
      {renderImage}
      <div>
        <h3 className="text-2xl font-bold underline">{result?.title}</h3>
        <p>{result?.extract}</p>
      </div>
    </div>
  );
};

export default Item;
