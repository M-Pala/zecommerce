import React from 'react'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import styled from 'styled-components'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="dest" />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores exercitationem magni itaque officia ipsa laborum iusto, suscipit fuga qui impedit tempora eaque cupiditate eum soluta temporibus accusantium eos a nemo, facilis provident odit ratione culpa molestias? Quos ipsum iste impedit iure ea nemo laboriosam? Debitis accusantium quae facilis distinctio et.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage