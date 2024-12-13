import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeHomeComponent } from './recipe/components/recipe-home/recipe-home.component';
import { HomeComponent } from './home/home.component';
import { ShoppingHomeComponent } from './shopping/components/shopping-home/shopping-home.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHomeComponent,
    HomeComponent,
    ShoppingHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
