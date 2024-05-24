import Link from "next/link";
import CompanyLogo from "./companyLogo";
import MobileMenu from "./mobileMenu";

const navigation = [
  {
    name: "My bids",
    href: "/bids",
  },
  {
    name: "My gallery",
    href: "/my-gallery",
  },
  {
    name: "About us",
    href: "/about-us",
  },
  {
    name: "Account",
    href: "/my-account",
  },
  {
    name: "Sign up",
    href: "/sign-up",
  },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-4 my-5 flex h-[54px] items-center justify-between sm:mx-6"
        aria-label="Global"
      >
        <div className="flex">
          <CompanyLogo />
        </div>
        <div className="flex lg:hidden">
          <MobileMenu companyLogo={<CompanyLogo />} navigation={navigation} />
        </div>
        <div className="hidden justify-center lg:flex lg:flex-1 lg:gap-x-5">
          {navigation.map((item, index) => (
            <>
              <a
                key={item.name}
                href={item.href}
                className="min-w-fit p-2 text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
              {index === 2 ? <div className="mr-12" /> : null}
            </>
          ))}
        </div>
        <div className="hidden w-44 lg:flex lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
