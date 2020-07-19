import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemCommentsComponent } from './itemcomments/itemcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemlistComponent,
    ItemCommentsComponent
  ],
  imports: [
    BrowserModule,
    TimeagoModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
