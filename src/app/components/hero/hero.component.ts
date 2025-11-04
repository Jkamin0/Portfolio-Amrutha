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
    this.scrollToSection('contact');
  }

  onLearnMore(): void {
    this.scrollToSection('services');
  }

  private scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
