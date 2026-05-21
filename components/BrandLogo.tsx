import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
};

export default function BrandLogo({ size = 56, className = "" }: BrandLogoProps) {
  return (
    <Image
      src="/images/adhyshvi.png"
      alt="School logo"
      width={size}
      height={size}
      unoptimized
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
