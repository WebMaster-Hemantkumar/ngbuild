import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatIconModule} from '@angular/material/icon';

const mataerial=[
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
]
@NgModule({
 
  imports: [
    mataerial
  ],
 exports: [mataerial
    
  ]
})
export class MaterialModule { }
