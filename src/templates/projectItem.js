import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectWrapper = styled.article`
  position: relative;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows[1]};
  border-radius: 4px;
  margin-bottom: 2em;
  padding: 1em;

  transition: transform 0.1s ease-in-out;

  font-size: 1em;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.shadows[7]};
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3em;
  margin-top: 1em;

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Title = styled.h3`
  font-size: 1.4em;
  text-transform: capitalize;
`;

const Stack = styled.h4`
  font-size: 0.75em;
  line-height: 1.2em;
  opacity: 0.8;
`;

const ImgSummaryContainer = styled.div`
  position: relative;

  &:hover {
    .summary {
      display: flex;
    }

    .img {
      opacity: 0.2;
      filter: blur(5px);
    }
  }
`;

const Image = styled(Img)`
  width: 100%;
`;

const Summary = styled.div`
  position: absolute;
  display: none;
  bottom: 0;

  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2em;
  line-height: 1.5em;
  font-size: 1.1em;
`;

const Link = styled.a`
  display: block;
  font-weight: normal;
  min-width: 80px;
  margin-left: 0.5em;

  &:hover {
    font-weight: 500;
  }
`;

const ProjectItem = ({ project }) => {
  const { title, stack, source, live, image } = project.frontmatter;
  const summary = project.html;
  return (
    <ProjectWrapper>
      <ImgSummaryContainer>
        <Image
          fluid={image.childImageSharp.fluid}
          alt={`${title} project screenshot`}
          imgStyle={{
            objectFit: 'contain',
          }}
          className="img"
        />
        <Summary
          dangerouslySetInnerHTML={{ __html: summary }}
          className="summary"
        />
      </ImgSummaryContainer>
      <Details>
        <span>
          <Title>{title}</Title>
          <Stack>{stack}</Stack>
        </span>
        <span>
          <Link href={source} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} /> Source
          </Link>
          <Link href={live} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} /> Demo
          </Link>
        </span>
      </Details>
    </ProjectWrapper>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      live: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}).isRequired,
        }),
      }).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
