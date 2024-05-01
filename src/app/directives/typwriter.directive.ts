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
            this.parseMarkdown(changes['text'].currentValue);
        }
    }

    private async parseMarkdown(text: string) {
        try {
            const parsedHtml = await this.markdownService.parse(text);
            this.typewriterEffect(parsedHtml);
        } catch (error) {
            console.error('Error parsing markdown:', error);
        }
    }

    private typewriterEffect(parsedHtml: string) {
        let i = 0;
        const typing = () => {
            if (i < parsedHtml.length) {
                const currentHtml = parsedHtml.slice(0, i + 1);
                this.el.nativeElement.innerHTML = currentHtml;
                i++;
                setTimeout(typing, this.delay);
            }
        };
        setTimeout(typing, this.delay);
    }
}