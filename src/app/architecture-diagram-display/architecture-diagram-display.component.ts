import { Component } from '@angular/core';
import { LambdaService } from '../services/lambda.service';
import { RepoSelectionService } from '../services/repo-selection.service';

@Component({
  selector: 'app-architecture-diagram-display',
  templateUrl: './architecture-diagram-display.component.html',
  styleUrl: './architecture-diagram-display.component.scss'
})
export class ArchitectureDiagramDisplayComponent {
  constructor(private lambdaService: LambdaService, private repoSelectionService: RepoSelectionService) { }

  fileUrl: string = '';

  githubUrl: string = '';
  ngOnInit() {
    this.githubUrl = this.repoSelectionService.getSelectedRepo();

    this.repoSelectionService.selectedRepo$.subscribe(repoUrl => {
      this.githubUrl = repoUrl;
    });

    this.downloadDiagram();
  }

  downloadDiagram() {
    this.lambdaService.callFileGenerationLambda(this.githubUrl, 'architecture').subscribe(
      (response) => {
        this.fileUrl = response.preSignedUrl;
        // window.open(fileUrl, '_blank');
      },
      (error) => {
        console.error('Error calling Lambda:', error);
        // show dialog
        alert('Error creating architecture diagram.');
      }
    );
  }
}
