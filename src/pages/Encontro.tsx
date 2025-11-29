import './Encontro.css'

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";

type Canto = {
  nome: string;
  video: string; // só o ID do YouTube
  letra: string;
};

type Encontro = {
  titulo: string;
  descricao: string;
  acolhidaCanto?: Canto;
};


export default function Encontro() {
  const { dia } = useParams<{ dia: string }>();
  const [encontro, setEncontro] = useState<Encontro | null>(null);

  useEffect(() => {
    fetch("/encontros.json")
      .then((res) => res.json())
      .then((data: Encontro[]) => {
        const index = Number(dia) - 1;
        if (data[index]) setEncontro(data[index]);
      });
  }, [dia]);

  if (!encontro) return <BaseLayout>Carregando...</BaseLayout>;

  return (
    <BaseLayout>
      <div className="card-container">
        <article className="card">
          <div className="numero-dia">
            <span className="numero">{dia}</span>
            <span className="dia">DIA</span>
          </div>
          <div className="card-resumo">
            <h2 className='titulo-encontro' dangerouslySetInnerHTML={{ __html: encontro.titulo.replace(/\n/g, "<br/>") }} />
            <p className='descricao-encontro' dangerouslySetInnerHTML={{ __html: encontro.descricao.replace(/\n/g, "<br/>") }} />
          </div>
        </article>
        <div className="card-content">
            <section className="secao">
  <div className="secao-titulo">
    <h3>ACOLHIDA</h3>
  </div>
  <div className="secao-conteudo">
    
    {/* Se houver canto dentro da acolhida */}
    {encontro.acolhidaCanto && (
      <>
        <div className="player-container">
          <iframe
            // width="100%"
            // height="auto"
            // aspect-ratio= "3 / 2"
            src={`https://www.youtube.com/embed/${encontro.acolhidaCanto.video}`}
            title={`Player do YouTube - ${encontro.acolhidaCanto.nome}`}
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
                style={{ width: '100%', height: '100%' }}

          />
        </div>

<p>
          <strong>Canto:</strong> {encontro.acolhidaCanto.nome}
        </p>
<p
  className="letra-canto"
  dangerouslySetInnerHTML={{ __html: encontro.acolhidaCanto.letra }}
/>


      </>
    )}
  </div>
</section>


            </div>
      </div>
    </BaseLayout>
  );
}
