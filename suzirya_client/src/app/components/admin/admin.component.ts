import { Component, OnInit } from '@angular/core';
import { CharityFundraiser } from '../../interfaces/charity-fundraiser';
import { GatheringService } from '../../services/gathering.service';
import { HumanitarianDepartureService } from '../../services/humanitarian-departure.service';
import { HumanitarianDeparture } from '../../interfaces/humanitarian-departure';
import { NgForm } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news';
import { Thanks } from '../../interfaces/thanks';
import { ThanksService } from '../../services/thanks.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
onFileSelected($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.selectedFile = file;
}
  charitableGathering: CharityFundraiser[] = [];
  humanitariadep: HumanitarianDeparture[] = [];
  news: News[] = [];
  thanks: Thanks[] = [];
  selectedFile: File | null = null;

  constructor(private gatheringService: GatheringService, private humanitariadepServise : HumanitarianDepartureService, 
    private newsService : NewsService, private thanksService : ThanksService) {}

  ngOnInit(): void {
    this.gatheringService.fetchGatherings(); // Fetch gatherings on initialization
    this.humanitariadepServise.fetchHumanitarianDepartures(); // Fetch humanitarian departures on initialization
    this.newsService.fetchNews(); // Fetch news on initialization
    this.gatheringService.charitableGathering$.subscribe((data) => {
      this.charitableGathering = data;
    });

    this.humanitariadepServise.getHumanitarianDepartures().subscribe((data) => {
      this.humanitariadep = data;
    });

      this.newsService.getNews().subscribe((data) => {
        this.news = data;
      });

      this.thanksService.getThanks().subscribe((data) => {
        this.thanks = data;
      });
  }


  // CHARITABLE GATHERING

  addCharitableGathering(form: any): void {
    if (!form.valid || !this.selectedFile) {
      alert('Please complete the form and select an image.');
      return;
    }
  
    const newGathering: CharityFundraiser = {
      img: this.selectedFile ? URL.createObjectURL(this.selectedFile) : '', // Temporary image URL
      title: form.value.title,
      sum_at_this_moment: form.value.sum_at_this_moment,
      main_sum: form.value.main_sum,
    };
  
    this.gatheringService.addGathering(newGathering);
  
    form.resetForm(); // Reset the form after submission
    this.selectedFile = null; // Clear the file input
  }
  

  removeGatheringIn(id: number): void {
    this.gatheringService.removeGathering(id).subscribe(() => {
      console.log('Gathering removed');
    });
  }

  updateGathering(id: number, form: any): void {
    if (!form.valid) {
      alert('Please complete the form to update the gathering.');
      return;
    }
  
    // Prepare the updated values
    const updatedValues: Partial<CharityFundraiser> = {
      title: form.value.title || undefined,
      sum_at_this_moment: form.value.sum_at_this_moment || undefined,
      main_sum: form.value.main_sum || undefined,
    };
  
    // Handle image separately (if a new file is selected)
    if (this.selectedFile) {
      updatedValues.img = URL.createObjectURL(this.selectedFile); // Temporary image URL, should be handled properly for real use
    }
  
    // Update the gathering via the service
    this.gatheringService.updateGathering(id, updatedValues); // Convert 'id' to a number
  
    // Reset form and clear selected file
    form.resetForm();
    this.selectedFile = null;
  }
  

  // HUMANITARIAN DEPARTURE

  deleteHumanitarianDeparture(id: number): void {
    this.humanitariadepServise.deleteHumanitarianDeparture(id).subscribe(() => {
      console.log('Humanitarian departure deleted');
    });
  }

  addHumanitarianDeparture( form: any): void {
    if (!form.valid) {
      alert('Please complete the form to add a humanitarian departure.');
      return;
    }
    const humanitarianDeparture = {
      videoURL: form.value.videoURL,
      title: form.value.title,
      description: form.value.description,
      date: form.value.date,
    };
  
    this.humanitariadepServise.addHumanitarianDeparture(humanitarianDeparture).subscribe(() => {
      console.log('Humanitarian departure added');
    });
  }

  updateHumanitarianDeparture(id: number, form: any): void {
    if (!form.valid) {
      alert('Please complete the form to update the gathering.');
      return;
    }
  
    // Prepare the updated values
    const updatedValues: Partial<HumanitarianDeparture> = {
      title: form.value.title || undefined,
      videoURL: form.value.videoURL || undefined,
      description: form.value.description || undefined,
      date: form.value.date || undefined
    };
  
    // Handle image separately (if a new file is selected)
    if (this.selectedFile) {
      updatedValues.videoURL = URL.createObjectURL(this.selectedFile); // Temporary image URL, should be handled properly for real use
    }
  
    // Update the gathering via the service
    this.humanitariadepServise.updateHumanitarianDeparture(id, updatedValues); // Convert 'id' to a number
  
    // Reset form and clear selected file
    form.resetForm();
    this.selectedFile = null;
  }



       // NEWS 

  addNews(form: NgForm): void {
    if (!form.valid) {
      alert('Please complete the form to add a news item.');
      return;
    }
  
    const newsItem = {
      title: form.value.title,
      img: 'https://via.placeholder.com/150',
      description: form.value.description,
      date: form.value.date,
    };
  
    this.newsService.addNews(newsItem).subscribe(() => {
      console.log('News item added');
    });
  }

  deleteNews(id: number): void {
    this.newsService.deleteNews(id).subscribe(() => {
      console.log('News item deleted');
    });
  }

  updateNews(id: number, form: NgForm): void {
    const updatedNews = this.news.find(news => news.id === id);
    if (!form.valid) {
      alert('Please complete the form to update the news item.');
      return;
    }
  
    const updatedValues: Partial<News> = {
      title: form.value.title || undefined,
      description: form.value.description || undefined,
      date: form.value.date || undefined,
    };
  
    this.newsService.updateNews(id, updatedValues).subscribe(() => {
      console.log('News item updated');
    });
  }

  //Thanks

  addThanks(form: NgForm): void {
    if (!form.valid) {
      alert('Please complete the form to add a thank you message.');
      return;
    }
  
    const thanks = {
      img: 'https://via.placeholder.com/150',
      name: form.value.name,
      message: form.value.message,
    };
  
    this.thanksService.addThanks(thanks).subscribe(
      response => {
        console.log('Update successful', response);
      },
      error => {
        console.error('Update failed', error);
      }
    );
  
    form.resetForm();
  }

  deleteThanks(id: number): void {
    this.thanksService.deleteThanks(id).subscribe(() => {
      console.log('Thanks message deleted');
    });
  }

  updateThanks(id: number, form: NgForm): void {
    if (!form.valid) {
      alert('Please complete the form to update the thank you message.');
      return;
    }
  
    const updatedValues: Partial<Thanks> = {
      img : 'https://via.placeholder.com/150',
      name: form.value.name ,
      message: form.value.message,
    };
  
    this.thanksService.updateThanks(id, updatedValues).subscribe(() => {
      console.log('Thanks message updated');
    });
  }
}
