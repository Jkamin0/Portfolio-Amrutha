import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { heroContent } from '../../content/hero-content';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  content = heroContent;

  onGetStarted(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
