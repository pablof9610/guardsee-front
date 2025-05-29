import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dto',
  templateUrl: './card-dto.component.html',
  styleUrls: ['./card-dto.component.scss']
})

export class CardDtoComponent {
  @Input() name: string = '';
  @Input() quantity: number = 0;
  @Input() inStock: number = 0;
  @Input() inUse: number = 0;
  @Input() broken: number = 0;
}
