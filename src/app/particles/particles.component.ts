import { Component, OnInit} from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
  standalone: true
})
export class ParticlesComponent implements OnInit {

  ngOnInit(): void {
    particlesJS.load('particles-js', './assets/json/particles.json', null);
  }

}