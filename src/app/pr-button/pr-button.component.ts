import { Component } from '@angular/core';
import { RepoSelectionService } from '../services/repo-selection.service';

@Component({
  selector: 'app-pr-button',
  templateUrl: './pr-button.component.html',
  styleUrl: './pr-button.component.scss'
})
export class PrButtonComponent {

  constructor(private repoSelectionService: RepoSelectionService) { }

  pullRequestInfo: any = {};
  isLoaded: boolean = false;
  prBoxClass: string = 'hide-pr-box';
  isOpen: boolean = false;

  hasPRInfo: boolean = false;


  ngOnInit() {
    if (this.repoSelectionService.getPullRequestInfo() !== null) {


      this.isLoaded = true;
      this.pullRequestInfo = this.repoSelectionService.getPullRequestInfo();

      if (this.pullRequestInfo && this.pullRequestInfo.decision !== null) {
        if (Object.keys(this.pullRequestInfo).length !== 0) {
          this.hasPRInfo = true;
        }
      }
    }

    this.repoSelectionService.pullRequestInfo$.subscribe((pullRequestInfo) => {
      this.isLoaded = true;
      this.pullRequestInfo = pullRequestInfo;

      if (this.pullRequestInfo && this.pullRequestInfo.decision !== null) {
        if (Object.keys(this.pullRequestInfo).length !== 0)
          this.hasPRInfo = true;
      }
    });

    this.repoSelectionService.prVisibility$.subscribe((visibility) => {
      this.isOpen = visibility;
    });


  }



  showPullRequestInfo() {
    this.repoSelectionService.togglePRVisibility();
  }

}
