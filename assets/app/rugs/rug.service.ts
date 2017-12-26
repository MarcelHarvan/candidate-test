import { Rug } from "./rug.model";

export class RugService {
    private rugs: Rug[] = [];

    addRug(rug: Rug) {
        this.rugs.push(rug);
        console.log(this.rugs);
    }

    getRugs() {
        return this.rugs;
    }

    deleteRug(rug: Rug) {
        this.rugs.splice(this.rugs.indexOf(rug), 1);
    }
}