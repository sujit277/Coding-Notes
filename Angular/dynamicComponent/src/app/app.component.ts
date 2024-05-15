import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PlaceholderDirective } from './placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamicComponent';
  @ViewChild(PlaceholderDirective) alertHost!: PlaceholderDirective;
  subscription = new Subscription();

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {}

  createComponent() {
    const componentFactory =
      this.ComponentFactoryResolver.resolveComponentFactory(DynamicComponent);
    this.alertHost.ViewContainerRef.clear();
    const componentRef =
      this.alertHost.ViewContainerRef.createComponent(componentFactory);
    componentRef.instance.company = 'Microsoft';
    componentRef.instance.ctc = '50LPA';
    componentRef.instance.salary = '250000';
    this.subscription = componentRef.instance.close.subscribe(() => {
      this.subscription.unsubscribe();
      this.alertHost.ViewContainerRef.clear();
    });
  }
}
