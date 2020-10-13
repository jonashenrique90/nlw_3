import React from 'react';
import { PageLanding, ContentWrapper, Location, EnterApp } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiArrowRight } from 'react-icons/fi';


export default function Landing() {
    return (
        <PageLanding>
        <ContentWrapper>
          <img src={logoImg} alt="Happy"/>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          <Location>
            <strong>Juazeiro</strong>
            <span>Bahia</span>
          </Location>
          <EnterApp to="/app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </EnterApp>
        </ContentWrapper>
      </PageLanding>
    )
}
