import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  imageWidth: number = 40;
  imageMargin: number = 2;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2019',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    };
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
