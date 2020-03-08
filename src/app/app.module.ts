import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-components/header/header.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { GetStartComponent } from './pages/get-start/get-start.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
<<<<<<< HEAD
import { SidenavComponent } from './page-components/navigation/sidenav/sidenav.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> added ngbootstrap and Ng install

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GetStartComponent,
    NotFoundComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
