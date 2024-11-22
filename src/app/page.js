import {britannic} from './fonts/fonts.js';

export default function Home() {
  return (
    <div className="contenido">
      <header>
        <h1 className={`titulo ${britannic.className}`}>Alex Gaggero</h1>
        <p>Desarrollador de aplicaciones web</p>
      </header>
      <div className='curriculum'>
        <p>Estudiante de diseño de aplicaciones web en busca de prácticas donde poner a prueba los conocimientos adquiridos en un entorno laboral.</p>
        <h2 className={`${britannic.className}`}>ESTUDIOS PROFESIONALES</h2>
        <p>Grado Superior en Diseño de Aplicaciones Web (2025) en <a href='https://u-tad.com/' target="_blank">U-Tad</a>. <a href='https://www.ucjc.edu/' target="_blank">Universidad Camilo José Cela</a>.<br/><br/>
        Doble grado en Publicidad y Relaciones Públicas & Diseño digital y Multimedia (En curso) en <a href='https://www.nebrija.com/' target="_blank">Universidad Antonio de Nebrija</a>.</p>
        <h2 className={`${britannic.className}`}>CONOCIMIENTOS</h2>
        <p>Java, JavaScript, TypeScript, PHP, HTML5, CSS, Boostrap, Tailwind, Materialize, Angular, React, Next, Astro, Wordpress, MySQL, Oracle SQL, MongoDB, MariaDB, Git, Maven, Apache, Nginx, Docker, Windows, MacOS, Linux.<br/><br/>
        Photoshop, Ilustrator, Animate, Indesing, Maya.</p>
        <h2 className={`${britannic.className}`}>EXPERIENCIA</h2>
        <p className="curriculumFin">Coordinador de equipos de relaciones públicas y organización de eventos de la discoteca <a href='https://reservas.tiffanystheclub.com/es/' target="_blank">Tiffany’s</a> (2019-2020).<br/><br/>
        Diseñador de la portada de la canción '<a href='https://open.spotify.com/intl-es/track/7ws1gCgh5eW0LIFvcaVXiP?si=98f3cabb6ce24732' target="_blank">As de Picas</a>' de <a href='https://open.spotify.com/intl-es/artist/73TRkINpTWLP5i1ymnwpil?si=5Va_IzwFQnOKn9IQM9Pugw' target="_blank">Rodry</a>.</p>
      </div>
    </div>
  );
}
