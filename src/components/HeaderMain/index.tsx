import React, { useState } from 'react'

import { useTheme } from '../context';
import { listItemMenu } from '../HeaderTop';

import { toogle, toogleActive } from '../../assets/icons';
import { logo, logoDark, search } from '../../assets/image';

import style from './HeaderMain.module.scss'


const listItem = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'];

const HeaderMain: React.FC = () => {
  const { isDarkMode } = useTheme();

  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };


  return (
    <div className={`${style.container} ${isToggled ? style.containerToggled : ''}`}>
      <div className={style.logoImgWrapper}>
        <img className={style.logoImg} src={isDarkMode ? logoDark : logo} alt='logo' />
        <button className={style.toogle} onClick={handleToggleClick}>
          <img src={isToggled ? toogleActive : toogle} alt="toogle" />
        </button>
      </div>
      <div className={style.logoWrapper}>
        {listItem.map((item, index) => (
          <a key={index} className={style.logoLink} href="/">
            <li className={style.logoList}>{item}</li>
          </a>
        ))}
      </div>
      <div className={style.input}>
        <input className={style.logoInput} type="text" placeholder='Search for…' />
        <button className={style.buttonInput}>
          <img className={style.imgInput} src={search} alt="search" />
        </button>
      </div>
      <ul className={style.listItem}>
        {listItemMenu.map(({ item, icon, iconGray, alt }) => (
          <a className={style.list} href="/" key={item}>
            <img className={style.listImg} src={isDarkMode ? icon : iconGray} alt={alt} />
            <li className={style.listli}>{item}</li>
          </a>
        ))}
      </ul>
    </div>
  )
}

export default HeaderMain;