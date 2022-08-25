import { atom } from 'recoil';

export const transactionListState = atom({
  key: 'TransactionList',
  default: [
    {
      id: 'trans-1',
      name: 'August Income',
      amount: '80000',
      dateCreated: Date.now(),
    },
    {
      id: 'trans-2',
      name: 'Internet',
      amount: '-1800',
      dateCreated: Date.now(),
    },
  ],
});

export const transactionState = atom({
  key: 'TransactionValue',
  default: {
    id: '',
    name: '',
    amount: '',
    dateCreated: null,
  },
});
