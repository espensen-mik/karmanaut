import Image from "next/image";

import { Tagline } from "@/app/tagline";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6">
      <Image
        src="/Karmanaut_logo.svg"
        alt="Karmanaut"
        width={739}
        height={577}
        priority
        className="h-auto w-full max-w-[17rem] sm:max-w-[19.5rem]"
      />
      <Tagline />
    </div>
  );
}
