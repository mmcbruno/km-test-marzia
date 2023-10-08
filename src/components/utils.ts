import { Order } from '../store/types';

export const sortingOptions = ['name', 'budget'];
export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
   if (b[orderBy] < a[orderBy]) {
      return -1;
   }
   if (b[orderBy] > a[orderBy]) {
      return 1;
   }
   return 0;
};

export function getComparator<Key extends keyof any>(
   order: Order,
   orderBy: Key
): (
   a: { [key in Key]: number | string },
   b: { [key in Key]: number | string }
) => number {
   return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

export const formatBudget = (budget: number) => {
   let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   });
   return USDollar.format(budget);
};
