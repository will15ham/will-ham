import Link from "next/link";

interface BackButtonProps {
  href: string;
}

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="text-white bg-purple-600 hover:bg-purple-700 font-medium py-2 px-4 rounded mb-4"
    >
      ← Back
    </Link>
  );
}
