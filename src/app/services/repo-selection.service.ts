import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LambdaService } from './lambda.service';

@Injectable({
    providedIn: 'root'
})
export class RepoSelectionService {
    private selectedRepoSource = new BehaviorSubject<string>('');
    selectedRepo$ = this.selectedRepoSource.asObservable();

    private securityRecommendation = new BehaviorSubject<string>('');
    securityRecommendation$ = this.securityRecommendation.asObservable();

    private architectureRecommendation = new BehaviorSubject<string>('');
    architectureRecommendation$ = this.architectureRecommendation.asObservable();

    private optimizationRecommendation = new BehaviorSubject<string>('');
    optimizationRecommendation$ = this.optimizationRecommendation.asObservable();

    private codeQualityRecommendation = new BehaviorSubject<string>('');
    codeQualityRecommendation$ = this.codeQualityRecommendation.asObservable();

    private architectureDiagramUrl = new BehaviorSubject<string>('');
    architectureDiagramUrl$ = this.architectureDiagramUrl.asObservable();

    private pullRequestInfo = new BehaviorSubject<any>(null);
    pullRequestInfo$ = this.pullRequestInfo.asObservable();

    private prVisibility = new BehaviorSubject<boolean>(false);
    prVisibility$ = this.prVisibility.asObservable();



    constructor(private lambdaService: LambdaService) { }



    selectRepo(repoUrl: string) {
        this.selectedRepoSource.next(repoUrl);
        this.retrieveRecommendations();
    }

    getSelectedRepo() {
        return this.selectedRepoSource.getValue();
    }

    getSecurityRecommendation() {
        return this.securityRecommendation.getValue();
    }

    getArchitectureRecommendation() {
        return this.architectureRecommendation.getValue();
    }

    getOptimizationRecommendation() {
        return this.optimizationRecommendation.getValue();
    }

    getCodeQualityRecommendation() {
        return this.codeQualityRecommendation.getValue();
    }

    getArchitectureDiagramUrl() {
        return this.architectureDiagramUrl.getValue();
    }

    getPullRequestInfo() {
        return this.pullRequestInfo.getValue();
    }

    setPullRequestInfo(info: any) {
        this.pullRequestInfo.next(info);
    }

    togglePRVisibility() {
        this.prVisibility.next(!this.prVisibility.value);
    }

    retrieveRecommendations() {
        this.lambdaService.callAskQuestionLambda(this.getSelectedRepo(), 'What are security recommendations that you have for this repo. Please be concise and in markdown format.').subscribe(
            (response) => {
                let answer = JSON.parse(response).answer;
                this.securityRecommendation.next(answer);
            },
            (error) => {
                console.error('Error calling Lambda:', error);
            }
        );

        this.lambdaService.callAskQuestionLambda(this.getSelectedRepo(), 'What are architecture recommendations that you have for this repo. Pleaase be concise and in markdown format.').subscribe(
            (response) => {
                let answer = JSON.parse(response).answer;
                this.architectureRecommendation.next(answer);
            },
            (error) => {
                console.error('Error calling Lambda:', error);
            }
        );

        this.lambdaService.callAskQuestionLambda(this.getSelectedRepo(), 'What are optimization recommendations that you have for this repo. Pleaase be concise and in Markdown format').subscribe(
            (response) => {
                let answer = JSON.parse(response).answer;
                this.optimizationRecommendation.next(answer);
            },
            (error) => {
                console.error('Error calling Lambda:', error);
            }
        );

        this.lambdaService.callAskQuestionLambda(this.getSelectedRepo(), 'What are code quality recommendations that you have for this repo. Pleaase be concise.').subscribe(
            (response) => {
                let answer = JSON.parse(response).answer;
                this.codeQualityRecommendation.next(answer);
            },
            (error) => {
                console.error('Error calling Lambda:', error);
            }
        );

        this.lambdaService.callFileGenerationLambda(this.getSelectedRepo(), 'architecture').subscribe(
            (response) => {
                this.architectureDiagramUrl.next(response.preSignedUrl);
            },
            (error) => {
                console.error('Error calling Lambda:', error);
            }
        );

        this.lambdaService.callPRSummaryLambda(this.getSelectedRepo()).subscribe(
            (response) => {
                this.pullRequestInfo.next(response);
            },
            (error) => {
                console.error('Error calling Lambda:', error);
            }
        );
    }
}