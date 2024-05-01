import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pr-card',

  templateUrl: './pr-card.component.html',
  styleUrl: './pr-card.component.scss'
})
export class PrCardComponent {
  @Input()
  pullRequestInfo: any = {};

}
