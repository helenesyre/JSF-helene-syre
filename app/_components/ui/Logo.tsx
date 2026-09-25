import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/shopflow-logo.svg"
        alt="Shopflow"
        width={160}
        height={40}
        loading="eager"
        className="h-10 w-auto mr-6"
      />
    </>
  );
}
