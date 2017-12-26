import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { RugService } from "./rug.service";
import { Rug } from "./rug.model";

@Component({
    selector: 'app-rug-input',
    templateUrl: './rug-input.component.html'
})
export class RugInputComponent {
    constructor(private rugService: RugService) {}

    onSubmit(form: NgForm) {
        const rug = new Rug(form.value.content);
        this.rugService.addRug(rug);
        form.resetForm();
    }
}