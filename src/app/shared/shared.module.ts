import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { UIModule } from '../ui/ui.module';
import { SlideViewModule } from './slide-view/slide-view.module';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    LayoutsModule,
    SlideViewModule,
  ],
  declarations: [],
  exports: [
    UIModule,
    LayoutsModule,
    SlideViewModule,
  ]
})
export class SharedModule { }
