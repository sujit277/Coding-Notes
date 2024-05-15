import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrls: ['./each-product.component.css'],
})
export class EachProductComponent implements OnInit {
  productName!: any;
  productType!: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.productName = params.get('product');
      this.productType = params.get('type');
      console.log(params);
    });
  }
}
