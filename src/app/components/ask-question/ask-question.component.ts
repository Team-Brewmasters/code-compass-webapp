import { Component, Input } from '@angular/core';
import { LambdaService } from '../../services/lambda.service';
import { RepoSelectionService } from '../../services/repo-selection.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrl: './ask-question.component.scss'
})
export class AskQuestionComponent {

  githubUrl: string = '';
  userInput: string = '';
  confidence: string = '';
  isLoading: boolean = false;

  questionResponse: string = '';

  @Input()
  suggestedQuestions: string[] = [];

  constructor(private lambdaService: LambdaService, private repoSelectionService: RepoSelectionService) { }
  ngOnInit() {
    this.githubUrl = this.repoSelectionService.getSelectedRepo();

    this.repoSelectionService.selectedRepo$.subscribe(repoUrl => {
      this.githubUrl = repoUrl;
    });
  }

  submitQuestion() {
    this.githubUrl = this.repoSelectionService.getSelectedRepo()


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

  getConfidenceClass() {
    const confidenceValue = parseFloat(this.confidence);
    if (confidenceValue >= 0.8) {
      return 'high-confidence';
    } else if (confidenceValue >= 0.5) {
      return 'medium-confidence';
    } else {
      return 'low-confidence';
    }
  }

  selectQuestion(question: string) {
    this.userInput = question;
  }

}
