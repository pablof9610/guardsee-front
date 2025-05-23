import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() name: string = '';
  @Input() vendor: string = '';
  @Input() model: string = '';
  @Input() serialNumber: string = '';
  @Input() detail: string = '';
}
