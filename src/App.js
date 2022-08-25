import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';
import { Row, Col, Divider } from 'antd';
import Header from './components/Header';
import Main from './components/Main';
import ExpenseStats from './components/ExpenseStats';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  return (
    <RecoilRoot>
      <Header />
      <Main>
        <Row gutter={[40, 16]}>
          <Col span={12}>
            <ExpenseStats />
            <Divider />
            <ExpenseForm />
          </Col>
          <Col span={12}>
            <ExpenseList />
          </Col>
        </Row>
      </Main>
    </RecoilRoot>
  );
};

export default App;
