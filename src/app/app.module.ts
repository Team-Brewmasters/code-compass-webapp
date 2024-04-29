import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { ParticlesComponent } from './particles/particles.component';
import { ResponseDisplayComponent } from './response-display/response-display.component';
import { LambdaService } from './services/lambda.service';
import { CardComponent } from "./shared/components/card/card.component";

@NgModule({
  declarations: [AppComponent, ParticlesComponent, ResponseDisplayComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule, MarkdownModule],
  providers: [LambdaService,],
  bootstrap: [AppComponent]
})
export class AppModule { }