import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FirebaseService } from './services/firebase.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewsComponent } from './components/news/news.component';
import { HumanitarianDepartureComponent } from './components/humanitarian-departure/humanitarian-departure.component';
import { CharityFundraiserComponent } from './components/charity-fundraiser/charity-fundraiser.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    PartnersComponent,
    ProjectsComponent,
    ContactsComponent,
    NotFoundComponent,
    AdminComponent,
    NewsComponent,
    HumanitarianDepartureComponent,
    CharityFundraiserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
