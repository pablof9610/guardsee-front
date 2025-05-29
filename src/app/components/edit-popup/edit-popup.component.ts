import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss'],
  animations: [
    trigger('popupAnim', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(30px)', opacity: 0 }))
      ])
    ])
  ]
})
export class EditPopupComponent {
  @Input() product!: Product;
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  updatedProduct!: Product;
  vendors: string[] = [];
  models: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updatedProduct = { ...this.product };
  }

  loadDropDownData() {
    this.http.get('../../../assets/vendors.txt', {responseType: 'text'})
      .subscribe(data => this.vendors = data.split('\n').map(v => v.trim()).filter(Boolean));

    this.http.get('/assets/models.txt', {responseType: 'text'})
      .subscribe(data => this.vendors = data.split('\n').map(v => v.trim()).filter(Boolean))
  }

  onSave() {
    this.save.emit(this.updatedProduct);
  }

  onCancel() {
    this.cancel.emit();
  }
}
