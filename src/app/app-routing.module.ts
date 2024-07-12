import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  { path: 'classes', loadChildren: () => import('./classes/classes.module').then((m) => m.ClassesModule) },
  { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule) },
  { path: 'rules', loadChildren: () => import('./rules/rules.module').then((m) => m.RulesModule) },
  { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule) },
  // { path: '', component: MainComponent },
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)  },
  // { path: '**', component: NotFoundComponent },
  { path: '**', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
