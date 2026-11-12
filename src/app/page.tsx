import Image from "next/image";

const products = [
  {
    name: "Running vest",
    category: "Hidratación · 01",
    price: "Próximamente",
    image: "/products/running-vest.jpg",
    alt: "Corredor usando un chaleco de hidratación con flask en el pecho",
    className: "product-card__image--vest",
  },
  {
    name: "Soft flask",
    category: "Hidratación · 02",
    price: "Próximamente",
    image: "/products/soft-flask.jpg",
    alt: "Corredor hidratándose durante una carrera con equipo de trail",
    className: "product-card__image--soft-flask",
  },
  {
    name: "Bolsa de hidratación tipo CamelBak",
    category: "Hidratación · 03",
    price: "Próximamente",
    image: "/products/hydration-pack.jpg",
    alt: "Deportista usando una mochila de hidratación con manguera",
    className: "product-card__image--hydration-pack",
  },
];

function MountainMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 48"
    >
      <path
        d="M3 43 29 5l11 17 7-9 14 30H3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m18 43 13-13 8 6 8-8 9 15H18Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      aria-label="ALTA Trail Lab, inicio"
      className={`wordmark${light ? " wordmark--light" : ""}`}
      href="#inicio"
    >
      <MountainMark className="wordmark__mark" />
      <span className="wordmark__name">ALTA</span>
      <span className="wordmark__sub">TRAIL LAB</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero__image" aria-hidden="true" />
        <header className="site-header">
          <Wordmark light />
          <nav aria-label="Navegación principal" className="site-nav">
            <a href="#equipo">Equipo</a>
            <a href="#filosofia">Filosofía</a>
            <a href="#diario">Diario de ruta</a>
          </nav>
          <a className="header-link" href="#equipo">
            <span>Explorar tienda</span>
            <span aria-hidden="true" className="header-link__arrow">
              ↗
            </span>
          </a>
        </header>

        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__line" />
            Trail running · Patagonia
          </p>
          <h1>
            El camino
            <br />
            se dibuja
            <br />
            <em>paso a paso.</em>
          </h1>
          <div className="hero__bottom">
            <p>
              Equipo esencial para quienes encuentran
              <br className="desktop-break" /> su norte fuera del camino.
            </p>
            <a className="circle-link" href="#equipo">
              <span className="sr-only">Descubrir el equipo</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero__coordinates">40° 08′ S — 71° 21′ O</div>
        <div className="hero__vertical">DISEÑADO PARA IR MÁS ALLÁ</div>
      </section>

      <section aria-label="Nuestra filosofía" className="manifesto" id="filosofia">
        <div className="manifesto__label">
          <span className="section-index">01 / 03</span>
          <span>Una forma de avanzar</span>
        </div>
        <p className="manifesto__statement">
          No diseñamos para llegar primero.
          <br />
          Diseñamos para <em>seguir explorando.</em>
        </p>
        <a className="text-link" href="#diario">
          Conocé nuestra filosofía <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section aria-labelledby="products-title" className="products" id="equipo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">02 / 03</span>
              <span className="eyebrow__line" />
              Hecho para el terreno
            </p>
            <h2 id="products-title">
              Menos peso.
              <br />
              <em>Más camino.</em>
            </h2>
          </div>
          <a className="text-link section-heading__link" href="#equipo">
            Ver todo el equipo <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <a
                aria-label={`Conocer ${product.name}`}
                className={`product-card__image ${product.className}`}
                href="#contacto"
              >
                <Image
                  alt={product.alt}
                  className="product-card__photo"
                  fill
                  sizes="(max-width: 600px) 86vw, 28vw"
                  src={product.image}
                />
                <span className="product-card__number">
                  0{index + 1} / 03
                </span>
                <span aria-hidden="true" className="product-card__arrow">
                  ↗
                </span>
              </a>
              <div className="product-card__meta">
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <span className="product-card__price">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="field-title" className="field-note" id="diario">
        <div className="field-note__photo" aria-hidden="true" />
        <div className="field-note__content">
          <p className="eyebrow">
            <span className="section-index">03 / 03</span>
            <span className="eyebrow__line" />
            Notas de terreno
          </p>
          <h2 id="field-title">
            El mejor
            <br />
            ritmo es
            <br />
            <em>el tuyo.</em>
          </h2>
          <p className="field-note__copy">
            Probamos cada pieza donde importa: en la montaña, kilómetro a
            kilómetro. Sin atajos. Sin ruido.
          </p>
          <a className="text-link text-link--light" href="#contacto">
            Así trabajamos <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="field-note__caption">SENDA AL REFUGIO · 2.140 MSNM</p>
      </section>

      <footer className="site-footer" id="contacto">
        <div className="site-footer__top">
          <Wordmark />
          <p className="site-footer__motto">
            Trail running
            <br />
            research materials performance
          </p>
          <a className="footer-cta" href="mailto:hola@altatraillab.com">
            Hablemos de montaña <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>© 2025 ALTA TRAIL LAB</span>
          <span>HECHO PARA EL CAMINO QUE ELIJAS.</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </main>
  );
}
