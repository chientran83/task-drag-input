import React from "react"

import styles from "app/styles/components/Home.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)
const Home : React.FC = () : React.ReactElement => {
  return (
    <div className={cx('container')}>
      <div className={cx('side-bar')}></div>
      <div className={cx('view-from')}></div>
      <div className={cx('edit-fied')}></div>
    </div>
  )
}

export default Home;