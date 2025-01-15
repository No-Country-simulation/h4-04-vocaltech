export class CreateLeadDto {
    id: string;
    name: string;
    email: string;
    whatsapp: string;
    respuestas: {
        comunicacion: {
            presentacionIdeas: number;
            limitaPotencial: boolean;
            desarrollarVoz: boolean;
            areasMejora: string
        };
        mvp: {
            tieneIdea: boolean;
            sabeValidar: boolean;
            necesitaEquipo: boolean;
            conocimientosFaltantes: string
        };
        integracion: {
            comoComunicar: string;
            seguroConectar: boolean;
            interesEntrenamiento: boolean
        }
    }
}
