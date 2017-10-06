import PropTypes from 'prop-types';
import React from 'react';

import PageHeader from '../components/PageHeader';
import Main from '../components/Main';
import Default from './index';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function LayoutLayout({ children, ...props }) {
  return (
    <Default {...props}>
      <PageHeader
        title="Utilities"
        subTitle={''}
      />
      <Main location={props.location}>
        {children()}
      </Main>
    </Default>
  );
}

LayoutLayout.propTypes = propTypes;

export default LayoutLayout;
