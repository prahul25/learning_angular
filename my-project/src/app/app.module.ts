import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/header/search/search.component';
import { FormsModule} from '@angular/forms';
import { ProductlistComponent } from './component/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SearchComponent,
    ProductlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
