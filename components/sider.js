import { Menu, Icon } from 'antd';
import React, {Component} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import WithDva from "../utils/store";

class Sider extends Component {
  static async getInitialProps({ req, pathname }) {
    return {pathname: Router.router.pathname}
  }
  state = {
    mode: 'inline',
    theme: 'light',
  };
  componentDidMount () {

  }
  render() {
    const goGrid = () => {
      Router.push('/grid')
    }
    console.log(123, this.props, Router);
    const {index} = this.props;
    return (
      <div>
        <Menu
          style={{background: 'none'}}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="/">
            <Link href='/'>
              <a>
                <Icon type="mail" />
                路由1：列表页面
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/grid" onClick={goGrid}>
            <Icon type="calendar" />
            路由2：网格布局测试
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}


export default  WithDva((state) => { return { index: state.index }; })(Sider);
