import { Component, OnInit } from '@angular/core';
import { Generation } from 'src/app/models/generation';
import { GenerationService } from 'src/app/services/generation.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  generations: Generation[] | null;

  constructor(private generationService: GenerationService) {
    this.generations = new Array();
  }

  ngOnInit() {
    this.generationService.getRecords().subscribe({
      next:(response) => {
        this.generations = response;
      },
      error:(error)=>{
        console.log('browseComponent.ts: ' + error);
      }
    });
  }

}
