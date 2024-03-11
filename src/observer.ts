 import { News } from './news.js';

// Definición de la interfaz Observer
export interface Observer {
  update(news: News): void; // Método para actualizar el observador cuando se publica una noticia
}