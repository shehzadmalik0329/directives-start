import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgunless]'
})
export class NgunlessDirective {
  @Input() set appNgunless(condition: boolean) {
    if(!condition){ //false condition
      this.vcRef.createEmbeddedView(this.tempRef);
    }
    else{ //true condition
      this.vcRef.clear();
    }
  }

  constructor(private tempRef: TemplateRef<any>,private vcRef: ViewContainerRef) { }

}
