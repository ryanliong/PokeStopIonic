import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Generation } from 'src/app/models/generation';
import { SetEntity } from 'src/app/models/set-entity';
import { GenerationService } from 'src/app/services/generation.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  generations: Generation[] | null;
  // setEntities: SetEntity[][] | null;

  constructor(private generationService: GenerationService, private router: Router) {
    this.generations = new Array();
    // this.setEntities = new Array();
  }

  ngOnInit() {
    this.generationService.getGenerations().subscribe({
      next:(response) => {
        this.generations = response;
        // for (let i = 0; i <= this.generations.length; i++) {
        //   this.setEntities.push(this.generations[i].setEntities);
        // }
      },
      error:(error)=>{
        console.log('browseComponent.ts: ' + error);
      }
    });
    
  }

  getGenerationImagePath(variable) {
    return "http://192.168.50.69:8080/PokeStopJsf-war/resources/images/generationUploadedImages/" + variable;
  }

  getSetImagePath(variable) {
    return "http://192.168.50.69:8080/PokeStopJsf-war/resources/images/setUploadedImages/" + variable;
  }

  viewSet(event, setEntity) {
    this.router.navigate(["/tabs/tab2/viewSet/" + setEntity.setId]);
  }

}
