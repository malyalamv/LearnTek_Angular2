import {Component} from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent {
    pageTitle:string = "Product List"
    listFilter:String =""
    showImage:boolean=true
    showGrid:boolean=true;
    showList:boolean=false;
    imageWidth:number=40
    errorMessage:string
    products:Iproduct[] ;

    constructor(private  _productService:ProductService){

    }

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
        console.log("<<<<<<<<<   From ngOnInit  >>>>>>>>>>>")
        this._productService.getProducts()
            .subscribe(products=>this.products=products, 
               error=> this.errorMessage= <any>error );
    }

    onRatingClicked(message:string):void{
        this.pageTitle='Product List'+message;
    }

    toggleGrid():void{
        this.showGrid = !this.showGrid;
        this.showList = !this.showList;
    }
}