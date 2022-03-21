import React from 'react';
import Admonition from '@theme/Admonition';

export default function Example({ url, label }) {
  return (
    <Admonition type="tip">
      Read more about <a href={url}>{label}</a>.
    </Admonition>
  );
}