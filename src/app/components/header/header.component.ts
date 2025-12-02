import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { headerContent, NavItem } from '../../content/header-content';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  content = headerContent;
  mobileMenuOpen = false;
  activeSection: string | null = null;

  ngOnInit(): void {
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const mobileNav = document.querySelector('.mobile-nav');
    const menuButton = document.querySelector('.mobile-menu-button');

    if (this.mobileMenuOpen && mobileNav && menuButton) {
      if (!mobileNav.contains(target) && !menuButton.contains(target)) {
        this.mobileMenuOpen = false;
      }
    }
  }

  @HostListener('window:keydown.escape', [])
  onEscapeKey(): void {
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private updateActiveSection(): void {
    const sections = ['about', 'services', 'testimonials', 'contact'];
    const scrollPosition = window.pageYOffset + 100;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = sectionId;
          return;
        }
      }
    }

    if (window.pageYOffset < 100) {
      this.activeSection = null;
    }
  }

  scrollToSection(sectionId?: string): void {
    if (!sectionId) {
      this.scrollToTop();
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    this.mobileMenuOpen = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.mobileMenuOpen = false;
  }

  isActive(sectionId?: string): boolean {
    if (!sectionId) {
      return this.activeSection === null;
    }
    return this.activeSection === sectionId;
  }
}
