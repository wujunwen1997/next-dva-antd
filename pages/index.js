import React, { Component } from 'react'
import Link from 'next/link'
import WithDva from '../utils/store';
import Layout from '../components/layout'
import {getTq} from '../services/index'


class Page extends React.Component {
  static async getInitialProps({ req }) {
    const {data} = await getTq();
    console.log(1234567890, data);
    return { data };
  }
  state = {
    head: {
      title: '这是首页'
    }
  };
  render() {
    console.log(123312312, this.props);
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
