import Table from './modules/table';

class HelloWorld {
  message = 'Hello World';
  print = () => this.message;
}

const hello = new HelloWorld();
// eslint-disable-next-line no-console
console.log(
  `%c ${hello.print()}`,
  `color: green; font-size:48px; weight: bold`,
);

const table = new Table();

table.tableSort;
table.searchFilter;
table.pagination;
