import { Injectable } from '@angular/core';
import { ProductDto } from "../dto/product-dto";
import { ResponseDto } from "../dto/response-dto";
import {Observable, map } from "rxjs";
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
      //1- get product data, and store in a string
      //2- map the data with productDto, and store in a list
      //3-
       products?: ProductDto[];
     prodUrl = 'https://dummyjson.com/products/search?limit=12&q=';

  constructor(private http: HttpClient) { }

   searchProduct(search: string): Promise<any>{
   return this.http.get<ResponseDto>(this.prodUrl + search).toPromise();
    }
}
