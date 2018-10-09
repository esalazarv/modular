import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import { TestComponent } from './components/test/test.component';
import { OtherComponentComponent } from './components/other-component/other-component.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ],
  declarations: [
    ProfilePageComponent,
    TestComponent,
    OtherComponentComponent
  ],
  entryComponents: [
    TestComponent,
    OtherComponentComponent
  ]
})
export class UserModule { }
