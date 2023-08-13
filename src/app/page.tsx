'use client'

import Image from 'next/image';
import { Montserrat } from '@next/font/google';

import me from '../assets/me.jpeg';

const montserrat = Montserrat(
  {
    subsets: ['latin'],
    weight: ['400', '700'],
    style: 'normal'
  }
);

export const Home = () => {

  const getWorkExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2016;
  }

  return (
    <main>
      <section id='about' className='about'>
        <div className='hero'>
          <Image
            src={me}
            alt="Ygor Fonseca"
            className='me'
          />
          <div className="intro">
            <h1 className={`title ${montserrat.className}`}>Ygor Fonseca</h1>
            <p className={`text ${montserrat.className}`}>
              Front-End Specialist delivering digital products for {getWorkExperience()} years. React and coffee lover.
              <br />
              <span className='previous-job'>
                Former Co-Founder at
                <a
                  href="https://www.1sti.com.br/"
                  target='_blank'
                  className='previous-company'
                >
                  1STi
                </a>.
              </span>
            </p>
          </div>
        </div>
        <div className="documents">
          <a href="/documents/Ygor_Fonseca_Resume.pdf" download className="button">
            Resume
          </a>
          <a href="/documents/Ygor_Fonseca_Letter.pdf" download className="button">
            Cover Letter
          </a>
        </div>
      </section>
    </main>
  )
};

export default Home;
