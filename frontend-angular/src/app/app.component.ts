import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-angular';

  products = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    });
  }
}
