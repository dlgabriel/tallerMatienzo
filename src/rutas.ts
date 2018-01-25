import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { ContactoComponent } from './app/contacto/contacto.component';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { DashclientComponent } from './app/dashclient/dashclient.component';
import { MycarsComponent } from './app/mycars/mycars.component'; 
import { AutoselectedComponent } from './app/autoselected/autoselected.component';
import { CarregisterComponent } from './app/carregister/carregister.component';
import { SolicitudcitaComponent } from './app/solicitudcita/solicitudcita.component';
import { PerfilComponent } from './app/perfil/perfil.component';
import { GenRepComponent } from './app/gen-rep/gen-rep.component';
import { RecibirvehiculoComponent } from './app/recibirvehiculo/recibirvehiculo.component';
import { ModificararchivoComponent } from './app/modificararchivo/modificararchivo.component';
import { ColacitasComponent } from './app/colacitas/colacitas.component';


export const Rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'equipo', component: AboutUsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'dashclient', component: DashclientComponent },
  { path: 'mycars', component: MycarsComponent },
  { path: 'autoselected', component: AutoselectedComponent },
  { path: 'carregister', component: CarregisterComponent },
  { path: 'solicitudcita', component: SolicitudcitaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'reportes', component: GenRepComponent },
  { path: 'recibirvehiculo', component: RecibirvehiculoComponent },
  { path: 'modificararchivo', component: ModificararchivoComponent },
  { path: 'colacitas', component: ColacitasComponent },
];
