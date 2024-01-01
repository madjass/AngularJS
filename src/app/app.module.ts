import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { ProductService } from './service/product.service';
import { CrawlComponent } from './crawl/crawl.component';
import { TextBarComponent } from './text-bar/text-bar.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from  '@angular/common/http';
import { AccountComponent } from './account/account.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrawlComponent,
    TextBarComponent,
    DeckComponent,
    CardComponent,
    SearchComponent,
    ProductCardComponent,
    MainComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,ProductService, {provide:LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
