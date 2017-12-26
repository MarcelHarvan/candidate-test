import { Component } from '@angular/core';
import {RugService} from "./rugs/rug.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [RugService]
    // styleUrls: ['./app.component.css']
})
export class AppComponent {

}