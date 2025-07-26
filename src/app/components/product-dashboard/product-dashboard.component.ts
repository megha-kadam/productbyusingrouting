import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/const/products';
import { Iproduct } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productArr : Array<Iproduct> = products;

  constructor() { }

  ngOnInit(): void {
  }

}
