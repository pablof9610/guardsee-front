import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dto',
  templateUrl: './card-dto.component.html',
  styleUrl: './card-dto.component.scss'
})

export class CardDtoComponent {
  @Input() name: string = '';
  @Input() quantity: string = '';
}
