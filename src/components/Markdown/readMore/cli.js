import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ReadMoreCLI from './';

export default function ReadMoreCLICLI() {
  return (
    <ReadMoreCLI url={useBaseUrl("/docs/getting-started/cli")} label="CLI" />
  );
}