import { Component } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel';

  characterInfos; 
  singleCharacterInfos;
  characterString;
  displayArray: object[];

  constructor(private marvelService : MarvelService){}

  getDataFromService(){
    this.marvelService.getCharacterInfo()
    .subscribe(
      characterInfos => {
       // this.characterInfos= characterInfos.data.results;
       this.displayArray= characterInfos.data.results;
        console.log(this.characterInfos)
        
      }
    )
  }

  getSingleCharacterDataFromService(string){
    this.characterString = string
    console.log("running get single character")
    this.marvelService.getSingleCharacterInfo(this.characterString)
    .subscribe(
      singleCharacterInfos => {
        this.displayArray= singleCharacterInfos.data.results;
        console.log(this.singleCharacterInfos)
      }
    )
  }

  getPartialSearch($event){
    //run get w/ string
    this.characterString = $event;

    

    this.getSingleCharacterDataFromService(this.characterString);

  }

  ngOnInit (){
    this.getDataFromService();
    console.log(this.characterInfos)
  }
}
