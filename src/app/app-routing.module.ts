import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { authGuard } from './auth/auth.guard';
import { RecipeHomeComponent } from './recipe/components/recipe-home/recipe-home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [authGuard]
  },
  {
    path: "auth",
    component: AuthComponent
  },
  {
    path: "recipe",
    component: RecipeHomeComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
