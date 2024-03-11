/**
 * Interface for observable classes
 */
interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

/**
 * Interface for observer classes
 */
interface Observer {
  update(observable: Observable): void;
}

enum ButtonClickEventType {'NO_EVENT', 'LEFTCLICK', 'RIGHTCLICK', 'CENTERCLICK'};

/**
 * Class Button that implements the Observable interface, i.e.,
 * Button objects can be observed
 */
export class Button implements Observable {
  private observers: Observer[] = [];

  private eventType: ButtonClickEventType = ButtonClickEventType.NO_EVENT;

  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEventType() {
    return this.eventType;
  }

  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  onLeftClick() {
    this.eventType = ButtonClickEventType.LEFTCLICK;
    this.notify();
  }
  
  onRightClick() {
    this.eventType = ButtonClickEventType.RIGHTCLICK;
    this.notify();
  }
  onCenterClick() {
    this.eventType = ButtonClickEventType.CENTERCLICK;
    this.notify();
  }
}

/**
 * Class ButtonObserver that implements the interface Observer, i.e.,
 * it is able to observe other objects
 */
export class ButtonObserver implements Observer {
  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  update(observable: Observable) {
    if (observable instanceof Button) {
      switch(observable.getEventType()) {
        case ButtonClickEventType.LEFTCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                      `and I have observed that Button ${observable.getName()} ` +
                      `was left-clicked with the mouse`);
          break;
        case ButtonClickEventType.RIGHTCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                      `and I have observed that Button ${observable.getName()} ` +
                      `was right-clicked with the mouse`);
          break;
        case ButtonClickEventType.CENTERCLICK:
          console.log(`I am a ButtonObserver called ${this.name} ` +
                      `and I have observed that Button ${observable.getName()} ` +
                      `was center-clicked with the mouse`);
          break;
      }
    }
  }
}

// Client code
const myButton = new Button(0, 'myButton');
const firstButtonObserver = new ButtonObserver(0, 'firstButtonObserver');
const secondButtonObserver = new ButtonObserver(1, 'secondButtonObserver');

console.log('firstButtonObserver subscription');
myButton.subscribe(firstButtonObserver);

console.log('secondButtonObserver subscription');
myButton.subscribe(secondButtonObserver);

try {
  myButton.subscribe(secondButtonObserver);
} catch (error) {
  console.log('secondButtonObserver was already subscribed');
}

console.log('myButton left click');
myButton.onLeftClick();

console.log('firstButtonObserver unsubscription');
myButton.unsubscribe(firstButtonObserver);

console.log('myButton right click');
myButton.onRightClick();
console.log('myButton center click');
myButton.onCenterClick();
