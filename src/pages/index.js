import React from 'react';
import Layout from '../layout';
import Projects from '../containers/projects';
import AboutMe from '../containers/aboutme';
import Contact from '../containers/contact';
import SEO from '../utils/seo';
import './main.css';
import 'typeface-montserrat';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Projects />
    <AboutMe />
    <Contact />
  </Layout>
);

export default IndexPage;
