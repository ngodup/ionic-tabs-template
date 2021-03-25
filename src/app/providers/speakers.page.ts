import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class SpeakersService {
  speakers: [];

  constructor() { }

  getSpeakers() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./assets/data/data.json').then(res => res.json())
        .then((data) => {
          this.speakers = data.speakers;
          resolve(this.speakers);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }

  getSpeaker(id: string) {
    return new Promise((resolve: ({ }) => void, reject) => {
      this.speakers.filter((row: any, index: number) => {
        if (row.id === id) {
          resolve(row);
        }
        if (this.speakers.length === index + 1) {
          reject();
        }
      });
    });
  }

}