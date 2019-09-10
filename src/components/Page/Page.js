import React, { Component } from 'react';
import PropTypes from 'prop-types';

import persons from '../../mock/persons.json';
import businessModules from '../../mock/businessModules.json';
import englishModules from '../../mock/englishModules.json';
import businessSkills from '../../mock/businessSkills.json';
import englishSkills from '../../mock/englishSkills.json';
import teachers from '../../mock/teachers.json';
import WhoWeAreList from '../../mock/WhoWeAreList.json';

import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import AdditionalModal from '../AdditionalModal/AdditionalModal';
import ModalButton from '../ModalButton/ModalButton';
import PersonList from '../PersonList/PersonList';
import ModulesList from '../ModulesList/ModulesList';
import SkillsList from '../SkillsList/SkillsList';
import TeachersSlider from '../TeachersSlider/TeachersSlider';
import EducationFormatList from '../EducationFormatList/EducationFormatList';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Footer from '../Footer/Footer';

const h2Style = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  textAlign: 'center',
  backgroundColor: '#FFF',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '1.2',
  marginBottom: 30,
};

const h2Style768 = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  margin: '20px auto',
  backgroundColor: '#FFF',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 500,
};

const h2Style1024 = {
  width: 'min-content',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
  padding: '12px 6px',
  margin: '30px auto',
  backgroundColor: '#FFF',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  textAlign: 'center',
  fontSize: 34,
  fontWeight: 400,
};

const h1Style = {
  color: '#FAFAFA',
  textTransform: 'uppercase',
  margin: '17vw 0 13vh 8px',
  lineHeight: '1.1',
  textAlign: 'center',
  fontSize: 13,
};

const h1Style768 = {
  color: '#FFF',
  textTransform: 'uppercase',
  margin: '11vw 0 32px 8px',
  lineHeight: '1.1',
  textAlign: 'center',
  fontSize: 18,
};

const h1Style1024 = {
  color: '#FFF',
  textTransform: 'uppercase',
  margin: '8.5vw 1em 1em 5vw',
  lineHeight: '1.1',
  fontWeight: '500',
  textAlign: 'center',
  fontSize: 40,
};

const startDate = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  marginBottom: '4vh',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  fontSize: 13,
  fontWeight: 500,
  lineHeight: '1.2',
};

const startDate1024 = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '1.2',
};

const flexColumn = {
  height: '94vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '10vh',
};

const flexColumn2 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 40,
};

const marginBottom50px = { marginBottom: 50 };

const main = { marginBottom: 320 };

const students = {
  width: '90%',
  height: 'auto',
  margin: '0 auto',
  marginBottom: '12vh',
};

const students768 = {
  width: '70%',
  height: 'auto',
  margin: 'auto',
  marginBottom: 35,
};

const students1024 = {
  width: '50%',
  height: 'auto',
  margin: 'auto',
  marginBottom: 25,
};

