import { Component } from '@angular/core';
import { LambdaService } from './services/lambda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSubmitted = false;
  githubUrl = '';
  responseData: any;

  constructor(private lambdaService: LambdaService) {}

  onSubmit() {
    this.isSubmitted = true;
    this.callLambda();
  }

  callLambda() {
    this.lambdaService.callSummaryLambda(this.githubUrl).subscribe(
      (response) => {
        this.responseData = JSON.parse(response);
        console.log('Lambda response:', response);
      },
      (error) => {
        console.error('Error calling Lambda:', error);
      }
    );
  }
}