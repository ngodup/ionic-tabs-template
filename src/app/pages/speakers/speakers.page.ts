import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../../providers/speakers.page';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  speakers: any;
  constructor(private speakerService: SpeakersService) { }

  ngOnInit() {
    this.speakerService.getSpeakers().then(data => {
      this.speakers = data;
    });
  }
}
