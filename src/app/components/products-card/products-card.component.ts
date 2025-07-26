import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { products } from 'src/app/const/products';
import { Iproduct } from 'src/app/models/product.interface';


@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  @Input() productCard !: Iproduct;
   productArr : Array<Iproduct> = products;

  constructor()
   { }


  onLike(eve : any){
   eve.target.classList.toggle('text-danger')
  }

  ngOnInit(): void {
  }

}
