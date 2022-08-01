import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [ ListComponent ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
		DropdownModule,
		ButtonModule,
    HttpClientModule,
    InputNumberModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
