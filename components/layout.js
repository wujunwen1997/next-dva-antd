import React, {Component, Fragment} from 'react'
import s from '../css/layout.scss'
import Sider from './sider'
import Router from 'next/router'
import Head from './head'

const bcObj = {
  'grid': '网格页面'
}
const getBc = (routeName) => {
  let bc = ['首页'];
  const bcStr = routeName.split('/');
  bcStr.shift();
  if (routeName !== '/') {
    bc = [];
    bcStr.forEach(u => {
      bc.push(bcObj[u])
    })
  }
  return bc
}
class Layout extends Component{
  render() {
    const {head} = this.props;
    const bc = getBc(Router && Router.router && Router.router.pathname || '');
    const bcText = bc.join('/');
    return(
      <Fragment>
        <Head {...head}/>
        <div className={s.layout}>
          <div className={s.item1}>
            <div>LOGO</div>
          </div>
          <div className={s.item2}>
            <Sider/>
          </div>
          <div className={s.item3}>
            <div>{bcText}</div>
          </div>
          <div className={s.content}>{this.props.children}</div>
        </div>
      </Fragment>

    )
  }
}

export default Layout;
