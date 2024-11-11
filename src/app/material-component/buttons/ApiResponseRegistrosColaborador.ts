export interface ApiResponseRegistrosColaborador {
    status: string;
    message: string;
    data: {
      dadosFuncionario: any;
      dadosFuncionarioNome: string;
      fimAlmoco: string | null;
      fimTrabalho: string | null;
      id: number;
      inicioAlmoco: string | null;
      inicioTrabalho: string | null;
      pontoRegistrado: any[];
    }[];
  }