 import { News } from './news.js';

/**
 * Interfaz que define el comportamiento de un observador
 * @member update Método para actualizar el observador cuando se publica una noticia
 */
export interface Observer {
  update(news: News): void;
}