import { useContext } from 'react';
import { ThemeContext, themes } from '../../../context/themeContext';
import s from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={s.container}>
      <label className={s.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === themes.light}
        />
        <span className={`${s.slider} ${s.round}`}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
