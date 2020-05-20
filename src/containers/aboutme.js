import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../components/Section';
import ResumeButton from '../components/ResumeButton';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  max-width: 45em;
  margin: auto;
  padding-bottom: 3em;

  text-align: justify;
  line-height: 1.5em;
`;

const About = styled.div`
  p {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }

  strong {
    font-weight: 600;
    color: ${(props) => props.theme.colors.red};
  }
`;

const Others = styled.div`
  margin-bottom: 2em;

  h3 {
    font-size: 1em;
    font-weight: bold;
    margin: 2em 0 1em 0;
  }

  p {
    font-size: 0.9em;
  }
`;
const Image = styled(Img)`
  width: 150px;
  height:150px;
  margin:auto;
  border-radius:50%;
  margin-bottom:30px;

`;
const Projects = () => {
  const { aboutMe } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "aboutme.md" }) {
        childMarkdownRemark {
          frontmatter {
            skills
            technologies
            publications
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          html
        }
      }
    }
  `);

  const { frontmatter, html } = aboutMe.childMarkdownRemark;
  const { skills, technologies,image} = frontmatter;
  const publications = frontmatter.publications;
  console.log(image);

  return (
    <Section title="about me">
      <Wrapper>
      <Image
          fluid={image.childImageSharp.fluid}
          alt='profile'
          className="img"
        />
        <About dangerouslySetInnerHTML={{ __html: html }} />
        <Others>
          <h3>Skills</h3>
          <p>{skills}</p>
          <h3>Technologies</h3>
          <p>{technologies}</p>
          <h3>Publications</h3>
          {publications.map((publication) => {
            const [title, link] = publication.split(':::');
            return (
              <>
              <p
                key={title}
              >
                {title}
              </p>
              <br/>
              </>
            );
          })}
        </Others>
        <ResumeButton />
      </Wrapper>
    </Section>
  );
};

export default Projects;
