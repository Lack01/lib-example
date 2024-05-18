import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ngx-void-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './void-button.component.html',
  styleUrl: './void-button.component.css'
})
export class VoidButtonComponent {
  @Input()
  text!: string;
  @Input()
  type!: "button";
  @Input()
  btnClass!: string;
}
