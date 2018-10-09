import {Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild} from '@angular/core';
import {SlideViewMainContentDirective} from '../../directives/slide-view-main-content.directive';

@Component({
  selector: 'app-slide-view-wrapper',
  templateUrl: './slide-view-wrapper.component.html',
  styleUrls: ['./slide-view-wrapper.component.scss']
})
export class SlideViewWrapperComponent<T> implements OnInit {

  id: string;
  content: Type<T>;
  wrapperRef: ComponentRef<SlideViewWrapperComponent<T>>;
  @ViewChild(SlideViewMainContentDirective) body: SlideViewMainContentDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.content);
    this.body.viewContainerRef.createComponent(componentFactory);
  }

  close() {
    console.log('error');
  }

}
