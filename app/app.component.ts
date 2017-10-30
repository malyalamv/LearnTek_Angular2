import {Component} from '@angular/core';

@Component({
    selector:'pm-app',
    template:  `<div>
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand">LearnTek</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><a [routerLink]="['/home']">Home</a></li>
                            <li><a [routerLink]="['/products']">Products</a></li>
                            <li><a [routerLink]="['/orders']">Orders</a></li>
                            
                        </ul>
                        </div>
                    </nav>
                    <div class="container-fluid">
                        <router-outlet></router-outlet>
                    </div>
                </div>`
})

export class AppComponent{

}