import './CardEncontro.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  titulo: string;
  descricao: string;
  dia: number;
}

export function CardEncontro({ titulo, descricao, dia }: Props) {
  const navigate = useNavigate();

  return (
    <article className="card" onClick={() => navigate(`/encontro/${dia}`)}>
      <div className="numero-dia">
        <span className="numero">{dia}</span>
        <span className="dia">DIA</span>
      </div>

      <div className="card-resumo">
        <h2
          className="titulo-encontro"
          dangerouslySetInnerHTML={{ __html: titulo.replace(/\n/g, "<br/>") }}
        />
        <p
          className="descricao-encontro"
          dangerouslySetInnerHTML={{ __html: descricao.replace(/\n/g, "<br/>") }}
        />
      </div>
    </article>
  );
}

export default CardEncontro;
