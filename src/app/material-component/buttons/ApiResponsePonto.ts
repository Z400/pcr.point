import { Colaborador } from "./Colaborador";

export interface ApiResponsePonto{
    status: string 
    message: string
    data: {
    id: number;
    dadosFuncionario: Colaborador;
    inicioTrabalho: number[];
    inicioAlmoco: number[] | null;
    fimAlmoco: number[] | null;
    fimTrabalho: number[] | null;
    pontoRegistrado: number[];

    }

    error?: string;
}