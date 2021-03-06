import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { Rutas } from '../rutas';

import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashclientComponent } from './dashclient/dashclient.component';
import { MycarsComponent } from './mycars/mycars.component';
import { CarregisterComponent } from './carregister/carregister.component';
import { AutoselectedComponent } from './autoselected/autoselected.component';

import { GenRepComponent } from './gen-rep/gen-rep.component';

import { SolicitudcitaComponent } from './solicitudcita/solicitudcita.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ColacitasComponent } from './colacitas/colacitas.component';
import { RecibirvehiculoComponent } from './recibirvehiculo/recibirvehiculo.component';
import { ModificararchivoComponent } from './modificararchivo/modificararchivo.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SideBarFavComponent } from './side-bar-fav/side-bar-fav.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    ContactoComponent,
    SignUpComponent,
    DashclientComponent,
    MycarsComponent,
    CarregisterComponent,
    AutoselectedComponent,
    GenRepComponent,
    SolicitudcitaComponent,
    PerfilComponent,
    ColacitasComponent,
    RecibirvehiculoComponent,
    ModificararchivoComponent,
    UserManagerComponent,
    UserDetailComponent,
    SideBarFavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Rutas),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
