import {Component, TemplateRef, ViewChild, ViewContainerRef} from "@angular/core";

@Component({
  selector: 'comp-unwrap-speech',
  template: '<ng-template #unwrap><button ion-button icon-end color="secondary">Unwrap<ion-icon name="mic-off"></ion-icon></button></ng-template>'
 })
export class SpeechUnwrapComponent {
  @ViewChild('unwrap') template: TemplateRef<any>;

  constructor(private vcRef: ViewContainerRef) {}

  ngOnInit() {
    this.vcRef.createEmbeddedView(this.template);
  }
}
