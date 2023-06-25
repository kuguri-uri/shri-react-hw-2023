"use client";

import meme from "@/assets/meme.png";
import Image from "next/image";

export default function Cart() {
  return (
    <div>
      хз лениво чёт, держи меме 
      <Image
        src={meme}
        alt={`meme`}
        width={600}
        height={600}
      />
    </div>
  );
}
