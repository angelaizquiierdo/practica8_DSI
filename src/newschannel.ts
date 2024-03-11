import { News } from './news.js';
import { Observer } from './observer.js';
import { Subject } from './subject.js';

/**
 * Clase que representa un canal de noticias
 * @member attach Método para suscribir un observador al canal
 * @member detach Método para eliminar la suscripción de un observador al canal
 * @member notify Método para notificar a todos los observadores cuando se publica una noticia  
 * @member publish Método para publicar una noticia
 */

export class NewsChannel implements Subject {
  private subscribers: Observer[] = [];

  /**
   * Suscribe un observador al canal
   * con metodo push() añadimos el observador al array de suscriptores
   * @param observer 
   */
  attach(observer: Observer): void {
    this.subscribers.push(observer);
  }
  /**
   * Elimina la suscripción de un observador al canal
   * con el método splice() eliminamos el observador del array de suscriptores
   * @param observer 
   */
  detach(observer: Observer): void {
      const index = this.subscribers.indexOf(observer);
      if (index !== -1) {
          this.subscribers.splice(index, 1);
      }
  }

    /**
     * Notifica a todos los observadores cuando se publica una noticia
     * con el método forEach() recorremos el array de suscriptores y llamamos al método update() de cada observador
     * @param news 
     */
  notify(news: News): void {
      this.subscribers.forEach(observer => {
          observer.update(news);
      });
  }

    /**
     * Publica una noticia
     * llamamos al método notify() para notificar a todos los observadores
     * @param news 
     */
  publish(news: News): void {
      this.notify(news);
  }
}