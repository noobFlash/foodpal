import { Component } from "@angular/core";

@Component({
  selector :'app-search',
  templateUrl: './app-search.component.html'
})

export class SearchComponent{
  onSearch(value : string){
    console.log(value);
  }
}
