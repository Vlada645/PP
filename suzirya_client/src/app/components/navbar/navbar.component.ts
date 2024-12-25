import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import e from 'express';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Corrected here
})
export class NavbarComponent implements OnInit { // Implementing OnInit
  isMenuHidden: boolean = true;
  isMobile: boolean = false;
  isBrowser: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private SharedService: SharedService) {
    this.isBrowser = isPlatformBrowser(platformId);
        // Subscribe to the language changes
        this.SharedService.currentLanguage$.subscribe((language) => {
          this.currentLanguage = language;
        });
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 1200;

      // Show the menu on larger screens
      this.isMenuHidden = this.isMobile; // Hides the menu if mobile
    }
  }

  toggleMenu() {
    if (this.isMobile) {
        this.isMenuHidden = !this.isMenuHidden;
    }
}

currentLanguage: string = 'UA';  // Initially set to Ukrainian
  isArrowActive: boolean = false;  // Arrow is initially pointing down

  // toggleLanguage(): void {
  //   // Toggle language between Ukrainian and English
  //   const newLanguage = this.currentLanguage === 'UA' ? 'EN' : 'UA';
  //   this.SharedService.setCurrentLanguage(newLanguage);

  //   // Toggle arrow rotation
  //   this.isArrowActive = !this.isArrowActive;
  // }

  // translation object

  UAText = {
    home: 'Головна',
    partners: 'Партнери',
    about: 'Про нас',
    news: 'Події',
    projects: 'Проекти',
    contacts: 'Контакти',
    buttonText: 'Підтримати'
  }

  ENText = {
    home: 'Home',
    partners: 'Partners',
    about: 'About',
    news: 'News',
    projects: 'Projects',
    contacts: 'Contacts',
    buttonText: 'Support us'
  }

  currentText = this.UAText; // Initially set to Ukrainian

  // Function to toggle between Ukrainian and English

  toggleLanguage(): void {
    // Toggle language between Ukrainian and English
    const newLanguage = this.currentLanguage === 'UA' ? 'EN' : 'UA';
    this.SharedService.setCurrentLanguage(newLanguage);

    // Toggle arrow rotation
    this.isArrowActive = !this.isArrowActive;

    // Toggle text
    this.currentText = newLanguage === 'UA' ? this.UAText : this.ENText;
  }

}
