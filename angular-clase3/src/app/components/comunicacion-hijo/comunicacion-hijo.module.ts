import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionHijoRoutingModule } from './comunicacion-hijo-routing.module';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HijoComponent
  ],
  imports: [
    CommonModule,
    ComunicacionHijoRoutingModule,
    FormsModule
  ],
  exports: [ HijoComponent ]
})
export class ComunicacionHijoModule { }
