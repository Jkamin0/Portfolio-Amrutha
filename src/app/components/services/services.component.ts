import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { servicesContent } from '../../content/services-content';

@Component({
  selector: 'app-services',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  content = servicesContent;
}
