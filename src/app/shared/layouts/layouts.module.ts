import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UIModule } from '../../ui/ui.module';
import { RouterModule } from '@angular/router';
import { SlideViewModule } from '../slide-view/slide-view.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UIModule,
    SlideViewModule,
  ],
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class LayoutsModule { }
