import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { SlideViewContainerDirective } from '../directives/slide-view-container.directive';

@Injectable({
  providedIn: 'root'
})
export class SlideViewService {
  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  open(component: any) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.
    console.log('OK en service');
  }
}
