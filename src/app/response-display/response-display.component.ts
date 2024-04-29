import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.scss']
})
export class ResponseDisplayComponent {
  @Input() jsonResponse: any;
}