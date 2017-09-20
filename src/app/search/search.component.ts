import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCharacter;

  //event emitter to send the character input
  @Output() sendCharacter = new EventEmitter<string>();

  
  constructor() { }


  getInput() {

    console.log("test")
    
    //this.sendCharacter.emit(true);

    this.sendCharacter.emit(this.searchCharacter);

  }

  

  ngOnInit() {
  }

}
