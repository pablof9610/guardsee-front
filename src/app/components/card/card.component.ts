import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../models/product";

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
  @Input() ticket: string | undefined = '';
  @Input() state: string | undefined = '';

  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<string>();

  defineClass(){
    switch (this.state?.toLowerCase()) {
      case 'em uso':
        return 'u';
      case 'em estoque':
        return 's';
      case 'obsolescencia':
        return 'o';
      default:
        return 'no-match';
    }
  }

  onEdit() {
    const product: Product = {
      name: this.name,
      vendor: this.vendor,
      model: this.model,
      serialNumber: this.serialNumber,
      detail: this.detail,
      ticket: this.ticket,
      state: this.state
    }

    this.edit.emit(product);
  }

  onDelete() {
    this.delete.emit(this.serialNumber);
  }
}
