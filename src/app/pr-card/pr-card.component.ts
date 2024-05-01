import { Component } from '@angular/core';
import { RepoSelectionService } from '../services/repo-selection.service';

@Component({
  selector: 'app-pr-card',

  templateUrl: './pr-card.component.html',
  styleUrl: './pr-card.component.scss'
})
export class PrCardComponent {
  constructor(private repoSelectionService: RepoSelectionService) { }

  pullRequestInfo: any = {};
  isLoaded: boolean = false;
  prBoxClass: string = 'hide-pr-box';
  isOpen: boolean = false;
  hasPRInfo: boolean = false;

  class: string = 'hide-pr-box';


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
        if (Object.keys(this.pullRequestInfo).length !== 0) {
          this.hasPRInfo = true;
        }
      }
    });

    this.repoSelectionService.prVisibility$.subscribe(visible => {
      this.isOpen = visible;
      this.showPullRequestInfo(this.isOpen);
    });
  }

  showPullRequestInfo(isOpen: boolean) {

    if (isOpen) {
      this.class = 'show-pr-box';
    } else {
      this.class = 'hide-pr-box';
    }

    // if (this.pullRequestInfo && !this.isOpen) {
    //   this.isOpen = true;
    //   this.class = 'show-pr-box';
    // } else {
    //   this.isOpen = false;
    //   this.class = 'hide-pr-box';
    // }
  }

}
