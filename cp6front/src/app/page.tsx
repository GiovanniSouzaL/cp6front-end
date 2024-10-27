import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Sobre mim</h1>
      <Image
                src="../public/giovanni.jpg"
                alt="Imagem de Giovanni"
                width={1920}
                height={1080}
            />
      
    </div>
  );
}
