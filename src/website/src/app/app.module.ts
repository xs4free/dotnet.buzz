import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TimeagoModule } from 'ngx-timeago';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemCommentsComponent } from './itemcomments/itemcomments.component';
import { HomeComponent } from './home/home.component';
import { ItemcreateComponent } from './itemcreate/itemcreate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemlistComponent,
    ItemCommentsComponent,
    HomeComponent,
    ItemcreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TimeagoModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
