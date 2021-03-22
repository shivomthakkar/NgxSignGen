import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

declare var require: any;
const TextSignature = require('text-signature');

@Directive({
  selector: '[signGenSrc]'
})
export class SignGenDirective implements OnChanges {

  @Input() signGenSrc = '';
  @Input() signGenConfig: any = {
    width: 300,
    height: 150,
    paddingX: 100,
    paddingY: 50,
    font:  ["50px", "'Homemade Apple'"],
    color: "blue",
    customFont: { 
      name: "'Homemade Apple'", 
      url: "http://fonts.googleapis.com/css?family=Homemade+Apple"  
    }
  };

  @Output() signGenImg = new EventEmitter<string>(true);

  txtGenInstance: any;

  constructor(private contentElementRef: ElementRef) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.signGenConfig['textString'] = this.signGenSrc;
    this.signGenConfig['canvasTargetDom'] = this.contentElementRef.nativeElement;

    if (this.signGenSrc != '') {
      if (!this.txtGenInstance) {
        this.txtGenInstance = new TextSignature(this.signGenConfig);
      }
      this.txtGenInstance.generateImage(this.signGenConfig);
      this.signGenImg.emit(this.txtGenInstance.getImageData());
    } else {
      this.signGenImg.emit('data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
    }
  }
}
