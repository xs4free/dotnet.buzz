import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemlistComponent
  ],
  imports: [
    BrowserModule,
    TimeagoModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
