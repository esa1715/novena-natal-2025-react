import type { ReactNode } from "react";
import "./BaseLayout.css";

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
        <p>&copy; 2025 Novena de Natal.</p>
         {/* <a href="https://www.flaticon.com/br/icones-gratis/arvore" title="árvore ícones">Árvore ícones criados por Freepik - Flaticon</a> */}
    </footer>
    </>
  );
}
