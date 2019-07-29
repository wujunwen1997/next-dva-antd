import React, { Component } from 'react'
import Link from 'next/link'
import WithDva from '../utils/store';
import Layout from '../components/layout'
import s from '../css/grid.scss'

class Home extends Component {
  state = {
    head: {
      title: '这是网格布局页'
    }
  };
  render() {
    return(
      <Layout {...this.state}>
        <div className={s.con}>
          <div className={s.item1}>1</div>
          <div className={s.item2}>2</div>
          <div className={s.item3}>3</div>
          <div className={s.item4}>4</div>
          <div className={s.item5}>5</div>
          <div className={s.item6}>6</div>
          <div className={s.item7}>7</div>
          <div className={s.item8}>8</div>
        </div>
      </Layout>
    )
  }
}

export default WithDva((state) => { return { index: state.index }; })(Home);
