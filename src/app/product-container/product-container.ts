import { Component } from '@angular/core';
import { Product } from '../models/common.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../libs/material-module';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-product-container',
  imports: [CommonModule, MaterialModule, RouterOutlet, RouterLink],
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
