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
    
    {encontro.acolhidaCanto && (
      <>
        <div className="player-container">
          <iframe
            src={`https://www.youtube.com/embed/${encontro.acolhidaCanto.video}`}
            title={`Player do YouTube - ${encontro.acolhidaCanto.nome}`}
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className='canto-acolhida'> 
        <p>
          <strong>Canto:</strong> {encontro.acolhidaCanto.nome}
        </p>
        <p
          className="letra-canto"
          dangerouslySetInnerHTML={{ __html: encontro.acolhidaCanto.letra }}
        />
        </div>
        <div className='oracao-inicial'> 
        <p>
          <strong>Oração Inicial:</strong>
        </p>
        <p>Senhor Deus, nesta noite santa do natal, voltamos nosso coração para o mistério do Teu Amor infinito. Tu que sendo eterno e glorioso, Te fizeste pequeno. Nasceste entre nós, em uma humilde tenda, envolto nos braços da Virgem Maria, sob o olhar silencioso de São José, e guardado pela presença dos pastores e da corte celeste.<br></br>
        <br />
        Jesus, Deus conosco, adoramos-Te com reverência e gratidão, porque vieste iluminar as trevas do mundo e trazer a paz aos corações aflitos. Maria, Mãe do Salvador, ensina-nos a acolher Jesus com pureza e fé. José, guardião da Sagrada Família, inspirai-nos na obediência e no silêncio diante dos mistérios de Deus.<br></br> 
        <br />
        Santo Anjo do Senhor, que anunciaste a grande alegria do nascimento do Messias, ajudai-nos a proclamar com a vida que Deus está conosco! Menino Deus, habita também em nossas tendas, transforma nosso lar em Belém, e nossa vida em um canto de louvor.</p>
        <br />
        <span>Amém.</span>
        </div>
      </>
    )}
  </div>
</section>


            </div>
      </div>
    </BaseLayout>
  );
}
