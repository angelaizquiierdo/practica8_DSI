import  {Observer} from './observer.js';
import { News } from './news.js';



// Implementación de la clase ConcreteObserver
export class Subscriber implements Observer {
  update(news: News): void {
      console.log("Noticia recibida:", news);
  }
}