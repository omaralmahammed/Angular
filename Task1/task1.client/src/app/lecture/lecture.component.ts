import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {

  Number1 : number = 10

  dateToday: number =  Date.now();

  role: string = "superAdmin"



  items: string[] = ['Angular', 'React', 'Vue', 'Svelte', 'Ember'];

  state1: object = { name: 'James', age: 33 };
  state2: object = { name: 'Anna', age: 27 };

  store = new BehaviorSubject(this.state1);

  nameVal: string;
  constructor() {
    const currentState = this.store.getValue();
    this.nameVal = (currentState as any).name;
  }
}
