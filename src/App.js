import { useTranslation } from 'react-i18next';
import './App.css';
import useLocalStorage from './hooks/use-localstorage';
import i18n from './i18n';

function App() {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'en');

    const selectedEn = () => {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    const selectedRu = () => {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        }
    const selectedLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value)
    }
    return (
        <div className='App'>  
        <div className='buttons'>
            <button className='english' onClick={selectedEn}>

            </button>
            <button className = 'russian' onClick={selectedRu}>

            </button>
        </div>
            <img className="photo"></img>
            <h2 className = "TextOfUser">{t('Name')}</h2>
            <div>{t('Text')}</div>
          
          <select onChange={selectedLanguage}>
            <option value ={"en"}>En</option>
            <option value ={"ru"}>Ru</option>
          </select>
        </div>
    );
    }
export default App;
