import Link from "next/link";

export default function Menu() {
  return (
    <main className="menu">
      <nav>
        <ul className="flex gap-5 justify-center">
          <li><Link href="/">Home |</Link></li>
          <li><Link href="/giovanni">Giovanni |</Link></li>
          <li><Link href="/vitor">Vitor |</Link></li>
          <li><Link href="/pedro">Pedro |</Link></li>
          <li><Link href="/victor">Victor |</Link></li>
          <li><Link href="/mariana">Mariana |</Link></li>
        </ul>
      </nav>
    </main>
  );
}