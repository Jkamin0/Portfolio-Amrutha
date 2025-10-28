import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { aboutContent } from '../../content/about-content';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  content = aboutContent;
  flippedStates = new Array(this.content.stats.length).fill(false);

  toggleFlip(index: number): void {
    this.flippedStates[index] = !this.flippedStates[index];
  }

  isFlipped(index: number): boolean {
    return this.flippedStates[index];
  }
}
