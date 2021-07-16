export interface ActivityItem {
  text: string;
  code: string;
}

export interface Billing {
  free: boolean;
  database: boolean;
}

export interface Enterprise {
  atividadePrincipal: ActivityItem[];
  dataSituacao: string;
  tipo: string;
  nome: string;
  uf: string;
  telefone: string;
  email: string;
  atividadesSecundarias: ActivityItem[];
  qsa: any[];
  situacao: string;
  bairro: string;
  logradouro: string;
  numero: number;
  cep: string;
  municipio: string;
  porte: string;
  abertura: string;
  naturezaJuridica: string;
  fantasia: string;
  cnpj: string;
  ultimaAtualizacao: string;
  status: string;
  complemento: string;
  efr: string;
  motivoSituacao: string;
  situacaoEspecial: string;
  dataSituacaoEspecial: string;
  capitalSocial: string;
  extra: any;
  billing: Billing;
}
