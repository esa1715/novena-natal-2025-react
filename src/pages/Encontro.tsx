import './Encontro.css'

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";

type Canto = {
  nome: string;
  video: string;
  letra: string;
};

type Leitura = {
  titulo: string;
  texto: string;
}

type Encontro = {
  titulo: string;
  descricao: string;
  acolhidaCanto?: Canto;
  proclamacaoDaPalavra?: Leitura;
  brevesComentariosCanto?: Canto;
  atividadeEmGrupoCanto?: Canto;
  oracaoFinalCanto?: Canto;
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
      <div className='voltar-btn-container'>
        <button className='voltar-btn' onClick={() => {window.location.href = "/";}}>VER TODOS OS ENCONTROS</button>
      </div>
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
          
          {/* ACOLHIDA */}
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
                    <p><strong>Canto:</strong> {encontro.acolhidaCanto.nome}</p>
                    <br />
                    <p><strong>Letra:</strong></p>
                    <p className="letra-canto" dangerouslySetInnerHTML={{ __html: encontro.acolhidaCanto.letra }}/>
                  </div>
                </>
              )}
            </div>
            <div className='oracao-inicial'>
              <p><strong>Oração Inicial:</strong></p>
              <p>Senhor Deus, nesta noite santa do natal, voltamos nosso coração para o mistério do Teu Amor infinito. Tu que sendo eterno e glorioso, Te fizeste pequeno. Nasceste entre nós, em uma humilde tenda, envolto nos braços da Virgem Maria, sob o olhar silencioso de São José, e guardado pela presença dos pastores e da corte celeste.<br></br>
              <br />
              Jesus, Deus conosco, adoramos-Te com reverência e gratidão, porque vieste iluminar as trevas do mundo e trazer a paz aos corações aflitos. Maria, Mãe do Salvador, ensina-nos a acolher Jesus com pureza e fé. José, guardião da Sagrada Família, inspirai-nos na obediência e no silêncio diante dos mistérios de Deus.<br></br> 
              <br />
              Santo Anjo do Senhor, que anunciaste a grande alegria do nascimento do Messias, ajudai-nos a proclamar com a vida que Deus está conosco! Menino Deus, habita também em nossas tendas, transforma nosso lar em Belém, e nossa vida em um canto de louvor.</p>
              <br />
              <span>Amém.</span>
            </div>
          </section>

          {/* PROCLAMAÇÃO DA PALAVRA */}
          <section className="secao">
            <div className="secao-titulo">
              <h3>PROCLAMAÇÃO DA PALAVRA</h3>
            </div>
            <div className="secao-conteudo">
              <p><strong>Canto:</strong> Aleluia...</p>
              {encontro.proclamacaoDaPalavra && (
                <>
                  <div className='proclamao-da-palavra'>
                    <p>{encontro.proclamacaoDaPalavra.titulo}</p>
                    <p className='proclamacao-da-palavra-texto'>{encontro.proclamacaoDaPalavra.texto}</p>
                  </div>
                </>
              )}
              <p></p>
            </div>
          </section>

          {/* BREVES COMENTÁRIOS */}
          {encontro.brevesComentariosCanto && (
          <>
          <section className="secao">
            <div className="secao-titulo">
              <h3>BREVES COMENTÁRIOS</h3>
            </div>
            <div className="secao-conteudo">                
              <div className="player-container">
                <iframe
                  src={`https://www.youtube.com/embed/${encontro.brevesComentariosCanto.video}`}
                  title={`Player do YouTube - ${encontro.brevesComentariosCanto.nome}`}
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className='canto-acolhida'>
                <p><strong>Canto:</strong> {encontro.brevesComentariosCanto.nome}</p>
                <br />
                <p><strong>Letra:</strong></p>
                <p className="letra-canto" dangerouslySetInnerHTML={{ __html: encontro.brevesComentariosCanto.letra }}/>
              </div>
            </div>
          </section> 
          </>
          )}


          {/* BREVES COMENTÁRIOS */}
          {encontro.atividadeEmGrupoCanto && (
          <>
          <section className="secao">
            <div className="secao-titulo">
              <h3>ATIVIDADE EM GRUPO</h3>
            </div>
            <div className="secao-conteudo">                
              <div className="player-container">
                <iframe
                  src={`https://www.youtube.com/embed/${encontro.atividadeEmGrupoCanto.video}`}
                  title={`Player do YouTube - ${encontro.atividadeEmGrupoCanto.nome}`}
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className='canto-acolhida'>
                <p><strong>Canto:</strong> {encontro.atividadeEmGrupoCanto.nome}</p>
                <br />
                <p><strong>Letra:</strong></p>
                <p className="letra-canto" dangerouslySetInnerHTML={{ __html: encontro.atividadeEmGrupoCanto.letra }}/>
              </div>
            </div>
          </section> 
          </>
          )}
          
          {/* ORAÇÃO FINAL */}
          <section className="secao">
            <div className="secao-titulo">
              <h3>ORAÇÃO FINAL</h3>
            </div>
            <div className="secao-conteudo">
              <div className='oracao-final'>
                <p><strong>Oração Final:</strong></p>
                <p>Senhor Deus, vemos hoje o Teu amor feito carne, Teu esplendor escondido na fraqueza de um menino. Ó amor que Se fez pequeno, ensina-nos a sermos pequenos também. Que nossos corações se tornem manjedouras puras, para Te acolher. Como os pastores, corramos para Te adorar. Como os anjos, cantemos glória. Como Maria, guardemos tudo no coração. Como José, sirvamos em silêncio. Ó Deus feito criança, sê nosso tudo!</p>
                <br />
                <span>Amém.</span>
              </div>
              {encontro.oracaoFinalCanto && (
              <>
                <div className="player-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${encontro.oracaoFinalCanto.video}`}
                    title={`Player do YouTube - ${encontro.oracaoFinalCanto.nome}`}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className='canto-acolhida'>
                  <p><strong>Canto:</strong> {encontro.oracaoFinalCanto.nome}</p>
                  <br />
                  <p><strong>Letra:</strong></p>
                  <p className="letra-canto" dangerouslySetInnerHTML={{ __html: encontro.oracaoFinalCanto.letra }}/>
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
