import { Time } from "@angular/common";

export interface Passeio {
    id?: string;
    status: string;
    data: Date;
    horario?: string;
    usuarioId?: string;
    passeadorId?: string;
}
