import { News } from './news.js';
import { Observer } from './observer.js';
import { Subject } from './subject.js';

// Implementación de la clase ConcreteSubject
export class NewsChannel implements Subject {
  private subscribers: Observer[] = [];

  attach(observer: Observer): void {
      this.subscribers.push(observer);
  }

  detach(observer: Observer): void {
      const index = this.subscribers.indexOf(observer);
      if (index !== -1) {
          this.subscribers.splice(index, 1);
      }
  }

  notify(news: News): void {
      this.subscribers.forEach(observer => {
          observer.update(news);
      });
  }

  publish(news: News): void {
      this.notify(news);
  }
}