const mailing = (
  <>
    <p>
      Заповнюючи форму на нашому сайті - ви погоджуєтеся з нашою політикою
      конфіденційності. Також ви погоджуєтеся з тим, що ми маємо право
      розголошувати ваші особисті дані в наступних випадках:
    </p>
    <p>
      <strong>1) З Вашої згоди:</strong>&nbsp;У всіх інших випадках перед
      передачею інформації про Вас третім сторонам наша Компанія
      зобов&apos;язується отримати Ваше явне згоду. Наприклад, наша Компанія
      може реалізовувати спільну пропозицію або конкурс з третьою стороною, тоді
      ми попросимо у Вас дозвіл на спільне використання Вашої особистої
      інформації з третьою стороною.
    </p>
    <p>
      <strong>2) Компаніям, працюючим від нашого особи:</strong>&nbsp;Ми
      співпрацюємо з іншими компаніями, які виконують від нашого особи функції
      бізнес підтримки, в зв&apos;язку з чим Ваша особиста інформація може бути
      частково розкрита. Ми вимагаємо, щоб такі компанії використовували
      інформацію тільки з метою надання послуг за договором; їм забороняється
      передавати цю інформацію іншим сторонам в ситуаціях, відмінних від
      випадків, коли це викликано необхідністю надання обумовлених послуг.
      Приклади функцій бізнес підтримки: виконання замовлень, реалізація заявок,
      видача призів і бонусів, проведення опитувань серед клієнтів і управління
      інформаційними системами. Ми також розкриваємо узагальнену
      неперсоніфіковану інформацію при виборі постачальників послуг.
    </p>
    <p>
      <strong>3) Дочірнім і спільним підприємствам:</strong>&nbsp;Під дочірнім
      або спільним підприємством розуміється організація, не менше 50% пайової
      участі якої належить Компанії. При передачі Вашої інформації партнеру по
      дочірньому або спільному підприємству наша Компанія вимагає не
      розголошувати цю інформацію іншим сторонам в маркетингових цілях і не
      використовувати Вашу інформацію будь-яким шляхом, що суперечить Вашим
      вибором. Якщо Ви вказали, що не хочете отримувати від нашої Компанії
      будь-які маркетингові матеріали, то ми не будемо передавати Вашу
      інформацію своїм партнерам по дочірнім та спільним підприємствам для
      маркетингових цілей.
    </p>
    <p>
      <strong>4) На спільно позиціонуються або партнерських сторінках:</strong>
      &nbsp;Наша Компанія може ділитися інформацією з компаніями-партнерами,
      разом з якими реалізує спеціальні пропозиції і заходи щодо просування
      товару на спільно позиціонуються сторінках нашого сайту. При запиті
      анкетних даних на таких сторінках Ви отримаєте попередження про передачу
      інформації. Партнер використовує будь-яку надану Вами інформацію
      відповідно до власного повідомленням про конфіденційність, з яким Ви
      можете ознайомитися перед наданням інформації про себе.
    </p>
    <p>
      <strong>5) При передачі контролю над підприємством:</strong>&nbsp;Наша
      Компанія залишає за собою право передавати Ваші анкетні дані в
      зв&apos;язку з повною або частковою продажем або трансфертом нашого
      підприємства або його активів. При продажу або трансферт бізнесу наша
      Компанія надасть Вам можливість відмовитися від передачі інформації про
      себе. У деяких випадках це може означати, що нова організація не зможе
      далі надавати Вам послуги або продукти, раніше надані нашою Компанією.
    </p>
    <p>
      <strong>6) Правоохоронним органам:</strong>&nbsp;Наша Компанія може без
      Вашого на те згоди розкривати персональну інформацію третім сторонам по
      кожній із наступних причин: щоб уникнути порушень закону, нормативних
      правових актів або постанов суду; участь в урядових розслідуваннях;
      допомога в запобіганні шахрайства; а також зміцнення або захист прав
      Компанії або її дочірніх підприємств.
    </p>
    <p>
      Вся особиста інформація, яка передана Вами для реєстрації на нашому сайті,
      може бути в будь-який момент змінена або повністю вилучена з нашої бази з
      Вашого запиту. Для цього Вам необхідно зв&apos;язатися з нами будь-яким
      зручним для Вас способом, використовую контактну інформацію, розміщену в
      спеціальному розділі нашого сайту.
    </p>
    <p>
      Якщо Ви захочете відмовитися від отримання листів нашої регулярної
      розсилки, ви можете це зробити в будь-який момент за допомогою
      спеціального посилання, яка розміщується в кінці кожного листа.
    </p>
  </>
);

