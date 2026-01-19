import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "font-sans inline-flex items-center justify-center px-4 py-2 rounded-[3px] transition-colors";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary:
      "bg-transparent text-primary border border-primary hover:bg-primary/5",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
