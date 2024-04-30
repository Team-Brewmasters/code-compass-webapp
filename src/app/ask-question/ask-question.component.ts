import { Component } from '@angular/core';
import { LambdaService } from '../services/lambda.service';
import { RepoSelectionService } from '../services/repo-selection.service';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [],
  templateUrl: './ask-question.component.html',
  styleUrl: './ask-question.component.scss'
})
export class AskQuestionComponent {

  githubUrl: string = '';
  userInput: string = '';
  confidence: number = 0;

  questionResponse: string = '';

  constructor(private lambdaService: LambdaService, private repoSelectionService: RepoSelectionService) { }

  submitQuestion() {
   this.repoSelectionService.selectedRepo$.subscribe(
      (repo) => {
        this.githubUrl = repo;
      }
    );
    
    this.lambdaService.callAskQuestionLambda(this.githubUrl, this.userInput).subscribe(
      (response) => {
        this.questionResponse = JSON.parse(response).answer;
        this.confidence = JSON.parse(response).confidence;
        console.log('Ask Question Lambda response:', response);
      },
      (error) => {
        console.error('Error calling Lambda:', error);
      }
    );
  
}

}
