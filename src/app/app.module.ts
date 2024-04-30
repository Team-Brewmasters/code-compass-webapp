import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { ResponseDisplayComponent } from './components/response-display/response-display.component';
import { TypewriterDirective } from './directives/typwriter.directive';
import { ParticlesComponent } from './particles/particles.component';
import { LambdaService } from './services/lambda.service';
import { RepoSelectionService } from './services/repo-selection.service';
import { CardComponent } from "./shared/components/card/card.component";

@NgModule({
    declarations: [AppComponent, ParticlesComponent, ResponseDisplayComponent, AskQuestionComponent, TypewriterDirective],
    providers: [LambdaService, RepoSelectionService],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule, MarkdownModule.forRoot(), CardComponent]
})
export class AppModule { }