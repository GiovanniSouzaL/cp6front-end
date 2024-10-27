import { NextResponse } from 'next/server';

let avaliacoes = [
  { id: '1', categoria: 'CheckPoint', nota: 8.5, feedback: 'Muito bom!' },
];

export async function GET() {
  return NextResponse.json(avaliacoes);
}

export async function POST(request: Request) {
  const novaAvaliacao = await request.json();
  avaliacoes.push({ id: `${avaliacoes.length + 1}`, ...novaAvaliacao });
  return NextResponse.json({ message: 'Avaliação criada!' }, { status: 201 });
}
