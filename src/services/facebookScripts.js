import React from 'react';

// eslint-disable-next-line
export const LeadScript = () => <script>{fbq('track', 'Lead')}</script>;

const FacebookScripts = () => (
  <>
    <LeadScript />
  </>
);

export default FacebookScripts;
