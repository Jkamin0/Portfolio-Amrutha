import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { testimonialsContent } from '../../content/testimonials-content';

@Component({
  selector: 'app-testimonials',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  content = testimonialsContent;

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
