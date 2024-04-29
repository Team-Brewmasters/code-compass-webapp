import { Component, Input } from '@angular/core';
import { LambdaService } from '../services/lambda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.scss']
})
export class ResponseDisplayComponent {
  @Input() jsonResponse: any = {};
  @Input() url: any = '';
  responseData$: Observable<any> | null = null;

  constructor (private lambdaService: LambdaService) {
    
  }

  ngOnInit() {
    console.log('url:', this.url);
    this.responseData$ = this.lambdaService.callSummaryLambda(this.url);
  }
}