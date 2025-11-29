import { useEffect, useState } from "react";
import CardEncontro from "../components/CardEncontro/CardEncontro";
import BaseLayout from "../layouts/BaseLayout"; // <- import do layout
import './Home.css';

type Encontro = {
  titulo: string;
  descricao: string;
};

export default function Home() {
  const [encontros, setEncontros] = useState<Encontro[]>([]);

  useEffect(() => {
    fetch("/encontros.json")
      .then((response) => response.json())
      .then((data) => setEncontros(data));
  }, []);

  return (
    <BaseLayout>
      <h2 className="subtitulo">Encontros da Novena</h2>
      <p className="descricao-principal">Selecione um dia para ver mais detalhes do encontro</p>
      <div className="card-container">
        {encontros.map((e, i) => (
          <CardEncontro
            key={i}
            dia={i + 1}
            titulo={e.titulo}
            descricao={e.descricao}
          />
        ))}
      </div>
    </BaseLayout>
  );
}
