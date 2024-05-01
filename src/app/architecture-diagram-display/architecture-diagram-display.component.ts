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
    // this.githubUrl = this.repoSelectionService.getSelectedRepo();

    if (this.repoSelectionService.getArchitectureDiagramUrl() != '') {
      this.fileUrl = this.repoSelectionService.getArchitectureDiagramUrl();
    }

    this.repoSelectionService.architectureDiagramUrl$.subscribe(architectureDiagramUrl => {
      this.fileUrl = architectureDiagramUrl;
    });

    // this.repoSelectionService.selectedRepo$.subscribe(repoUrl => {
    //   this.githubUrl = repoUrl;
    // });

    // this.downloadDiagram();
  }


}
