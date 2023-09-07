import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
// import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { TopHeaderComponent } from './top-header/top-header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { SearchComponent } from './container/search/search.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TimerComponent } from './header/timer/timer.component';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { FavIconDirective } from './CustomDirective/fav-icon.directive';
import { DetailcloseDirective } from './CustomDirective/detailclose.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './home/feature/feature.component';
import CartlistComponent from './cart/cartlist/cartlist.component';
import { CartComponent } from './cart/cart.component';

const appRoute : Routes = [
  { path: '', component: HomeComponent},
 { path: 'Product', component: ContainerComponent},
 { path:  'Details',component: ProductDetailComponent},
 { path : 'Contact', component: ContactComponent},
 { path: 'Cart', component:CartComponent},
 { path : 'Home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    SearchComponent,
    ContainerComponent,
    TopHeaderComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    TimerComponent,
    HighlightDirective,
    FavIconDirective,
    DetailcloseDirective,
    HomeComponent,
    FeatureComponent,
    CartlistComponent,
    CartComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // CarouselModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
