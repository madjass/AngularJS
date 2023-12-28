import { ProductDto } from "../dto/product-dto";

export class ResponseDto {
  limit?:number;
  products?: ProductDto[];

}
