import Image from "next/image";
import {britannic} from '../fonts/fonts.js';

export default function Navbar() {
    return (
      <div className="navBar">
        <div className="imagen">
          <Image src="/fotoAlex.png" width={250} height={250} alt="imagen de Alex"/>
        </div>
          <div className="contacto">
            <h2  className={`${britannic.className}`}>CONTACTO</h2>
            <li>
              <ul>alexggs98@gmail.com</ul>
              <ul>+34608201559</ul>
              <ul>Madrid - España</ul>
            </li>
          </div>
          <div className="enlaces">
          <h2 className={`${britannic.className}`}>ENLACES</h2>
            <li className="lista">
              <ul>
                <a href="https://github.com/Alesssito98" target="_blank"><Image src="/GitHub.png" width={15} height={0} alt="Imagen GitHub"/><u>GitHub</u></a>
              </ul>
              <ul>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHZyUX23vLtcQAAAZM7cOogAnXkAnM4xNNYuC0mF_OuGAvv2uxTHdO3k794YW8npV1vqNXKM0FZs8lshmPKH76Idn-jIO2oN8WPhnPRhXnIaDEGFo0fMjBlNjCLIBVBm0_L3Ho=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Falex-gaggero-susperregui-6124a1175%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app" target="_blank"><Image src="/Linkedin.png" width={15} height={0} alt="Imagen Linkedin"/><u>Linkedin</u></a>
              </ul>
              <ul>
                <a href="https://www.instagram.com/alex_graphics13/o" target="_blank"><Image src="/Instagram.png" width={15} height={0} alt="Imagen Instagram"/><u>Instargram</u></a>
              </ul>
            </li>
          </div>
          <div className="idiomas">
          <h2 className={`${britannic.className}`}>IDIOMAS</h2>
            <li>
              <ul>Español -- Nivel Nativo</ul>
              <ul>Euskera -- Nivel Nativo</ul>
              <ul>Italiano -- Nivel Nativo</ul>
              <ul>Inglés -- Nivel Medio</ul>
            </li>
          </div>
      </div>
    );
  }