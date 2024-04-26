import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
}

const navBarObject: NavItem[] = [
  {
    name: "About Me",
    link: "/about-me",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resume",
    link: "/Will-Ham-Resume.pdf",
  },
  {
    name: "Github",
    link: "https://github.com/will15ham",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/will-ham/",
  },
];

export default function NavBar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:space-x-2 mt-4 gap-y-6">
      {navBarObject.map((navItem) => (
        <Link
          key={navItem.name}
          href={navItem.link}
          className="bg-purple-600 text-white uppercase rounded-full px-6 py-2"
        >
          {navItem.name}
        </Link>
      ))}
    </nav>
  );
}
