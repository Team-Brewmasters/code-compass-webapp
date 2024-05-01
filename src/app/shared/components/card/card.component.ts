import { Component, Input } from '@angular/core';
import { LambdaService } from '../../../services/lambda.service';
import { RepoSelectionService } from '../../../services/repo-selection.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardType: string = '';
  cardTitle: string = '';
  cardContent: any;
  expanded = false;
  hasMoreContent = false;
  isLoaded = false;
  constructor(private repoSelectionService: RepoSelectionService, private lambdaService: LambdaService) {

  }

  ngOnInit(): void {
    console.log(this.cardContent);

    switch (this.cardType) {
      case 'overview':
        this.cardTitle = 'Overview';
        // repoSelectionService
        break;
      case 'security':
        this.cardTitle = 'Security';

        if (this.repoSelectionService.getSecurityRecommendation() != '') {
          this.cardContent = this.repoSelectionService.getSecurityRecommendation();
          this.checkMoreContent();
          this.isLoaded = true;
        }

        this.repoSelectionService.securityRecommendation$.subscribe((cardContent) => {
          this.cardContent = cardContent;
          this.checkMoreContent();
          this.isLoaded = true;
        });

        break;
      case 'architecture':
        this.cardTitle = 'Architecture';

        if (this.repoSelectionService.getArchitectureRecommendation() != '') {
          this.cardContent = this.repoSelectionService.getArchitectureRecommendation();
          this.checkMoreContent();
          this.isLoaded = true;
        }

        this.repoSelectionService.architectureRecommendation$.subscribe((cardContent) => {
          this.cardContent = cardContent;
          this.checkMoreContent();
          this.isLoaded = true;
        });
        break;
      case 'quality':
        this.cardTitle = 'Quality';

        if (this.repoSelectionService.getCodeQualityRecommendation() != '') {
          this.cardContent = this.repoSelectionService.getCodeQualityRecommendation();
          this.checkMoreContent();
          this.isLoaded = true;
        }

        this.repoSelectionService.codeQualityRecommendation$.subscribe((cardContent) => {
          this.cardContent = cardContent;
          this.checkMoreContent();
          this.isLoaded = true;
        });
        break;
      case 'optimization':
        this.cardTitle = 'Optimization';

        if (this.repoSelectionService.getOptimizationRecommendation() != '') {
          this.cardContent = this.repoSelectionService.getOptimizationRecommendation();
          this.checkMoreContent();
          this.isLoaded = true;
        }

        this.repoSelectionService.optimizationRecommendation$.subscribe((cardContent) => {
          this.cardContent = cardContent;
          this.checkMoreContent();
          this.isLoaded = true;
        });
        break;
    }

  }

  ngAfterViewInit(): void {
    this.checkMoreContent();
  }

  checkMoreContent(): void {
    if (this.cardContent.length > 300) {
      this.hasMoreContent = true;
    }
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  mockWriterForOverview(component: { name: string; description: string; }, cardContent: {
    value: {
      architecture: {
        high_level_components: any; data_flow: string;
      };
    };
  }) {
    let html = '';
    html += '\<h3\>Overview\</h3\>';
    html += '\<h4\>Architecture\</h4\>';
    html += '\<ul\>';
    for (let component of cardContent.value.architecture.high_level_components) {
      html += '\<li\>' + component.name + ':\</strong\> ' + component.description + '\</li\>';
    }

    html += '\</ul\>';
    html += '\<p\>\<strong\>Data Flow:\</strong\>' + cardContent.value.architecture.data_flow + '\</p\>';
    return html;
  }

  mockWriterForSecurity(cardContent: any): string {
    let html = '';

    html += '<h3>Overview</h3>';
    html += '<h4>Security</h4>';
    html += '<ul>';

    for (let vulnerability of cardContent.vulnerabilities) {
      html += '<li>';
      html += '<strong>Description:</strong> ' + vulnerability.description;
      html += '<ul>';
      html += '<strong>Recommendation:</strong>';
      for (let recommendation of vulnerability.fix_recommendations) {
        html += '<li>' + recommendation + '</li>';
      }
      html += '</ul>';
      html += '<strong>Severity:</strong> ' + vulnerability.severity;
      html += '</li>';
    }

    html += '</ul>';

    return html;
  }

  mockWriterForPerformance(cardContent: any): string {
    let html = '';

    html += '<h3>Overview</h3>';
    html += '<h4>Performance</h4>';
    html += '<ul>';

    if (cardContent.issues.length > 0) {
      html += '<strong>Issues:</strong>';
      for (let issue of cardContent.issues) {
        html += '<li>' + issue + '</li>';
      }
    } else {
      html += '<li>No issues found</li>';
    }

    html += '</ul>';

    return html;
  }

  mockWriterForCodeAnalysis(cardContent: any): string {
    let html = '';

    html += '<h3>Code Analysis</h3>';
    html += '<h4>Classes</h4>';
    html += '<ul>';

    for (let classObj of cardContent.classes) {
      html += '<li>';
      html += '<strong>' + classObj.name + ':</strong>';
      html += '<ul>';

      for (let method of classObj.methods) {
        html += '<li>';
        html += '<strong>' + method.name + ':</strong> ' + method.description;
        html += '</li>';
      }

      html += '</ul>';
      html += '</li>';
    }

    html += '</ul>';

    return html;
  }

  mockWriterForFiles(cardContent: any[]): string {
    let html = '';

    html += '<h3>Code Analysis</h3>';
    html += '<h4>Files</h4>';
    html += '<ul>';

    for (let file of cardContent) {
      html += '<li>';
      html += '<strong>Path:</strong> ' + file.path + '<br>';
      html += '<strong>Description:</strong> ' + file.summary + '<br>';
      html += '<strong>Size:</strong> ' + file.size + ' lines of code.<br>';
      html += '</li>';
    }

    html += '</ul>';

    return html;
  }
}
