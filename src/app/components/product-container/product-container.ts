import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Product } from '@app/models/common.model';
import { MaterialModule } from '@app/libs/material-module';

@Component({
  selector: 'app-product-container',
  imports: [CommonModule, RouterOutlet, RouterLink, MaterialModule],
  templateUrl: './product-container.html',
  styleUrl: './product-container.scss',
})
export class ProductContainer {
  public products: Array<Product> = [
    { name: 'Laptop', stock: 5, price: 32000 },
    { name: 'Mouse', stock: 0 , price: 1800 },
    { name: 'Keyboard', stock: 12, price: 1200 },
  ];
}
