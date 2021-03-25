import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from 'src/app/providers/speakers.page';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.page.html',
  styleUrls: ['./speaker.page.scss'],
})
export class SpeakerPage implements OnInit {
  speaker;
  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakersService) { }

  ngOnInit() {
    const speakerId = this.route.snapshot.paramMap.get('id');
    if (speakerId) {
      this.speakerService.getSpeaker(speakerId).then((speaker) => {
        this.speaker = speaker;
      });
    }
  }

}
