import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { contactContent } from '../../content/contact-content';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  content = contactContent;

  onContactClick(icon: string): void {
    switch(icon) {
      case 'email':
        window.location.href = `mailto:${this.content.email}`;
        break;
      case 'phone':
        window.location.href = `tel:${this.content.phone}`;
        break;
      case 'calendar_today':
        window.open('https://calendly.com', '_blank', 'noopener,noreferrer');
        break;
    }
  }
}
