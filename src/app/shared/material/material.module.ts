import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule
} from '@angular/material';

const modules = [MatButtonModule, MatTooltipModule, MatIconModule,  MatCardModule,
  MatSelectModule];

@NgModule({
  declarations: [],
  exports: [modules]
})
export class MaterialModule {}
