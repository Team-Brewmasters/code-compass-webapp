import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Directive({
    selector: '[appTypewriter]'
})
export class TypewriterDirective implements OnChanges {
    @Input('appTypewriter') text: string = '';
    @Input() delay: number = 50;

    constructor(private el: ElementRef, private markdownService: MarkdownService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['text']) {
            this.el.nativeElement.innerHTML = '';
            this.typewriterEffect(changes['text'].currentValue);
        }
    }

    typewriterEffect(text: string) {
        let i = 0;
        const typing = () => {
            if (i < text.length) {
                const currentText = text.slice(0, i + 1);
                const html = this.markdownService.parse(currentText);
                this.el.nativeElement.innerHTML = html;
                i++;
                setTimeout(typing, this.delay);
            }
        };
        setTimeout(typing, this.delay);
    }
}