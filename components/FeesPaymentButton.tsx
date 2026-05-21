import Link from "next/link";

type FeesPaymentButtonProps = {
  href?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
};

export default function FeesPaymentButton({
  href = "#fees",
  label = "Fees Payment",
  onClick,
  className = "",
  fullWidth = false,
}: FeesPaymentButtonProps) {
  const classes = `btn-fees-3d inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-bold tracking-wide lg:px-7 lg:py-3 lg:text-sm ${
    fullWidth ? "w-full" : "shrink-0 whitespace-nowrap"
  } ${className}`;

  if (onClick) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
