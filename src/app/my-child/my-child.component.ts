import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-child',
  standalone: true,
  imports: [],
  templateUrl: './my-child.component.html',
})
export class MyChildComponent {
  @Input() receiveData: string = '';
  @Input() objData: Object = {};
}
