import React from 'react';
import { Form, Button, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { transactionListState } from '../../recoil/atoms';
import setNotification from '../../utils/setNotification';

const ExpenseForm: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const [_, setTransactionList] = useRecoilState(transactionListState);

  const handleSubmit = (val: ITransactionForm) => {
    setTransactionList(prevState => [
      ...prevState,
      {
        id: `trans-${prevState.length + 1}`,
        name: val.name,
        amount: val.amount,
        dateCreated: Date.now(),
      },
    ]);
    resetForm();
    setNotification({
      type: 'success',
      message: 'Success!',
      description: 'Transaction has been added.',
    });
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <React.Fragment>
      <p className="text-5xl font-light text-gray-800 mb-5">Add Transaction</p>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Transaction name is required.' }]}
        >
          <Input placeholder="Enter transaction name" size="large" />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Amount is required.' }]}
        >
          <Input placeholder="Enter amount" size="large" />
        </Form.Item>
        <p className="text-gray-400 mb-8 -mt-5">
          Note: Add (-)negative sign when transaction is an expense.
        </p>
        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            Save Transaction
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default ExpenseForm;
