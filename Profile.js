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
import rings from "../../image/img_14.png";
import snakefulls from "../../image/full-snake.png";
import fullhearth from "../../image/img_15.png";
import pluse1 from "../../image/img_17.png";
import plusemain from "../../image/pluse.png";
import leftring from "../../image/half-ring.png";
import centerhearth from "../../image/center-hearth.png";
import rightRing from "../../image/img_16.png";
import rightHearth from "../../image/right-hearth.png";
import scrollDown from "../../image/scroll-down.png";
import bonus from "../../image/img_13.png"
import ticketText from "../../image/tickettext.png";
import PhoneInput from "../PhoneInput";
import {NavLink, Route, Routes, useLocation} from "react-router-dom";
import Gifts from "./Gifts";
import Tickets from "./Tickets";
import SelectProfile from "./SelectProfile";
import React, {useEffect} from "react";
import PopupTicket1 from "../PopupTicket/PopupTicket1";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { IconName } from "react-icons/fa6";

export default function Profile(props){
    function openPopup() {
        document.getElementById("popup-ticket1").style.display = "block";
    }

    function toggleMenu() {
        const navLists = document.querySelector('.header-profile .header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('.header-profile .menu');
        navList.classList.toggle('show');
    }
    const login = localStorage.getItem('login');
    const countTicketsTotal = localStorage.getItem('countTicketsTotal');
    const countTicketsApproved = localStorage.getItem('countTicketsApproved');
    const countTicketsRejected = localStorage.getItem('countTicketsRejected');

    useEffect(() => {
    const inputElement = document.querySelector('.popupCode-input-profile');
    inputElement.value = login;
    }, []);
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
                <div className={'main-profile'} id={'main-profile'}>
                    <div className={'main-items main-items-profile'}>
                        <div className={'global-name'}>
                            <p>Личный кабинет</p>
                        </div>
                        <div className="container-profile">
                            <div className="left-column-profile">
                                <div className={'left-first-profile'}>
                                    <p className={'left-first-profile-p'}>Вы зарегистрировали</p>
                                    <p className={'left-first-profile-p2'}>{countTicketsTotal}
                                        <a className={'left-first-profile-a2'}>билетов</a></p>
                                    <div className="white-line"></div>
                                    <p className={'left-first-profile-p3'}>{countTicketsApproved} билетов одобрены</p>
                                    <p className={'left-first-profile-p3'}>{countTicketsRejected} билетов отклонены</p>
                                    <a onClick={openPopup} className={'button-animation-text-profile'}>
                                        <b>Зарегистрировать билет</b> </a>
                                </div>
                                <div className={'backdrop-profile1'}></div>
                                <div className={'profile-right-float-img'}>
                                    <img className={'profile-snake-left'} src= {snake}/>
                                    <img className={'profile-rings'} src= {rings}/>
                                    <img className={'profile-full-hearth'} src= {fullhearth}/>
                                    <img className={'profile-pluse1'} src= {pluse1}/>
                                    <img className={'profile-left-half-ring'} src= {leftring}/>
                                    <img className={'profile-center-hearth'} src= {centerhearth}/>
                                    <img className={'profile-right-ring'} src= {rightRing}/>
                                </div>
                                <div className={'left-second-profile'}>
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
                                <div className={'right-second-profile'}>
                                    <div className={'content-from-left'}>
                                    <p className={'right-second-profile-p'}>Данные профиля</p>
                                    <p className={'right-second-profile-p2'}>Номер телефона</p>
                                        <input className={'popupCode-input-profile'} type="tel" value={login} readOnly />
                                    <p className={'right-second-profile-p3'}><a>Изменить пароль</a></p>
                                    </div>
                                </div>
                                <div className={'backdrop-profile2'}></div>
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

                <PopupTicket1/>
            </footer>
        </header>


    );
}
