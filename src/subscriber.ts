import  {Observer} from './observer.js';
import { News } from './news.js';

/**
 * Clase que representa a un suscriptor
 * @member update Método que se ejecuta cuando se publica una noticia
 */
export class Subscriber implements Observer {
  update(news: News): void {
    console.log("Noticia recibida:", news);
  }
}