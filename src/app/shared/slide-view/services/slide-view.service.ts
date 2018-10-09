import {
  ApplicationRef,
  ComponentFactoryResolver, ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import { SlideViewWrapperComponent } from '../components/slide-view-wrapper/slide-view-wrapper.component';

export interface ISlideViewConfig {
  id?: string;
  data?: any;
}

export const DEFAULT_SLIDE_VIEW_CONFIG: ISlideViewConfig = {
  id: '1',
  data: null
};

@Injectable({
  providedIn: 'root'
})
export class SlideViewService {

  views: ComponentRef<SlideViewWrapperComponent<any>>[] = [];

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  getViewById(id: string): ComponentRef<SlideViewWrapperComponent<any>> | undefined {
    return this.views.find(dialog => dialog.instance.id === id);
  }

  private createSlideViewWrapperRef(): ComponentRef<SlideViewWrapperComponent<any>> {
    return this.componentFactoryResolver
      .resolveComponentFactory(SlideViewWrapperComponent)
      .create(this.injector);
  }

  open(component: any, config: ISlideViewConfig) {

    config = {...DEFAULT_SLIDE_VIEW_CONFIG, ...config};

    if (this.getViewById(config.id)) {
      throw Error(`Slide View with id "${config.id}" exists already. The Slide View id must be unique.`);
    }

    const wrapperRef = this.createSlideViewWrapperRef();

    wrapperRef.instance.id = config.id;
    wrapperRef.instance.content = component;
    wrapperRef.instance.wrapperRef = wrapperRef;

    this.views.push(wrapperRef);
    this.appRef.attachView(wrapperRef.hostView);
    const domElem = (wrapperRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.querySelector('[appslideviewcontainer]').appendChild(domElem);
  }
}
