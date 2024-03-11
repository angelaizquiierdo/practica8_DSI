import "mocha";
import { expect } from "chai";

import { NewsChannel } from "../src/newschannel.ts";
import { News } from "../src/news.ts";
import { Subscriber } from "../src/subscriber.ts";


describe('Observer Pattern', () => {
    it('Should notify subscribers when a news is published', () => {
        // Crear instancia del sujeto (Canal de noticias)
        const newsChannel = new NewsChannel();

        // Crear instancias de observadores (Suscriptores)
        const subscriber1 = new Subscriber();
        const subscriber2 = new Subscriber();

        // Suscribir observadores al sujeto
        newsChannel.attach(subscriber1);
        newsChannel.attach(subscriber2);

        // Publicar una noticia
        const news = new News("Título de la noticia", "Contenido de la noticia");
        newsChannel.publish(news);
        
    });
});