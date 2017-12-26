import { Component } from "@angular/core";

@Component({
    selector: 'app-rugs',
    template: `
        <div class="row">
            <app-rug-input></app-rug-input>
        </div>
        <hr>
        <div class="row">
            <app-rug-list></app-rug-list>
        </div>
    `
})
export class RugsComponent {

}