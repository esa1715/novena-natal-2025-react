import './Encontro.css'

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";

type Encontro = {
  titulo: string;
  descricao: string;
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
      </div>
    </BaseLayout>
  );
}
