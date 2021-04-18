import React, { useState, useEffect, useCallback } from 'react';
import classes from './Navigation.module.scss';

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
        let contentSection = document.querySelector('#content');

        if (isMenuBarOpen) {
            bodyTag.classList.add('blur');
            contentSection.addEventListener('click', closeMenuBar);
            return;
        }

        bodyTag.classList.remove('blur');
        contentSection.removeEventListener('click', closeMenuBar);

        return () => {
            bodyTag.classList.remove('blur');
            contentSection.removeEventListener('click', closeMenuBar);
        }
    }, [isMenuBarOpen, closeMenuBar])

    return (
        <div className={
            classes.navBar
            + " "
            + (hideNavBar ? classes.hideNavBar : "")
            + " "
            + (lastScrollY > 80 ? classes.navBarShadow : "")
        }>
            <nav>
                <div className={classes.logo}>KR</div>
                <div className={classes.navItemsWrapper}>
                    <div className={classes.menuBar} onClick={() => {
                        setIsMenuBarOpen(!isMenuBarOpen);
                    }}>
                        <i className={"fas fa-" + (isMenuBarOpen ? "times" : "bars")}></i>
                    </div>
                    <ol className={classes.navItemsContainer + " " + (!isMenuBarOpen ? classes.hideMenuBar : "")}>
                        {navBarTabs.map(tabs =>
                            <li key={tabs}>
                                <a href={"#" + tabs} onClick={closeMenuBar}>
                                    {tabs}
                                </a>
                            </li>
                        )}
                        <a href='/resume.pdf' className={classes.resumeBtn}>
                            Resume
                        </a>
                    </ol>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
