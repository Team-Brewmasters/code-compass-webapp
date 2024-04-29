import { Component } from '@angular/core';
import { LambdaService } from './services/lambda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSubmitted = false;
  githubUrl = '';
  githubUrlInput = '';
  responseData: any;

  constructor(private lambdaService: LambdaService) {}

  onSubmit() {
    this.isSubmitted = true;
    this.githubUrlInput = "https://www.github.com/Team-Brewmasters/code-compass-webapp";
    this.callLambda();
  }

  callLambda() {
    this.githubUrl = "https://www.github.com/Team-Brewmasters/code-compass-webapp"
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