const policy = (
  <>
    <p>
      Ваша конфіденційність дуже важлива для нас. Ми хочемо, щоб Ваша робота в
      Інтернет по можливості була максимально приємною і корисною, і Ви
      абсолютно спокійно використовували найширший спектр інформації,
      інструментів і можливостей, які пропонує Інтернет.
    </p>
    <p>
      Особиста інформація Членів, зібрана при реєстрації (або в будь-який інший
      час) переважно використовується для підготовки Продуктів або Послуг
      відповідно до Ваших потреб. Ваша інформація не буде передана або продана
      третім сторонам. Однак ми можемо частково розкривати особисту інформацію в
      особливих випадках, описаних в «Згоду з розсилкою»
    </p>
    <p>
      <strong>Які дані збираються на сайті</strong>
    </p>
    <p>
      При добровільній реєстрації на отримання розсилки ви відправляєте своє Імя
      та E-mail через форму реєстрації.
    </p>
    <p>
      <strong>З якою метою збираються ці дані</strong>
    </p>
    <p>
      Ім&apos;я використовується для звернення особисто до вас, а ваш e-mail для
      відправки вам листів розсилок, новин, корисних матеріалів, комерційних
      пропозицій.
    </p>
    <p>
      Ваші ім&apos;я та e-mail не передаються третім особам, ні за яких умов
      крім випадків, пов&apos;язаних з виконанням вимог законодавства.
    </p>
    <p>
      Ви можете відмовитися від отримання листів розсилки і видалити з бази
      даних свої контактні дані в будь-який момент, клікнувши на посилання для
      відписки, присутню в кожному листі.
    </p>
    <p>
      <strong>Як ці дані використовуються</strong>
    </p>
    <p>
      За допомогою цих даних збирається інформація про дії відвідувачів на сайті
      з метою поліпшення його змісту, поліпшення функціональних можливостей
      сайту і, як наслідок, створення якісного контенту і сервісів для
      відвідувачів.
    </p>
    <p>
      Ви можете в будь-який момент змінити налаштування свого браузера так, щоб
      браузер блокував всі файли або оповіщає про відправку цих файлів. Врахуйте
      при цьому, що деякі функції і сервіси не зможуть працювати належним чином.
    </p>
    <p>
      <strong>Як ці дані захищаються</strong>
    </p>
    <p>
      Для захисту Вашої особистої інформації ми використовуємо різноманітні
      адміністративні, управлінські та технічні заходи безпеки. Наша Компанія
      дотримується різних міжнародних стандартів контролю, спрямованих на
      операції з особистою інформацією, які включають певні заходи контролю щодо
      захисту інформації, зібраної в Інтернет.
    </p>
    <p>
      Наших співробітників навчають розуміти і виконувати ці заходи контролю,
      вони ознайомлені з нашим Повідомленням про конфіденційність, норм та
      інструкцій.
    </p>
    <p>
      Проте, не дивлячись на те, що ми прагнемо убезпечити Вашу особисту
      інформацію, Ви теж повинні вживати заходів, щоб захистити її.
    </p>
    <p>
      Ми настійно рекомендуємо Вам вживати всіх можливих заходів обережності під
      час перебування в Інтернеті. Організовані нами послуги і веб-сайти
      передбачають заходи щодо захисту від витоку, несанкціонованого
      використання і зміни інформації, яку ми контролюємо. Незважаючи на те, що
      ми робимо все можливе, щоб забезпечити цілісність і безпеку своєї мережі і
      систем, ми не можемо гарантувати, що наші заходи безпеки допоможуть
      запобігти незаконний доступ до цієї інформації хакерів сторонніх
      організацій.
    </p>
    <p>
      У разі зміни цієї політики конфіденційності ви зможете прочитати про ці
      зміни на цій сторінці або, в особливих випадках, отримати повідомлення на
      свій e-mail.
    </p>
    <p>
      <strong>Відповідно до чинного законодавства</strong>, Адміністрація
      відмовляється від будь-яких запевнень і гарантій, надання яких може іншим
      чином матися на увазі, і відмовляється від відповідальності щодо Сайту,
      Вмісту та їх використання.
    </p>
    <p>
      Ні за яких обставин Адміністрація Сайту не буде нести відповідальності ні
      перед якою стороною за будь-якої прямої, непрямої, особливий або інший
      непрямий збиток в результаті будь-якого використання інформації на цьому
      Сайті або на будь-якому іншому сайті, на який є посилання з нашого сайту,
      виникнення залежності, зниження продуктивності, звільнення або переривання
      трудової активності, а також і відрахування з навчальних закладів, за
      будь-яку упущену вигоду, припинення господарської діяльності, втрату
      програм або даних у ашіх інформаційних системах чи іншим чином, що виникли
      в зв&apos;язку з доступом, використанням або неможливістю використання
      Сайту, Вмісту або будь-якого пов&apos;язаного інтернет-сайту, або
      непрацездатністю, помилкою, недоглядом, перебоєм, дефектом, простоєм в
      роботі або затримкою в передачі, комп&apos;ютерним вірусом або системним
      збоєм, навіть якщо адміністрація буде явно повідомлено про можливість
      такого збитку.
    </p>
    <p>
      Користувач погоджується з тим, що всі можливі суперечки будуть
      вирішуватися за нормами права.
    </p>
    <p>
      Користувач погоджується з тим, що норми і закони про захист прав
      споживачів не можуть бути застосовні до використання їм Сайту, оскільки
      він не робить відплатних послуг.
    </p>
    <p>
      Використовуючи даний Сайт, Ви погоджуєтесь з «Відмовою від
      відповідальності» і встановленими Правилами і приймаєте всю
      відповідальність, яка може бути на Вас покладена.
    </p>
  </>
);

