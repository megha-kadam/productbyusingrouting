import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector : '[showNavbar]'
})
export class ShowNavbarDirective{
    constructor(
        private _ele : ElementRef,
        private _render : Renderer2
    ){}

    isShow : boolean = false;

    @HostListener('click') 
    onShow(){
        if(!this.isShow){
            this._render.addClass(this._ele.nativeElement.nextElementSibling, 'show')
        }else{
             this._render.removeClass(this._ele.nativeElement.nextElementSibling, 'show')
        }
    }

}