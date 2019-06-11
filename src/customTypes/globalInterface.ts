export const DefaultPaginateState: IPaginate = {
  column: '',
  order: '',
  page: 1,
  size: 20,
  totalPage: null,
  totalSize: null
};
export interface IPaginate {
  column: string;
  order: string;
  page: number;
  size: number;
  totalPage?: number;
  totalSize?: number;
}
