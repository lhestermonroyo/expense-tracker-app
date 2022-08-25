import React from 'react';
import {
  CloseOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
} from '@ant-design/icons';
import { Button, List, Skeleton, Popconfirm, notification } from 'antd';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';
import { useRecoilState, useRecoilValue } from 'recoil';
import { transactionListState } from '../../recoil/atoms';
import setNotification from '../../utils/setNotification';

const ExpenseList: React.FunctionComponent = () => {
  const transactionList = useRecoilValue(transactionListState);
  const [_, setTransactionList] = useRecoilState(transactionListState);

  const amountIsExpense = (amount: string) => {
    return amount.includes('-');
  };

  const formatAmount = (amount: string) => {
    return amount.includes('-') ? amount.replace('-', '') : amount;
  };

  const handleDelete = (transactionId: string) => {
    setTransactionList(
      _.filter(transaction => transaction.id !== transactionId)
    );
    setNotification({
      type: 'success',
      message: 'Success!',
      description: 'Transaction has been deleted.',
    });
  };

  return (
    <React.Fragment>
      <p className="text-5xl font-light text-gray-800 mb-5">
        Transaction History
      </p>
      <List
        itemLayout="horizontal"
        dataSource={transactionList}
        renderItem={item => (
          <List.Item
            actions={[
              <Popconfirm
                placement="top"
                title={`Are you sure you want to delete - ${item.name}?`}
                onConfirm={() => handleDelete(item.id)}
              >
                <Button
                  type="link"
                  size="large"
                  shape="circle"
                  icon={<CloseOutlined />}
                />
              </Popconfirm>,
            ]}
          >
            <Skeleton avatar title={false} loading={!item} active>
              <List.Item.Meta
                avatar={
                  amountIsExpense(item.amount) ? (
                    <p className="text-red-500">
                      <MinusCircleFilled className="text-5xl" />
                    </p>
                  ) : (
                    <p className="text-green-500">
                      <PlusCircleFilled className="text-5xl" />
                    </p>
                  )
                }
                title={
                  <p className="text-lg text-gray-800 mb-1">{item.name}</p>
                }
                description={
                  <p className="text-base text-gray-500 mb-1">
                    {amountIsExpense(item.amount) && '-'}
                    <CurrencyFormat
                      value={formatAmount(item.amount)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₱'}
                    />
                  </p>
                }
              />
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {moment(item.dateCreated).format('h:mma - MMMM D, YYYY')}
                </p>
              </div>
            </Skeleton>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default ExpenseList;
