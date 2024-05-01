import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Directive({
    selector: '[appTypewriter]'
})
export class TypewriterDirective implements OnChanges {
    @Input('appTypewriter') text: string = '';
    @Input() delay: number = 50;

    private parsedHtml: string = '';

    constructor(private el: ElementRef, private markdownService: MarkdownService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['text']) {
            this.el.nativeElement.innerHTML = '';
            this.parsedHtml = this.markdownService.parse(changes['text'].currentValue);
            this.typewriterEffect();
        }
    }

    typewriterEffect() {
        let i = 0;
        const typing = () => {
            if (i < this.parsedHtml.length) {
                const currentHtml = this.parsedHtml.slice(0, i + 1);
                this.el.nativeElement.innerHTML = currentHtml;
                i++;
                setTimeout(typing, this.delay);
            }
        };
        setTimeout(typing, this.delay);
    }
}