import { Component } from '@angular/core';
import { LambdaService } from './services/lambda.service';
import { RepoSelectionService } from './services/repo-selection.service';

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

  hasLoadedData = false;

  constructor(private lambdaService: LambdaService, private repoSelelectionService: RepoSelectionService) {}

  onSubmit() {
    this.isSubmitted = true;
    this.callSummaryLambda();
  }

  callSummaryLambda() {
    this.githubUrl = "https://www.github.com/Team-Brewmasters/code-compass-webapp"
    this.repoSelelectionService.selectRepo(this.githubUrlInput);

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