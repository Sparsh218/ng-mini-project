import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { authGuard } from './auth/auth.guard';
import { RecipeHomeComponent } from './recipe/components/recipe-home/recipe-home.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingHomeComponent } from './shopping/components/shopping-home/shopping-home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: "auth",
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule)
  },
  {
    path: "recipe",
    component: RecipeHomeComponent,
    canActivate: [authGuard]
  },
  {
    path: "shopping",
    component: ShoppingHomeComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
