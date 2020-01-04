import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { SoyYOComponent } from './soy-yo/soy-yo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MapaComponent } from './mapa/mapa.component';


const routes: Routes = [
  {
    path: 'mapa',
    component: MapaComponent,
    data: { title: 'mapa' }
  },
  {
    path: 'carousel',
    component: CarouselComponent,
    data: { title: 'carousel' }
  },
  {
    path: 'calculadora',
    component: SoyYOComponent,
    data: { title: 'calculadora' }
  },
  {
    path: 'home',
    component: StoreComponent,
    data: { title: 'home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
