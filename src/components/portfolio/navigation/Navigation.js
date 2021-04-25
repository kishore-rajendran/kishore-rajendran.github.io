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
            "c-nav-bar "
            + (hideNavBar ? "c-nav-bar--hide " : "")
            + (lastScrollY > 80 ? "c-nav-bar--shadow" : "")
        }>
            <div className="c-logo c-logo--green c-logo--large c-nav-bar__logo">KR</div>
            <div className="c-nav-bar__inner">
                <div className="c-ham-menu c-ham-menu--green c-ham-menu--large c-ham-menu--hide c-nav-bar__ham-menu" onClick={() => {
                    setIsMenuBarOpen(!isMenuBarOpen);
                }}>
                    <i className={"fas fa-" + (isMenuBarOpen ? "times" : "bars")}></i>
                </div>
                <ol className={"c-menu-bar c-menu-bar--lightest-slate " + (!isMenuBarOpen ? "c-menu-bar--hide" : "")}>
                    {navBarTabs.map(tabs =>
                        <li key={tabs} className="c-menu-bar__item c-menu-bar__item--hover-green">
                            <a href={"#" + tabs} className="c-menu-bar__link" onClick={closeMenuBar}>
                                {tabs}
                            </a>
                        </li>
                    )}
                    <a href='/resume.pdf' className="o-btn o-btn--green o-btn--xs c-menu-bar__btn">
                        Resume
                    </a>
                </ol>
            </div>
        </nav>
    )
}

export default Navigation;
