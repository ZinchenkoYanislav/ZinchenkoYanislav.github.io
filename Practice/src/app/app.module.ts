import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { LogoComponent } from './top/logo/logo.component';
import { NavComponent } from './top/nav/nav.component';
import { CarouselComponent } from './top/carousel/carousel.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LogoComponent,
    NavComponent,
    CarouselComponent,
    SearchProductComponent,
    NavLeftComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
