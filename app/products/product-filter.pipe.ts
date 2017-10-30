import {Pipe,PipeTransform} from '@angular/core';
import { Iproduct } from './product';

@Pipe({
    name:'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
    transform(value:Iproduct[], filterBy:string):Iproduct[]{
        filterBy = filterBy?filterBy.toLowerCase():null;

        return filterBy ? value.filter((product:Iproduct)=>
            product.productName.toLowerCase().indexOf(filterBy)!==-1,
            console.info('Test custom pipe')
        ):value;
    }

}