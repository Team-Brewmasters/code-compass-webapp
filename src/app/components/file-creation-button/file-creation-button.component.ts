import { Component, Input } from '@angular/core';
import { LambdaService } from '../../services/lambda.service';
import { RepoSelectionService } from '../../services/repo-selection.service';

@Component({
  selector: 'app-file-creation-button',

  templateUrl: './file-creation-button.component.html',
  styleUrl: './file-creation-button.component.scss'
})
export class FileCreationButtonComponent {

  isLoading = false;

  @Input()
  fileType: string = '';

  @Input()
  buttonText: string = '';

  githubUrl: string = '';

  constructor(private lambdaService: LambdaService, private repoSelectionService: RepoSelectionService) { }

  ngOnInit() {
    this.githubUrl = this.repoSelectionService.getSelectedRepo();

    this.repoSelectionService.selectedRepo$.subscribe(repoUrl => {
      this.githubUrl = repoUrl;
    });
  }

  createFile() {
    this.isLoading = true;
    this.lambdaService.callFileGenerationLambda(this.githubUrl, this.fileType).subscribe(
      (response) => {
        this.isLoading = false;
        const fileUrl = response.preSignedUrl;
        window.open(fileUrl, '_blank');
      },
      (error) => {
        this.isLoading = false;
        console.error('Error calling Lambda:', error);
        // show dialog
        alert('Error creating file');
      }
    );
  }
}