export default class Page extends Component {
  state = {
    isLoading: true,
    isModalOpen: false,
    isMailingOpen: false,
    isPrivacyPolicyOpen: false,
    width: 0,
    error: false,
    ok: false,
  };

  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired,
    location: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('load', () => {
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  openPolicy = () => {
    this.setState({ isPrivacyPolicyOpen: true });
  };

  closePolicy = () => {
    this.setState({ isPrivacyPolicyOpen: false });
  };

  openMailing = () => {
    this.setState({ isMailingOpen: true });
  };

  closeMailing = () => {
    this.setState({ isMailingOpen: false });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  changeError = () => this.setState({ error: true });

  changeOk = () => this.setState({ ok: true });

  render() {
    const {
      isLoading,
      isModalOpen,
      width,
      error,
      ok,
      isMailingOpen,
      isPrivacyPolicyOpen,
    } = this.state;

    const { history } = this.props;

    return (
      <>
        {isLoading && <Loader />}
        <Header typeOfDevice={width}>
          <ModalButton
            content="Записаться на пробное занятие"
            onClick={this.openModal}
          />
        </Header>
        {isModalOpen && (
          <Modal
            ok={ok}
            error={error}
            changeOk={this.changeOk}
            changeError={this.changeError}
            onClick={this.closeModal}
            history={history}
          />
        )}
        {isPrivacyPolicyOpen && (
          <AdditionalModal
            title="ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ"
            content={policy}
            onClick={this.closePolicy}
          />
        )}
        {isMailingOpen && (
          <AdditionalModal
            title="ВІДМОВА ВІД ВІДПОВІДАЛЬНОСТІ"
            content={mailing}
            onClick={this.closeMailing}
          />
        )}
        <main style={main}>
          <section style={flexColumn}>
            <h1
              style={
                // eslint-disable-next-line no-nested-ternary
                width < 768 ? h1Style : width < 1024 ? h1Style768 : h1Style1024
              }
            >
              мы вдохновляем подростков раскрывать <br />
              свой потенциал
            </h1>
            <h2 style={width < 1024 ? startDate : startDate1024}>
              Запуск курса 14 сентября 2019 года
            </h2>
            {width < 1024 ? (
              <img
                style={width < 768 ? students : students768}
                alt="students"
                src="./img/students@1X.png"
              />
            ) : (
              <img
                style={students1024}
                alt="students"
                src="./img/studentsLaptop.png"
              />
            )}
            <ModalButton
              content="Записаться на пробное занятие"
              onClick={this.openModal}
            />
          </section>
          <section style={flexColumn2}>
            <WhoWeAre items={WhoWeAreList} />
          </section>
          <ModulesList
            title1="бизнес старт"
            title2="english"
            items1={businessModules}
            items2={englishModules}
          />
          <ModalButton
            style={marginBottom50px}
            content="Записаться на пробное занятие"
            onClick={this.openModal}
          />
          <SkillsList
            title="приобретенные навыки"
            business={businessSkills}
            english={englishSkills}
          />
          <EducationFormatList
            title="формат обучения"
            onClick={this.openModal}
          />
          <h2
            style={
              // eslint-disable-next-line no-nested-ternary
              width < 768 ? h2Style : width < 1024 ? h2Style768 : h2Style1024
            }
          >
            ЛУЧШИЕ ПОДРОСТКОВЫЕ СТАРТАПЫ
          </h2>
          <PersonList items={persons} />
          <TeachersSlider title="наши преподаватели" teachers={teachers} />
        </main>
        <Footer
          onOpenPolicy={this.openPolicy}
          onOpenMailing={this.openMailing}
        />
      </>
    );
  }
}
