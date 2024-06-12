import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyParentComponent } from './my-parent/my-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MyParentComponent],
  template: `
    <app-my-parent></app-my-parent>
  `,
})
export class AppComponent {
  title = 'parent-child-signals';
}
