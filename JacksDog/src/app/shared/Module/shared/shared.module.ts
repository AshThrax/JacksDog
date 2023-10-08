import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
/**
 * module dédié a l'export des modules commun a l'application angular
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
