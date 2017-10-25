import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search/search.component";
import { MainSearchComponent } from "./main-search/main-search.component";
import { BestFitSearchComponent } from "./best-fit-search/best-fit-search.component";

import { AppComponent } from "./app.component";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        MainSearchComponent,
        BestFitSearchComponent
    ],
    imports: [
      BrowserModule,

    ],
    
    bootstrap: [AppComponent]
})
export class AppModule {

}
