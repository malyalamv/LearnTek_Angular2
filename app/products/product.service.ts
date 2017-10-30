import {Injectable} from '@angular/core';
import {Iproduct} from './product';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService{
    private _productUrl = 'api/products/products.json';

    constructor(private _http:Http){

    }

    getProducts():Observable<Iproduct[]>{
        return this._http.get(this._productUrl)
        .map((response:Response)=><Iproduct[]>response.json())
        .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw(error.json()||'Service Error');
    }
}