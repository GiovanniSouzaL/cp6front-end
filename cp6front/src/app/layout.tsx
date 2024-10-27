import './globals.css';
import Cabecalho from '@/components/cabecalho';
import Rodape from '@/components/rodape';

export const metadata = {
  title: 'cp6 front-end',
  description: 'Gerenciamento de Avaliações',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Cabecalho />
        <main className="flex-grow">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}