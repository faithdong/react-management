import 'babel-polyfill';
import React from 'react';
import { Layout } from 'antd';
import RouterTabs from './utils/RouterTabs';
import { Route, Switch} from 'react-router-dom';

import A from './pages/About';

const { Header, Content } = Layout;


export default class App1 extends React.Component{

  render() {
    return (
        <Layout>
            <Header >
                <RouterTabs />
            </Header>
            <Content>
              <Switch>
                <Route path="/a" component={A} />
                {/* <Route path="/b" component={B} />
                <Redirect exact from="/" />
                <Route component={NotFound} /> */}
              </Switch>
            </Content>
        </Layout>
    );
  }
}