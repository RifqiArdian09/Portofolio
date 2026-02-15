import Image from "next/image";

export const Logo = () => (
  <Image
    src="/favicon.ico"
    alt="Logo"
    width={32}
    height={32}
    className="h-8 w-auto"
  />
);
