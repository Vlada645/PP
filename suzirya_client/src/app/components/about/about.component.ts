import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit,OnDestroy {
  currentLanguage = '';
  constructor(private sharedService: SharedService) { }
  
  ngOnInit(): void {
    this.updateVisibleCards();
    this.updateDots();
    // Subscribe to the shared language value
    this.sharedService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

 UAText = {
  header_content: 'Благодійна організація «Національний Благодійний фонд «Сузір’я»',
  text_content: 'Сузір’я – це команда, що з перших днів війни об’єднує навколо себе людей, котрі безкоштовно допомагають військовим; людям, що змушені рятуватись від війни; дітям, що залишилися сиротами. <br> Ми всі маємо роботу та сім’ї, та знаходимо час рятувати життя та наближати перемогу.',	
  button_content: 'підтримати донатом',
}

  comand = [
        { photo: 'assets/command_img1.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img2.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img3.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img4.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img5.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img6.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img7.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img8.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img9.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img10.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img11.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img12.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img13.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img14.jpg', fullName: 'GaGu' },
        { photo: 'assets/command_img15.jpg', fullName: 'GaGu' }

      ];
  
      visibleCards: any[] = [];
      activeIndex = 0;
      dots: number[] = [];
      autoScrollInterval: any = null; // Store the timeout ID
    
      ngOnDestroy() {
        // Clear interval on component destroy
        if (this.autoScrollInterval) {
          clearInterval(this.autoScrollInterval);
        }
      }
    
      updateVisibleCards() {
        const start = this.activeIndex;
        const end = start + 3;
        this.visibleCards = this.comand.slice(start, end);
      }
    
      updateDots() {
        const totalDots = Math.ceil(this.comand.length / 3);
        this.dots = Array.from({ length: totalDots }, (_, index) => index);
      }
    
      onDotClick(dotIndex: number) {
        this.activeIndex = dotIndex * 3;
        this.updateVisibleCards();
      }
    
      startAutoScroll() {
        this.autoScrollInterval = setInterval(() => {
          this.activeIndex += 3; // Increment by 3 for the next set of 3 cards
          if (this.activeIndex >= this.comand.length) {
            this.activeIndex = 0; // Loop back to the beginning
          }
          this.updateVisibleCards();
        }, 6000); // Time interval of 6 seconds
      }

    thanks = [
        {photo: '', fullName: 'ПІБ', text: 'fgggg'},
        {photo: '', fullName: 'ПІБ', text: 'fgggg'},
        {photo: '', fullName: 'ПІБ', text: 'fgggg'},
        {photo: '', fullName: 'ПІБ', text: 'fgggg'}  
      ];
}
