import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const FilterLogo = ({ filename }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      return <img className="cause-filter-logo" alt={filename} src={image.node.publicURL} name={filename} />;
    }}
    
  />
);

FilterLogo.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  cat: PropTypes.string,
};

export default FilterLogo;