import {britannic} from '../fonts/fonts.js';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Aside() {
    return (
      <div className="aside">
        <Card>
          <CardHeader>
            <CardTitle className={`${britannic.className}`}>CONTACTO RÁPIDO</CardTitle>
            <CardDescription>Para contactar puede enviar un correo desde formulario facilitado aquí abajo.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="https://formspree.io/f/xzzbvlzn" method="POST" encType="multipart/form-data">
              <label>Introduzca su dirección de email:</label><br/>
              <input type="email" name="email"/><br/>
              <label>Mensaje:</label><br/>
              <textarea name="message"></textarea><br/>
              <button type="submit">Enviar</button>
            </form>
          </CardContent>
          <CardFooter>
            <p>Gracias por su tiempo.</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={`${britannic.className}`}>DESCARGAR CURRÍCULUM</CardTitle>
            <CardDescription>Para descargar el currículum haga clic en cualquiera de los siguientes enlaces.</CardDescription>
          </CardHeader>
          <CardContent>
            <p><a href='./curriculum-AlexGaggero.pdf' download="curriculum-AlexGaggero.pdf">Currículum PDF</a></p>
            <p><a href='./curriculum-AlexGaggero-Imprimir.pdf' download="curriculum-AlexGaggero-Imprimir.pdf">Currículum Para imprimir</a></p>
          </CardContent>
        </Card>
      </div>
    );
  }