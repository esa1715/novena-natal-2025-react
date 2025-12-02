import type { ReactNode } from "react";
import "./BaseLayout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from  '@fortawesome/free-solid-svg-icons';

type Props = {
  children: ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <header>
        <nav>
            <h1>Novenas de Natal 2025</h1>
        </nav>
    </header>

      <main>
        {children}
      </main>

      <footer>
        <p>Conteúdo baseado no material oficial da "Novena de Natal 2025" da Diocese de Campo Limpo.</p>
        <p>Siga a Diocese:</p>
        <div className="social-icons">
          <a
            href="https://dcl.org.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Site Oficial da Diocese"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          
          <a
            href="https://www.facebook.com/diocesedecampolimpo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Diocese"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            href="https://www.instagram.com/diocesedecampolimpo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Diocese"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.youtube.com/diocesedecampolimpo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube da Diocese"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

        </div>
    </footer>
    </>
  );
}
