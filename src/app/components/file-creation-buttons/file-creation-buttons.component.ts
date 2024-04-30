import { Component } from '@angular/core';
import { LambdaService } from '../../services/lambda.service';
import { RepoSelectionService } from '../../services/repo-selection.service';

@Component({
  selector: 'app-file-creation-buttons',
  templateUrl: './file-creation-buttons.component.html',
  styleUrl: './file-creation-buttons.component.scss'
})
export class FileCreationButtonsComponent {

  constructor(private repoSelectionService: RepoSelectionService, private lambdaService: LambdaService) { }




}
