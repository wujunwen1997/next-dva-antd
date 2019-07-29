import React, { Component } from 'react'
import Layout from '../components/layout'
import {getTq} from '../services/index'


class Page extends Component {
  static async getInitialProps({ req }) {
    const {data} = await getTq();
    return { data };
  }
  state = {
    head: {
      title: '这是首页'
    }
  };
  render() {
    const {data} = this.props;
    return (
      <Layout {...this.state}>
        <ul>
          {
            data.map((_, index) => {
              return(
                <li key={index}>
                  {`${_.day}, ${_.week}, ${_.wea}, ${_.tem}`}
                </li>
              )
            })
          }
        </ul>
      </Layout>
    );
  }
}

export default Page;
