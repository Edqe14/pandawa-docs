import React from 'react';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details';

const title = (isPlural) => {
  let text = 'Example';

  if (isPlural) text += 's';

  return text;
}

export default function Example({ children, dropDown, plural }) {
  return (
    <>
      {!dropDown && (
        <Admonition type="info" title={`${title(plural)} 🧪`}>
          {children}
        </Admonition>
      )}

      {dropDown && (
        <Details summary={(<summary>{`${title(plural)} 🧪`}</summary>)}>
          {children}
        </Details>
      )}
    </>
  );
}
