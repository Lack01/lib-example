import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent, VoidButtonComponent, ModalComponent} from '../../../ngx-libmodal/src/public-api';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent,VoidButtonComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
