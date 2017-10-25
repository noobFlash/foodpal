import { Component } from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';


@Component({
  selector :'app-search',
  templateUrl: './app-search.component.html'
})


export class SearchComponent{
  

  onSearch(value : string){
    console.log(value);
  //   var apiLink = this.link + value;
  //
  //         this.http.request(apiLink)
  //             .subscribe((res: Response) => {
  //                   this.giphies = res.json().data;
  //                   console.log(this.giphies);
  //             });
  // return this.http.get(this.link + value)
  // .map((res:Response) => res.json());


   }

}
