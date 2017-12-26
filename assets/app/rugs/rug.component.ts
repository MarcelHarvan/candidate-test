import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Rug } from "./rug.model";
import { RugService } from "./rug.service";

@Component({
    selector: 'app-rug',
    templateUrl: './rug.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class RugComponent {
    @Input() rug: Rug;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private rugService: RugService) {}

    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete() {
        this.rugService.deleteRug(this.rug);
    }
}