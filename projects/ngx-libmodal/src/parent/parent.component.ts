import { Component } from '@angular/core';
import { VoidButtonComponent } from '../void-button/void-button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'ngx-parent',
  standalone: true,
  imports: [VoidButtonComponent, ModalComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
