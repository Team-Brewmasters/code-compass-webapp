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
  isLoading = false;


  hasLoadedData = false;

  constructor(private lambdaService: LambdaService, private repoSelelectionService: RepoSelectionService) { }

  onSubmit() {
    this.isSubmitted = true;
    this.callSummaryLambda();
  }

  callSummaryLambda() {
    if (!this.isLoading && this.githubUrl != "") {
      this.isLoading = true;
      this.repoSelelectionService.selectRepo(this.githubUrl);
      this.lambdaService.callSummaryLambda(this.githubUrl).subscribe(
        (response) => {
          this.isLoading = false;
          this.responseData = response;
          console.log('Lambda response:', response);
        },
        (error) => {
          this.isSubmitted = false;
          alert('Error 3retrieving data. Please try again later.');
          this.isLoading = false;
          console.error('Error calling Lambda:', error);
        }
      );
    }
  }

  
}