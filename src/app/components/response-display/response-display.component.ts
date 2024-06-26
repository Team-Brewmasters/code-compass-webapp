import { Component, Input } from '@angular/core';
import { LambdaService } from '../../services/lambda.service';
import { RepoSelectionService } from '../../services/repo-selection.service';
import { getIconMap } from '../../shared/models/repository';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.scss']
})
export class ResponseDisplayComponent {
  @Input() jsonResponse: any = {};
  @Input() githubUrl: string = '';
  userInput: string = '';
  questionResponse: string = '';
  confidence: string = '';
  svgMap: any;



  constructor(private lambdaService: LambdaService, private repoSelelectionService: RepoSelectionService) {
  }

  ngOnInit(): void {
    // this.responseData$ = this.repoSelelectionService.getSummaryData();
    this.svgMap = getIconMap();
  }

  selectQuestion(question: string) {
    this.userInput = question;
  }

  submitQuestion() {

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

  removeWhitespace(string: string): string {
    return string.split(' ').join('');
  }
}