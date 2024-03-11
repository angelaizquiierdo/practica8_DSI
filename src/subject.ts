import { Observer } from './observer.js';
import { News } from './news.js';

// Definición de la interfaz Subject
export interface Subject {
  attach(observer: Observer): void; // Método para suscribir un observador al sujeto
  detach(observer: Observer): void; // Método para eliminar la suscripción de un observador al sujeto
  notify(news: News): void; // Método para notificar a todos los observadores cuando se publica una noticia
}