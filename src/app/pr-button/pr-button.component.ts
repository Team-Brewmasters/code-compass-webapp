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

  prBoxClass: string = 'hide-pr-box';
  isOpen: boolean = false;

  ngOnInit() {
    this.pullRequestInfo = this.repoSelectionService.getPullRequestInfo();

    this.repoSelectionService.pullRequestInfo$.subscribe((pullRequestInfo) => {
      this.pullRequestInfo = pullRequestInfo;
    });
  }

  showPullRequestInfo() {
    if (this.pullRequestInfo && !this.isOpen) {
      this.isOpen = true;
      this.prBoxClass = 'show-pr-box';
    } else {
      this.isOpen = false;
      this.prBoxClass = 'hide-pr-box';
    }
  }
}
