import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-components/header/header.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { GetStartComponent } from './pages/get-start/get-start.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 0ed5bd8e27a074b467e8e132263b91741bbf62f3
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
