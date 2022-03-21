import React from 'react';
import Details from '@theme/Details';

export default function Example({ children }) {
  return (
    <Details summary={(<summary>Template 📋</summary>)}>
      <p><i>Replace the things encapsulated with <code>{'<>'}</code> including itself as well.</i></p>

      {children}
    </Details>
  );
}