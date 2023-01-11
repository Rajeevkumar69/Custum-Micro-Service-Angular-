import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
     selector: 'app-add-products',
     templateUrl: './add-products.component.html',
     styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
     public productsForm: FormGroup;
     public products: any[] = [];

     constructor(private _router: Router) {}

     ngOnInit(): void {
          this.createProductsForm();
          this.getProducts();
     }

     public getProducts() {
          let allProducts = localStorage.getItem('CMSProducts');

          if (allProducts) {
               this.products = JSON.parse(allProducts);
          }
     }

     public createProductsForm() {
          this.productsForm = new FormGroup({
               productName: new FormControl('', [Validators.required]),
               productImage: new FormControl('', [Validators.required]),
               productDescription: new FormControl('', [Validators.required]),
               productRating: new FormControl('', [Validators.required])
          });
     }

     public addProducts() {
          console.log(this.productsForm.value);
          let newProduct = this.productsForm.value;
          this.products.push(newProduct);
          let stringifyedProducts = JSON.stringify(this.products);

          localStorage.setItem('CMSProducts', stringifyedProducts);
          this._router.navigateByUrl('/cms-products');
     }
     get productName() {
          return this.productsForm.get('productName');
     }
     get productImage() {
          return this.productsForm.get('productImage');
     }
     get productDescription() {
          return this.productsForm.get('productDescription');
     }
     get productRating() {
          return this.productsForm.get('productRating');
     }
}
