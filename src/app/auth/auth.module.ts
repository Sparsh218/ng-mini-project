import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthComponent],
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers: [AuthService],
})
export class AuthModule {}
