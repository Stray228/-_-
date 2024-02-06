import React from 'react';

import { ThemeSwitcher } from '../ThemeSwitcher';

import style from './HeaderTop.module.scss';

import { android, androidGray, apple, appleGray, facebook, google, instagram, phone, phoneGray, set, setGray, twitter, wifi, youtube } from '../../assets/icons';

export const listItemMenu = [
  { item: "Menu item 1", icon: phone, iconGray: phoneGray, alt: 'phone' },
  { item: "Menu item 2", icon: set, iconGray: setGray, alt: 'set' },
  { item: "Menu item 3", icon: android, iconGray: androidGray, alt: 'android' },
  { item: "Menu item 4", icon: apple, iconGray: appleGray, alt: 'apple' },
];

const listIcon = [
  { icon: facebook, alt: facebook },
  { icon: twitter, alt: twitter },
  { icon: instagram, alt: instagram },
  { icon: youtube, alt: youtube },
  { icon: google, alt: google },
  { icon: wifi, alt: wifi }
];

const HeaderTop: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <ul className={style.listItem}>
          {listItemMenu.map(({ item, icon, alt }) => (
            <a className={style.list} href="/" key={item}>
              <img className={style.listImg} src={icon} alt={alt} />
              <li className={style.listli}>{item}</li>
            </a>
          ))}
        </ul>
        <nav className={style.listIcon}>
          {listIcon.map(({ icon, alt }, index) => (
            <a className={style.iconli} href="/" key={index}>
              <img className={style.iconImg} src={icon} alt={alt} />
            </a>
          ))}
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
