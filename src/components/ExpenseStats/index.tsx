import React from 'react';
import { Row, Col } from 'antd';
import CurrencyFormat from 'react-currency-format';
import { useRecoilValue } from 'recoil';
import { transactionListState } from '../../recoil/atoms';

const ExpenseStats: React.FunctionComponent = () => {
  const transactionList = useRecoilValue(transactionListState);

  const amounts = transactionList.map(transaction =>
    parseFloat(transaction.amount)
  );
  const remainingBalance = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <React.Fragment>
      <p className="text-5xl font-light text-gray-800 mb-6">Expense Stats</p>
      <p className="text-2xl font-light text-gray-400 mb-2">
        Remaining Balance
      </p>
      <p className="text-5xl font-light text-gray-800 mb-10">
        <CurrencyFormat
          value={remainingBalance}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₱'}
        />
      </p>
      <Row gutter={16}>
        <Col span={12}>
          <p className="text-xl font-light text-gray-400 mb-2">Income</p>
          <p className="text-3xl font-light text-green-500 mb-5">
            <CurrencyFormat
              value={income}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₱'}
            />
          </p>
        </Col>
        <Col span={12}>
          <p className="text-xl font-light text-gray-400 mb-2">Expense</p>
          <p className="text-3xl font-light text-red-500 mb-5">
            <CurrencyFormat
              value={expense}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₱'}
            />
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ExpenseStats;
