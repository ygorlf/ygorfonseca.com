/* eslint-disable */

import React from 'react';

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment; // estlint-disable-line
  return <Layout {...props}>{element}</Layout>;
}