import tableSort from './tableSort';
import searchFilter from './searchFilter';
import pagination from './pagination';

class Table {
  constructor() {
    this._tableSort = tableSort();
    this._searchFilter = searchFilter();
    this._pagination = pagination();
  }

  get tableSort() {
    return this._tableSort;
  }
  get searchFilter() {
    return this._searchFilter;
  }
  get pagination() {
    return this._pagination;
  }
}

export default Table;
