import style from './ThemeSwitcher.module.scss';
import { dark, light } from '../../assets/icons';
import { useTheme } from '../context';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className={style.theme} onClick={toggleTheme}>
      <img className={style.themeImg} src={isDarkMode ? dark : light} alt={isDarkMode ? dark : light} />
    </button>
  );
};

export { ThemeSwitcher };
