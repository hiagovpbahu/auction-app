import Link from "next/link";

export default function CompanyLogo() {
  return (
    <Link
      className="focus:outline-primary font-nexcellerate text-light min-w-fit cursor-pointer items-center text-3xl font-bold tracking-tighter"
      href="/"
    >
      <span className="hidden sm:inline-block">{">>>"}</span> Nexcellerate.
    </Link>
  );
}
