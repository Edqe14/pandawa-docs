import React from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

export default function Example({ url, label }) {
  return (
    <Admonition type="tip">
      Read more about <Link to={url}>{label}</Link>.
    </Admonition>
  );
}