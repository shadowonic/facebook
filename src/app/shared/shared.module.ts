import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/material/material.module';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [MaterialModule]
})
export class SharedModule {}
