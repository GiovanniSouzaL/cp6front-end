import Link from 'next/link';

export default function Cabecalho() {
  return (
    <header className="p-4 bg-blue-300 text-white ">
      <h1 className="text-lg font-bold">Portifólio dos integrantes</h1>
      <nav className="flex space-x-4">
        <Link href="/">Dashboard</Link>
        <Link href="/checkpoints">CheckPoints</Link>
        <Link href="/globalsolution">GlobalSolution</Link>
        <Link href="/challenger-sprints">Challenger-Sprints</Link>
      </nav>
    </header>
  );
}
