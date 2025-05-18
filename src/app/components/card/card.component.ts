import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() name: string = '';
  @Input() quantity: string = '';
  @Input() ticket: string = '';
  @Input() icon: string = '';
}
