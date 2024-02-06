import { useTheme } from '../context';

import { article, articles } from '../../assets/image';
import { dateDark, dates, userDark, users } from '../../assets/icons';

import style from './Article.module.scss';

const routeList = ["Home", "Lorem Ipsum is", "Lorem Ipsum is simply dummy"]

const itemsList = [
  { title: "Lorem Ipsum is simply dummy", photo: articles, user: "Alco", date: '26 janvier 2023' },
  { title: "Lorem Ipsum is simply dummy", photo: articles, user: "Alco", date: '26 janvier 2023' },
  { title: "Lorem Ipsum is simply dummy", photo: articles, user: "Alco", date: '26 janvier 2023' },
  { title: "Lorem Ipsum is simply dummy", photo: articles, user: "Alco", date: '26 janvier 2023' },
]

const Article = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={style.wrapper}>
      <div className={style.left}>
        <ul className={style.nav}>
          {routeList.map((route, index) => (
            <a href="/" key={index}>
              <li className={style.navList}>
                {route}
              </li>
            </a>
          ))}
        </ul>
        <h1 className={style.title}>Lorem Ipsum is simply dummy</h1>
        <div className={style.info}>
          <p className={style.infoText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className={style.infoArticles}>
            <div className={style.titleInfo}>Similar articles</div>
            <div className={style.infoItems}>
              {itemsList.map(({ title, photo, user, date }) => (
                <div className={style.infoItem}>
                  <img className={style.itemImg} src={photo} alt="photo" />
                  <div className={style.infoTitle}>{title}</div>
                  <div className={style.textInfo}>
                    <div className={style.userWrapper}>
                      <img src={isDarkMode ? userDark : users} alt="user" />
                      <p className={style.infoUser}>{user}</p>
                    </div>
                    <div className={style.userWrapper}>
                      <img src={isDarkMode ? dateDark : dates} alt="date" />
                      <p className={style.infoUser}>{date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className={style.image} src={article} alt="article" />
    </section>
  )
}

export default Article