import { Component } from '@angular/core';
import { LambdaService } from '../../services/lambda.service';
import { RepoSelectionService } from '../../services/repo-selection.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {

  constructor(private repoSelectionService: RepoSelectionService, private lambdaService: LambdaService) { }




}
