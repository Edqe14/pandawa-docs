import React from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

export default function Example({ url, label, inline }) {
  if (inline) {
    return (
      <i>Read more about <strong>{label}</strong> <Link to={url}>here</Link></i>
    )
  }

  return (
    <Admonition type="tip">
      Read more about <Link to={url}>{label}</Link>.
    </Admonition>
  );
}