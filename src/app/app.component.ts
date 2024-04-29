import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticlesComponent } from "./particles/particles.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ParticlesComponent]
})
export class AppComponent {
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    // Perform any additional actions or API calls here
  }
}


