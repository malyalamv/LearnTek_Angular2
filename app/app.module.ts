import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { OrderListComponent } from './orders/order-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { PageNotfoundComponent } from './shared/page-notfound.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {path:'orders', component:OrderListComponent},
      {path:'home', component:HomeComponent},
      {path:'product/:id', component:ProductDetailComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'**', component:PageNotfoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    OrderListComponent, 
    ProductFilterPipe,
    ProductDetailComponent, 
    StarComponent,
    PageNotfoundComponent
  ],
  providers: [ProductService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
