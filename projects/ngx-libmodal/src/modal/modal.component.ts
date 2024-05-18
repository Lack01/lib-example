import { Component } from '@angular/core';
import { VoidButtonComponent } from '../public-api';

@Component({
  selector: 'ngx-modal',
  standalone: true,
  imports: [VoidButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}
