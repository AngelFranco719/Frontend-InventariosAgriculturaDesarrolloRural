export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable<T> {
  content: T[];
  pageable: Pageable<T>;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

export function getPageSize(data: Pageable<any>) {
  return data.size;
}

export function getMaximumResults(data: Pageable<any>) {
  return data.totalElements;
}
