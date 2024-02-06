import { useTheme } from '../context';

import { logoFooter, logoFooterDark } from '../../assets/image';
import style from './Footer.module.scss'
import {
  facebookFooter, googleFooter, instagramFooter, twitterFooter, wifiFooter, youtubeFooter, facebookFooterDark, twitterFooterDark, instagramFooterDark, youtubeFooterDark, googleFooterDark, wifiFooterDark
} from '../../assets/icons';


const cardList = [
  { light: facebookFooter, dark: facebookFooterDark, alt: "facebookFooter" },
  { light: twitterFooter, dark: twitterFooterDark, alt: "twitterFooter" },
  { light: instagramFooter, dark: instagramFooterDark, alt: "instagramFooter" },
  { light: youtubeFooter, dark: youtubeFooterDark, alt: "youtubeFooter" },
  { light: googleFooter, dark: googleFooterDark, alt: "googleFooter" },
  { light: wifiFooter, dark: wifiFooterDark, alt: "wifiFooter" },
];

const footerLinks = [
  {
    title: "Categhory",
    items: ["item 1", "item 3", "item 4", "item 5", "item 6"]
  },
  {
    title: "Play better",
    items: ["item 1", "item 2", "item 3", "item 4", "item 5"]
  },
  {
    title: "Useful links",
    items: ["link", "link", "link", "link", "link"]
  }
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.card}>
          <img className={style.cardTitle} src={isDarkMode ? logoFooterDark : logoFooter} alt='footer' />
          <div className={style.cardsubTitle}>Lorem Ipsum is simply dummy</div>
          <p className={style.cardText}>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
          <ul className={style.cardList}>
            {cardList.map(({ light, dark, alt }, index) => (
              <li key={index}>
                <a href="/">
                  <img className={style.logo} src={isDarkMode ? dark : light} alt={alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.footerWrapperLink}>
          <div className={style.footerLinks}>
            {footerLinks.map((section, index) => (
              <div key={index} className={style.footerLink}>
                <h4 className={style.footerLinkTitle}>{section.title}</h4>
                <ul className={style.footerLinkList}>
                  {section.items.map((item, itemIndex) => (
                    <li className={style.footerLinkItem} key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={style.footerCopy}>Copyright © 2024. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;