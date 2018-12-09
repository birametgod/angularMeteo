import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteoService } from "../meteo.service";


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  villeFav : string[];
  meteo : any;
  ville : any ;
  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService
  ) {}

  ngOnInit() {
    this.getVille();
  }

  onSubmit(ville:string) {
    this.meteoService.getMeteo(ville).subscribe(resultat => {
      this.meteo = resultat;
      console.log('le resultat',this.meteo);
    });
  }

  getVille():void {
    this.route.queryParams.subscribe(params => this.villeFav = Object.values(params));
  }

}
