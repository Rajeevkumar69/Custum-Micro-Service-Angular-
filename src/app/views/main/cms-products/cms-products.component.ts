import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
     selector: 'app-cms-products',
     templateUrl: './cms-products.component.html',
     styleUrls: ['./cms-products.component.scss']
})
export class CmsProductsComponent implements OnInit {
     public viewProduct: boolean = true;
     public addProduct: boolean = false;
     public products: any[] = [];
     public productsForm: FormGroup;

     constructor() {}

     ngOnInit(): void {
          this.createProductForm();
          this.getProducts();
     }
     public getProducts() {
          let allProducts = localStorage.getItem('CMSProducts');

          if (allProducts) {
               this.products = JSON.parse(allProducts);
          }
     }

     //      public togglePage(pageName: string) {
     //           if (pageName == 'ViewPage') {
     //                this.viewProduct = true;
     //                this.addProduct = false;
     //           } else {
     //                this.viewProduct = false;
     //                this.addProduct = true;
     //           }
     //      }
     public createProductForm() {
          this.productsForm = new FormGroup({
               productName: new FormControl('', [Validators.required]),
               description: new FormControl('', [Validators.required]),
               rating: new FormControl('', [Validators.required]),
               productImage: new FormControl('', [Validators.required])
          });
     }

     addProducts() {
          console.log(this.productsForm.value);
          let newProduct = this.productsForm.value;
          this.products.push(newProduct);
          let stringifyedProducts = JSON.stringify(this.products);
          localStorage.setItem('CMSProducts', stringifyedProducts);
          this.productsForm.reset();
          //   this.togglePage('ViewPage');
     }

     public removeProduct(productId: any) {
          let remove = this.products.splice(productId, 1);
          let stringifyedProducts = JSON.stringify(this.products);
          localStorage.setItem('CMSProducts', stringifyedProducts);

          // console.log(productId);
     }
}
