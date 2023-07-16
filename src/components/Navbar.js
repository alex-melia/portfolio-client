import React, { useEffect } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  useEffect(() => {
    const sectionHeroEl = document.querySelector('.section-hero');

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
          document.body.classList.add('sticky');
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove('sticky');
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: '-90px',
      }
    );
    obs.observe(sectionHeroEl);
  });

  useEffect(() => {
    const btnNavEl = document.querySelector('.btn-mobile-nav');
    const headerEl = document.querySelector('.header');
    const linkNavEls = document.querySelectorAll('.nav-link');

    const toggleNav = () => {
      headerEl.classList.toggle('nav-open');
    };

    btnNavEl.addEventListener('click', toggleNav);

    linkNavEls.forEach((linkNavEl) => {
      linkNavEl.addEventListener('click', () => {
        headerEl.classList.remove('nav-open');
      });
    });

    return () => {
      btnNavEl.removeEventListener('click', toggleNav);
      linkNavEls.forEach((linkNavEl) => {
        linkNavEl.removeEventListener('click', () => {
          headerEl.classList.remove('nav-open');
        });
      });
    };
  });

  return (
    <header className='header'>
      <a className='nav-link title' href='/'>
        Alex Melia
      </a>
      <nav className='nav'>
        <ul className='nav-list'>
          <li>
            <a className='nav-link' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='nav-link' href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a className='nav-link' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className='btn-mobile-nav'>
        <AiOutlineMenu
          className='icon-mobile-nav'
          name='menu-outline'
        ></AiOutlineMenu>
        <AiOutlineClose
          className='icon-mobile-nav'
          name='close-outline'
        ></AiOutlineClose>
      </button>
    </header>
  );
};

export default Navbar;
