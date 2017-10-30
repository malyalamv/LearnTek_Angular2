import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'star-transform',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth = this.rating*86/5;
    }
    onStarClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

}