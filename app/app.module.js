"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var order_list_component_1 = require("./orders/order-list.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var product_service_1 = require("./products/product.service");
var home_component_1 = require("./home/home.component");
var product_detail_component_1 = require("./products/product-detail.component");
var page_notfound_component_1 = require("./shared/page-notfound.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'orders', component: order_list_component_1.OrderListComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: page_notfound_component_1.PageNotfoundComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                product_list_component_1.ProductListComponent,
                order_list_component_1.OrderListComponent,
                product_filter_pipe_1.ProductFilterPipe,
                product_detail_component_1.ProductDetailComponent,
                star_component_1.StarComponent,
                page_notfound_component_1.PageNotfoundComponent
            ],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map