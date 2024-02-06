import React, { useEffect, useState } from 'react'

import style from './Banner.module.scss'

import { banner, bannerInfo, union } from '../../assets/image'
import { android, apple, download, moreInfo } from '../../assets/icons'

const buttonItem = [
  { icon: android, text: 'Android' },
  { icon: apple, text: 'iOS' },
  { icon: download, text: 'Download on PC' },
]

const listItem = ['Lorem Ipsum is simply dummy', 'item', 'item', 'item', 'item',]

const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

const Banner: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  const initialSelectedNumber = 7;
  const [selectedNumber, setSelectedNumber] = useState<number | null>(initialSelectedNumber);
  useEffect(() => {
    const totalNumbers = numbers.length;

    const listRating = document.querySelector(`.${style.listRating}`) as HTMLElement | null;

    if (listRating) {
      listRating.style.background = generateLinearGradient(selectedNumber, totalNumbers);
    }
  }, [selectedNumber]);

  const generateLinearGradient = (selected: number | null, total: number): string => {
    if (selected !== null && selected >= 3) {
      const percent = ((selected + 1) / total) * 100;

      return `linear-gradient(to right, #DC4A19 0%,  #FCC539 ${percent}%, transparent ${percent}%, transparent 100%)`;
    } if (selected !== null && selected < 3) {
      const percent = ((selected + 5) / total) * 100;
      console.log(percent);


      return `linear-gradient(to right, #DC4A19 0%,  #FCC539 ${percent}%, transparent ${percent}%, transparent 100%)`;
    } else {
      return 'transparent';
    }
  };
  return (
    <div className={`${style.wrapper} ${isToggled ? style.wrapperToogled : ''}`}>
      <div className={style.overlay}></div>
      <img className={style.banner} src={banner} alt="banner" />
      <div className={style.left}>
        <div className={style.infoLeft}>
          <img className={style.iconLeft} src={bannerInfo} alt="bannerInfo" />
          <div className={style.wrapperLeft}>
            <h3 className={style.titleLeft}>Lorem Ipsum is simply dummy</h3>
            <div className={style.buttonWrapper}>
              {buttonItem.map((button) => (
                <button className={style.button}>
                  <img className={style.buttonImg} src={button.icon} alt={button.text} />
                  <div className={style.buttonTitle}>{button.text}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <ul className={style.leftList}>
          {listItem.map((listItem) => (
            <a href="/">
              <li className={style.leftListItem}>{listItem}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className={style.Right}>
        <div className={style.rating}>
          <div className={style.ratingWrapper}>
            <img className={style.ratingText} src={union} alt="rating" />
            <div className={style.ratingSpan}>6.4</div>
          </div>
          <div className={style.infoRight}>
            <h4 className={style.infoTitle}>Players</h4>
            <p className={style.infoText}>12 votes</p>
            <div className={style.info}>
              Your rating:
              <span>5.2</span>
            </div>
          </div>
        </div>
        <div className={style.listRating}>
          <span className={style.listTitle}>Note</span>
          <ul className={style.listItemRight}>
            {numbers.map((number) => (
              <li
                key={number}
                className={`${style.listListRight} ${selectedNumber && number <= selectedNumber ? style.active : ''} ${selectedNumber && number > selectedNumber ? style.grayedOut : ''}`}
                onClick={() => setSelectedNumber(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={style.toogle} onClick={handleToggleClick}>
        <img className={style.more} src={moreInfo} alt="burger" />
      </button>
    </div>
  )
}

export default Banner