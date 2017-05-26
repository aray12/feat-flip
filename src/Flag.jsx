import React from 'react';
import { connect } from 'react-redux';

import { getFlag } from './features';

const noopRender = () => null;

const mapStateToProps = (state, props) => {
  const { name } = props;
  const value = getFlag(state)(name);

  const render = (value ? props.render : props.fallbackRender) || noopRender;

  return { render, value };
}

const Comp = ({ render, value }) => render(value);

export default connect(mapStateToProps)(Comp);
