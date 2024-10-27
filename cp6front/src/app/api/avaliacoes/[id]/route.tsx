import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const avaliacao = avaliacoes.find(a => a.id === params.id);
  return avaliacao
    ? NextResponse.json(avaliacao)
    : NextResponse.json({ message: 'Avaliação não encontrada' }, { status: 404 });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const index = avaliacoes.findIndex(a => a.id === params.id);
  if (index === -1) return NextResponse.json({ message: 'Avaliação não encontrada' }, { status: 404 });

  const updatedData = await request.json();
  avaliacoes[index] = { ...avaliacoes[index], ...updatedData };
  return NextResponse.json(avaliacoes[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  avaliacoes = avaliacoes.filter(a => a.id !== params.id);
  return NextResponse.json({ message: 'Avaliação excluída' });
}
