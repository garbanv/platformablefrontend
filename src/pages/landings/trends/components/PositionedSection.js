import React from 'react';
import FormLp from './FormLp';

import CallToActionLp from './CallToActionLp';
import ActionableInfoLp from './ActionableInfoLp';

const PositionedSection = () => {
  return (
    <section className="positionedSection bg-primary relative sm:mb-72 mb-8 w-auto lg:h-96">
      <CallToActionLp
      sectionClassName="mb-36 text-white text-center py-4 mx-auto py-6 self-center"
      title="Subscribe to the Platformable"
      secondTitle="Open Banking and Open Finance Quarterly Trends Report"
      paragraphOne="And get key insights into the open banking and open finance ecosystem"
      paragraphClassName="text-center"
      label="Subscribe now"
      btnClassName="uppercase bg-secondary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-pink hover:text-primary cursor-pointer h-34"
    />
      <ActionableInfoLp/>   
    </section>
  )
}

export default PositionedSection

