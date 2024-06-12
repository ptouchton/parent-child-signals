import { Component, Signal, signal } from '@angular/core';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
  selector: 'app-my-parent',
  standalone: true,
  imports: [[MyChildComponent]],
  templateUrl: './my-parent.component.html',
})
export class MyParentComponent {
  name =  signal('');

  show(e: any) {
    let { value } = e.target;
    this.name.set(value)
  }
  names = ['Apple', 'Mango', 'Gova', 'Pineapple', 'Banana'];
}
