import Image from "next/image";

function MountainMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 64 48">
      <path d="M3 43 29 5l11 17 7-9 14 30H3Z" fill="currentColor" />
      <path d="m15 42 17-14 7 6 8-7 8 15H15Z" fill="var(--mark-cut, #f3f0e9)" />
      <path d="m24 39 13-6-5 7 12-3-9 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a aria-label="ALTA Trail Lab, inicio" className={`wordmark${light ? " wordmark--light" : ""}`} href="#inicio">
      <MountainMark className="wordmark__mark" />
      <span className="wordmark__copy">
        <span className="wordmark__name">ALTA</span>
        <span className="wordmark__sub">TRAIL LAB</span>
      </span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const productDetails = [
  { number: "01", title: "Malla respirable", copy: "Contacto liviano y ventilado para acompañar el movimiento." },
  { number: "02", title: "Acceso frontal", copy: "Bolsillos al alcance de la mano para llevar lo esencial." },
  { number: "03", title: "Ajuste adaptable", copy: "Cordones elásticos para encontrar una sujeción personal." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <Image alt="Corredor de trail ascendiendo una cresta rocosa al amanecer" className="hero__photo" fill priority sizes="100vw" src="/brand/alta-hero.png" />
        <div className="hero__shade" />

        <header className="site-header">
          <Wordmark light />
          <nav aria-label="Navegación principal" className="site-nav">
            <a href="#coleccion">Colección</a>
            <a href="#criterios">Diseño</a>
            <a href="#historia">Territorio</a>
          </nav>
          <a className="header-cta" href="#lanzamiento">Próximamente <Arrow /></a>
        </header>

        <div className="hero__content">
          <p className="kicker kicker--light"><span /> Alta Trail Lab · Mendoza</p>
          <h1>El camino<br />se dibuja<br /><em>paso a paso.</em></h1>
          <div className="hero__actions">
            <a className="button button--light" href="#coleccion">Conocé ALTA <Arrow /></a>
            <p>Equipamiento de trail running para tu próximo sendero.</p>
          </div>
        </div>

        <div className="hero__footer">
          <span>33° S · Cordillera de los Andes</span>
          <a href="#manifiesto">Descubrir ↓</a>
        </div>
      </section>

      <section className="manifesto" id="manifiesto">
        <p className="section-label">01 · Manifiesto</p>
        <h2>Menos ruido.<br />Más <em>montaña.</em></h2>
        <div className="manifesto__copy">
          <p>ALTA nace para acompañar el ritmo real del sendero: avanzar ligero, llevar lo esencial y mantener el foco en el recorrido.</p>
          <a className="text-link" href="#criterios">Nuestra forma de diseñar <Arrow /></a>
        </div>
      </section>

      <section aria-labelledby="product-title" className="product" id="coleccion">
        <div className="product__visual">
          <Image alt="Chaleco de hidratación verde salvia con malla respirable y cordones de ajuste" className="product__photo" fill sizes="(max-width: 760px) 100vw, 58vw" src="/brand/alta-vest-detail.png" />
          <span className="product__tag">Colección 01 · Hidratación</span>
          <span className="product__counter">01 / 01</span>
        </div>

        <div className="product__content">
          <p className="kicker"><span /> Primer lanzamiento</p>
          <h2 id="product-title">Chaleco<br /><em>ALTA 01</em></h2>
          <p className="product__intro">Una primera pieza construida alrededor de lo que importa en movimiento: acceso, respirabilidad y ajuste.</p>
          <div className="product__details">
            {productDetails.map((detail) => (
              <article key={detail.number}>
                <span>{detail.number}</span>
                <div><h3>{detail.title}</h3><p>{detail.copy}</p></div>
              </article>
            ))}
          </div>
          <a className="button button--dark" href="#lanzamiento">Avisame del lanzamiento <Arrow /></a>
        </div>
      </section>

      <section aria-labelledby="criteria-title" className="criteria" id="criterios">
        <div className="criteria__heading">
          <p className="section-label">02 · Criterios</p>
          <h2 id="criteria-title">Diseñado desde<br /><em>el terreno.</em></h2>
          <p>Cada decisión empieza con una pregunta simple: ¿ayuda a seguir avanzando?</p>
        </div>
        <article className="criteria-card criteria-card--sage">
          <span className="criteria-card__index">01</span>
          <MountainMark className="criteria-card__mark" />
          <div><h3>Esencial</h3><p>Solo lo necesario. Nada que distraiga del camino.</p></div>
        </article>
        <article className="criteria-card criteria-card--dark">
          <span className="criteria-card__index">02</span>
          <div className="topography" aria-hidden="true"><i /><i /><i /><i /></div>
          <div><h3>Adaptable</h3><p>Un sistema que acompaña distintos cuerpos y ritmos.</p></div>
        </article>
        <article className="criteria-card criteria-card--paper">
          <span className="criteria-card__index">03</span>
          <p className="criteria-card__quote">“La comodidad no se nota. La incomodidad sí.”</p>
          <div><h3>Honesto</h3><p>Materiales visibles, función clara y una estética sin excesos.</p></div>
        </article>
      </section>

      <section aria-labelledby="story-title" className="story" id="historia">
        <div className="story__image">
          <Image alt="Corredora de trail con chaleco verde en un sendero de alta montaña" className="story__photo" fill sizes="(max-width: 760px) 100vw, 52vw" src="/brand/alta-runner.png" />
          <p>Movimiento real · Alta montaña</p>
        </div>
        <div className="story__content">
          <p className="section-label">03 · Territorio</p>
          <h2 id="story-title">Hecho para<br />encontrar<br /><em>tu ritmo.</em></h2>
          <p>No hay una única forma de recorrer la montaña. ALTA acompaña la que elijas, desde el primer ascenso hasta el último tramo de regreso.</p>
          <a className="text-link text-link--light" href="#lanzamiento">Seguí el proyecto <Arrow /></a>
        </div>
      </section>

      <section aria-labelledby="launch-title" className="launch" id="lanzamiento">
        <div className="launch__mark"><MountainMark /></div>
        <div>
          <p className="section-label">Próximamente</p>
          <h2 id="launch-title">La primera huella<br />empieza <em>acá.</em></h2>
        </div>
        <div className="launch__action">
          <p>Sumate para recibir novedades del desarrollo y la fecha de lanzamiento.</p>
          <a className="button button--dark" href="mailto:hola@altatraillab.com?subject=Quiero%20conocer%20ALTA">Quiero recibir novedades <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer">
        <Wordmark />
        <p>Equipamiento para tu próximo sendero.</p>
        <div className="site-footer__links">
          <a href="mailto:hola@altatraillab.com">Contacto</a>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
        <div className="site-footer__legal">
          <span>© 2026 ALTA TRAIL LAB</span>
          <span>Mendoza · Argentina</span>
          <span>El camino se dibuja paso a paso.</span>
        </div>
      </footer>
    </main>
  );
}
