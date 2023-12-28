import { Component, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductDto } from "../dto/product-dto";
import { ResponseDto } from "../dto/response-dto";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
    searchInput:string = '';
    products?: ProductDto[];
    displayMsg = 'Product Not Available';
    isSuccess = true;

constructor(private prodSvc: ProductService, private detect: ChangeDetectorRef ){
}

async search(){
  if (this.searchInput !== ''){
  let data = await this.prodSvc.searchProduct(this.searchInput);
  let resDto: ResponseDto = Object.assign(new ResponseDto, data );
  this.products = resDto?.products;
  this.isSuccess = (this.products?.length === 0 ? false : true);
  this.detect.detectChanges();
  }
}
}
