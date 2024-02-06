import {
  facebook,
  twitter,
  telegram,
  pinterest,
  reddit,
  heart
} from '../../assets/social/';

import style from './social.module.scss';

const socialList = [
  { icon: facebook, alt: "facebook" },
  { icon: twitter, alt: "twitter" },
  { icon: telegram, alt: "telegram" },
  { icon: pinterest, alt: "pinterest" },
  { icon: reddit, alt: "reddit" },
  { icon: heart, alt: "heart" },
]

const Social = () => {
  return (
    <ul className={style.social}>
      {socialList.map(({ icon, alt }, index) => (
        <li key={index}>
          <a href="/">
            <img src={icon} alt={alt} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social