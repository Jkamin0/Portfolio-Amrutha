import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, TestimonialsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
