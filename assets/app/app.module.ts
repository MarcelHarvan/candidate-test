import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import {RugsComponent} from "./rugs/rugs.component";
import {RugListComponent} from "./rugs/rug-list.component";
import {RugInputComponent} from "./rugs/rug-input.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";


@NgModule({
    declarations: [
        AppComponent,
        RugsComponent,
        RugListComponent,
        RugInputComponent,
        RugsComponent,
        HeaderComponent

    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}