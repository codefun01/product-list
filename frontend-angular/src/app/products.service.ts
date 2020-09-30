import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_LIST_API_URL } from 'src/constant/api.endpoint.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<any>{
    return this.httpClient.get(PRODUCT_LIST_API_URL);
  }
}