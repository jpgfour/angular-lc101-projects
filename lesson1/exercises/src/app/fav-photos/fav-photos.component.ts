import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Doin's & Transpirin's";
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://media.graytvinc.com/images/690*517/coronavirus14.jpg';
  image3 = 'https://completewellbeing.com/wp-content/uploads/2016/02/the-zen-of-work.jpg';

  constructor() { }

  ngOnInit() {
  }

}