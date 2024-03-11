import { Observer } from './observer.js';
import { News } from './news.js';

/**
 * Interfaz que define el comportamiento de un sujeto
 * @member attach Método para suscribir un observador al sujeto
 * @member detach Método para eliminar la suscripción de un observador al sujeto
 * @member notify Método para notificar a todos los observadores cuando se publica una noticia
 */
export interface Subject {
  attach(observer: Observer): void; 
  detach(observer: Observer): void; 
  notify(news: News): void; 
}