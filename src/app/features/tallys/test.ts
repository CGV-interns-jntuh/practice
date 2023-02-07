// Generated by https://quicktype.io

export interface TallyRequest {
  genericData: GenericData;
  specificData: SpecificData;
}

export interface GenericData {
  action: string;
  source: string;
  program: string;
  user: string;
}

export interface SpecificData {
  pageNo: string;
  recordsPerPage: string;
  filters: Filters;
}

export interface Filters {
  IHTALY: number;
  IHSTRF: string;
  IHSCHA: string;
  IHINVO: number;
  IHCARR: string;
  IHBLDG: string;
  IHSTOR: number;
  IHSTSX: string;
  IHCONS: string;
  IHRCPS: string;
  'IHPRO#': string;
}