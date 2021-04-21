import React, { useState, useEffect, useCallback } from 'react';
import './style.scss';

function Navigation() {
    const [hideNavBar, setHideNavBar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
    const navBarTabs = ['About', 'Experience', 'Project', 'Contact'];
    const closeMenuBar = useCallback(() => setIsMenuBarOpen(false), []);

    useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 858px)");
        mediaQuery.addListener(closeMenuBar);
        return () => {
            mediaQuery.removeListener(closeMenuBar);
        }
    }, [closeMenuBar])

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollY = window.scrollY;
            let bufferHideNavBar = 100;
            let hideNavBarOnScroll = currentScrollY > bufferHideNavBar && currentScrollY > lastScrollY;
            setHideNavBar(hideNavBarOnScroll);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY]);

    useEffect(() => {
        let bodyTag = document.querySelector('body');
        let contentSection = document.querySelector('.page-content');

        if (isMenuBarOpen) {
            bodyTag.classList.add('body--blur');
            contentSection.addEventListener('click', closeMenuBar);
            return;
        }

        bodyTag.classList.remove('body--blur');
        contentSection.removeEventListener('click', closeMenuBar);

        return () => {
            bodyTag.classList.remove('body--blur');
            contentSection.removeEventListener('click', closeMenuBar);
        }
    }, [isMenuBarOpen, closeMenuBar])

    return (
        <nav className={
            "nav-bar "
            + (hideNavBar ? "nav-bar--hide " : "")
            + (lastScrollY > 80 ? "nav-bar--shadow" : "")
        }>
            <div className="logo logo--green logo--large nav-bar__logo">KR</div>
            <div className="nav-bar__inner">
                <div className="ham-menu ham-menu--green ham-menu--large ham-menu--hide nav-bar__ham-menu" onClick={() => {
                    setIsMenuBarOpen(!isMenuBarOpen);
                }}>
                    <i className={"fas fa-" + (isMenuBarOpen ? "times" : "bars")}></i>
                </div>
                <ol className={"menu-bar menu-bar--lightest-slate " + (!isMenuBarOpen ? "menu-bar--hide" : "")}>
                    {navBarTabs.map(tabs =>
                        <li key={tabs} className="menu-bar__item menu-bar__item--hover-green">
                            <a href={"#" + tabs} className="menu-bar__link" onClick={closeMenuBar}>
                                {tabs}
                            </a>
                        </li>
                    )}
                    <a href='/resume.pdf' className="resume-btn resume-btn--green resume-btn--sm resume-btn--xs menu-bar__resume-btn">
                        Resume
                    </a>
                </ol>
            </div>
        </nav>
    )
}

export default Navigation;
