interface IMainProps {
  children: React.ReactNode;
}

interface INotification {
  type: 'success' | 'error';
  message: string;
  description: string;
}

interface ITransactionForm {
  name: string;
  amount: string;
}

interface ITransactionList {
  transactionList: [ITransaction];
}

interface ITransaction {
  id: string;
  name: string;
  amount: string;
  dateCreated: string;
}
