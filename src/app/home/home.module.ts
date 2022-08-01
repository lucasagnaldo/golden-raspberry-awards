import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
