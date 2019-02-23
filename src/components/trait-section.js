import React from 'react';

import { TraitDisplay } from './trait-display';

const Traits = ({ traits }) => traits && traits.map(trait => {
  const content = trait.ImageComponent ? (
    <trait.ImageComponent/>
  ) : null;
  return (
    <TraitDisplay key={trait.title} title={trait.title} subtext={trait.subtext}>
      {content}
    </TraitDisplay>
  );
})

const TraitSection = ({ traits }) => (
  <section>
    <Traits traits={traits} />
  </section>
);

export { TraitSection };
