import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { aboutContent } from '../../content/about-content';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  content = aboutContent;
  expandedStates = new Array(this.content.stats.length).fill(false);

  toggleExpand(index: number): void {
    this.expandedStates[index] = !this.expandedStates[index];
  }
}
