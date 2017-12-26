import { Component, OnInit } from "@angular/core";

import { Rug } from "./rug.model";
import { RugService } from "./rug.service";

@Component({
    selector: 'app-rug-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-rug
                    [rug]="rug"
                    (editClicked)="rug.content = $event"
                    *ngFor="let rug of rugs"></app-rug>
        </div>
    `
})
export class RugListComponent implements OnInit {
    rugs: Rug[];

    constructor(private rugService: RugService) {}

    ngOnInit() {
        this.rugs = this.rugService.getRugs();
    }
}