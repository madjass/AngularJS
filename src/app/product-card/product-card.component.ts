import { Component, Input  } from '@angular/core';
import { ProductDto } from "../dto/product-dto";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

 @Input() product?: ProductDto;


}
