import styles from './Home.module.css'
import { useTranslation } from 'react-i18next';


const Home = () => {

  const { t } = useTranslation();

return (
  <div className={styles['container']}>
    <h2 className={styles['heading']}>
        {t('home.welcome')}
    </h2>

    <h1 className={styles['heading-name']}>
        {t('home.schoolName')}
    </h1>

    <p className={styles['description']}>
        {t('home.description')}
    </p>
</div>


)

}

export default Home