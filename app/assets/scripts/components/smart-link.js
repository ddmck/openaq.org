'use strict';
import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

/**
 * Switches between a `a` and a `Link` depending on the url.
 */
export default class SmartLink extends React.PureComponent {
  render () {
    const { to } = this.props;
    const props = _.omit(this.props, 'to');

    return /^https?:\/\//.test(to) ? (
      <a href={to} {...props} target="_blank" rel="noopener noreferrer" />
    ) : (
      <Link to={to} {...props} />
    );
  }
}

SmartLink.propTypes = {
  to: T.string
};
