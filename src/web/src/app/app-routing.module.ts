import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app-guard.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./joke/joke.module').then(m => m.JokeModule),
    canActivate: [AppGuard]
  },
  {
    path: '',
    redirectTo: "app",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
