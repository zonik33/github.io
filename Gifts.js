import ticket from "../../image/ticket.png";
import tickettext from "../../image/tickettext.png";
import ScrollPrizes from "../Scroll/ScrollPrizes";
import ScrollWinners from "../Scroll/ScrollWinners";
import ScrollFaq from "../Scroll/ScrollFaq";
import users from "../../image/users-logo.png";
import Popup from "../PopupReg/Popup";
import PopupCode from "../PopupReg/PopupCode";
import PopupPassword from "../PopupReg/PopupPassword";
import PopupAuth from "../PopapAuth/PopupAuth";
import PopupPassRecovery from "../PopapAuth/PopupPassRecovery";
import Main from "../Main";
import wintohealth from "../../image/wintohealth.png";
import snake from "../../image/snake.png";
import man from "../../image/main-man.png";
import rings from "../../image/ring.png";
import snakefulls from "../../image/full-snake.png";
import fullhearth from "../../image/full-hearth.png";
import pluse1 from "../../image/pluse1.png";
import plusemain from "../../image/pluse.png";
import leftring from "../../image/half-ring.png";
import centerhearth from "../../image/center-hearth.png";
import rightRing from "../../image/right-ring.png";
import rightHearth from "../../image/right-hearth.png";
import scrollDown from "../../image/scroll-down.png";
import bonus from "../../image/img_13.png"
import ticketText from "../../image/tickettext.png";
import PhoneInput from "../PhoneInput";
import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import Profile from "./Profile";
import prizesLeft from "../../image/prizes-left.png";
import bgImagese from "../../image/bg-image.png";
import prizesCenter from "../../image/prizes-center.png";
import whiteRedmond from "../../image/white-redmond-prizes.png";
import prizesRight from "../../image/redmond-prizes.png";
import Tickets from "./Tickets";
import React from "react";
import SelectProfile from "./SelectProfile";
export default function Gifts(props){
    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }

    function toggleMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('header .menu');
        navList.classList.toggle('show');
    }
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
    }
    function toggleMenu() {
        const navLists = document.querySelector('.header-profile .header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('.header-profile .menu');
        navList.classList.toggle('show');
    }
    const location = useLocation();
    return (
        <header className={'header-profile'}>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={'logo-content'}>
                        <img className={'logo-text-profile'} src={tickettext}/>
                        <div className={'header-burger'} onClick={toggleMenu}>
                            <span className={'span-burger'}></span>
                        </div>
                    </div>
                    <div className={'menu'}>
                        <div className={'menu-content-profile'}>
                            <a href={'https://nloto-promo.ru/rules.pdf'}> Правила </a>
                            <a className="smooth" href={'http://localhost:3000/'}> Призы </a>
                            <a className="smooth" href={'http://localhost:3000/'}> Победители </a>
                            <a className="smooth" href={'http://localhost:3000/'}> Faq </a>
                            <a className="smooth backFaq" href={'http://localhost:3000/'}> Обратная связь </a>
                            <SelectProfile/>
                            <img className={'users-logo'} src={users}/>
                            <a onClick={openPopup} className={'shadow-button-animation-text'}> <b>Зарегистрировать билет</b> </a>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className={'main-gifts'} id={'main-gifts'}>
                    <div className={'main-items main-items-profile'}>
                        <div className={'global-name'}>
                            <p>Личный кабинет</p>
                        </div>
                        <div className="container-profile">
                            <div className="left-column-profile left-column-profile-gifts">
                                <div className={'left-first-profile'}>
                                    <p className={'left-first-profile-p'}>Вы зарегистрировали</p>
                                    <p className={'left-first-profile-p2'}>
                                        20 <a className={'left-first-profile-a2'}>билетов</a></p>
                                    <div className="white-line"></div>
                                    <p className={'left-first-profile-p3'}>14 билетов одобрены</p>
                                    <p className={'left-first-profile-p3'}>6 билетов отклонены</p>
                                    <a onClick={openPopup} className={'button-animation-text-profile'}>
                                        <b>Зарегистрировать билет</b> </a>
                                </div>
                                <div className={'backdrop-profile1'}></div>
                                <div className={'gifts-right-float-img'}>
                                    <img className={'profile-snake-left'} src= {snake}/>
                                    <img className={'profile-rings'} src= {rings}/>
                                    <img className={'profile-full-hearth'} src= {fullhearth}/>
                                    <img className={'profile-pluse1'} src= {pluse1}/>
                                    <img className={'profile-left-half-ring'} src= {leftring}/>
                                    <img className={'profile-center-hearth'} src= {centerhearth}/>
                                    <img className={'profile-right-ring'} src= {rightRing}/>
                                </div>
                                <div className={'left-second-gifts'}>
                                    <div>
                                        <img className={'img-bonus'} src={bonus}/>
                                    </div>
                                    <p className={'p-bonus-profile'}>Пригласи друга <br></br>и удвой свои шансы в ежедневном розыгрыше!</p>
                                    <a className={'a-bonus-profile'}>Скопировать ссылку</a>
                                </div>
                            </div>
                            <div className="right-column-profile">
                                <div className={'right-first-profile'}>
                                    <div className={`right-first-block ${location.pathname === '/profile' ? 'active' : ''}`}>
                                        <NavLink
                                            to="/profile"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/profile'}>
                                            <p className={'p-main-profile-color'}>Профиль</p>
                                        </NavLink>
                                    </div>
                                    <div className={`right-second-block ${location.pathname === '/gifts' ? 'active' : ''}`}>
                                        <NavLink
                                            to="/gifts"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/gifts'}>
                                            <p className={'p-main-profile-color'}>Подарки</p>
                                        </NavLink>
                                    </div>
                                    <div className={`right-third-block ${location.pathname === '/tickets' ? 'active' : ''}`}>
                                        <NavLink
                                            to="/tickets"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/tickets'}>
                                            <p className={'p-main-profile-color'}>Билеты</p>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className={'right-second-profile-gifts'}>

                                        <p className={'right-second-gifts-p'}>Ваши подарки</p>

                                        <div className={'prizes-items11-gifts'}>
                                            <div className={'gifts-content-box11'}>
                                                <div className={'gifts-content-box-title-middle1'}><p>Гарантированный приз</p></div>
                                                <img className={'gifts-content-box1-img11'} src={prizesLeft}/>
                                                <img className={'gifts-bg-image1'} src={bgImagese}/>
                                                <div className={'gifts-content-box-title-bot33'}><p>МТС ПРЕМИУМ</p></div>
                                                <div className={'gifts-content-box-title-bot11'}><p>Ваш промо-код для оформления подписки: 3456 </p></div>
                                            <div className={'gifts-content-box-title-bot22'}>
                                                <p>Промо-код нужно ввести на странице <a className={'text-nloto'} href={'https://premium.mts.ru/'}>https://premium.mts.ru/</a></p></div>
                                        </div>
                                            <div className={'gifts-content-box22'}>
                                                <div className={'gifts-content-box-title-middle1'}><p>Ежедневный приз </p></div>
                                                <img className={'gifts-content-box2-img22'} src={prizesCenter}/>
                                                <img className={'gifts-bg-image2'} src={bgImagese}/>
                                                <div className={'gifts-content-box-title-bot222'}><p>МЕДИЦИНСКАЯ</p></div>
                                                <div className={'gifts-content-box-title-bot333'}><p>СТРАХОВКА</p></div>
                                                <div className={'gifts-content-box-title-bot111'}>
                                                    <p>Мы свяжемся с вами в ближайшее время и сообщим информацию,
                                                        как получить приз</p></div>
                                            </div>
                                            <div className={'gifts-content-box33'}>
                                                <div className={'gifts-content-box-title-middle1'}><p>Специальный приз</p></div>
                                                <img className={'gifts-content-box3-img33'} src={prizesRight}/>
                                                <img className={'gifts-bg-image3'} src={bgImagese}/>
                                                <div className={'gifts-content-box-title-bot1111'}>Мы свяжемся с вами в ближайшее время и сообщим информацию,
                                                    как получить приз</div>
                                                <div className={'gifts-content-box-title-bot2222'}>Сертификат</div>
                                                <div className={'gifts-content-box-title-bot3333'}>на 3000 рублей</div>
                                            </div>
                                        </div>
                                    </div>
                                <div className={'backdrop-profile-gifts2'}></div>
                                </div>
                        </div>


                    </div>
                </div>
            </main>
            <footer className={'footer'}>
                <div className="footer-left">
                    <div className={'footer-row'}>
                        <div className={'footer-colm'}>
                            <img className={'footer-logo'} src={ticketText}/>
                        </div>
                    </div>
                    <div className={'footer-medium'}>
                        <div className={'footer-row-left'}>
                            <a>Конфиденциальность</a>
                        </div>
                        <div className={'footer-row-left'}>
                            <a>Пользовательское соглашение</a>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className={'footer-row1'}>
                        <a>Лотерея «Мечталлион», ВГЛ-2Т Спорт Союз, алгоритм определения выигрышей № 4 («Мечталлион»),
                            срок проведения лотереи – до 29.08.2034 г.
                            Подробности на сайте <a className={'text-nloto'} href={'https://nloto.ru/'}>www.nloto.ru</a> и по телефону 8 800 333-7-333.</a>
                    </div>
                    <div className={'footer-row2'}>
                        <a>Специальные призы от Redmond разыгрываются только среди билетов, купленных в «Почте России».</a>
                    </div>
                    <div className={'footer-row3'}>
                        <a>Рекламная акция «Мечталлион. С нами миллионы!», срок проведения с 03.10.2022 по 30.11.2022 г.,
                            включая период вручения призов. Подробности на сайте <a className={'text-nloto'} href={'#'}>www.promo-mechtalion.ru</a>.</a>
                    </div>
                    <div className={'footer-row4'}>
                        <a>Реклама. Рекламодатель ООО «Спортивные Лотереи» (ОГРН: 1195027010386, ИНН: 5003133760).</a>
                    </div>
                </div>

            </footer>
        </header>


    );
}
