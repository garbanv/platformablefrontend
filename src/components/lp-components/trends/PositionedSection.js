import React from "react"
import Link from '../../shared-components/Link';
import Button from './../../shared-components/Button';
import ActionableInfo from './ActionableInfo';
/*assets*/


const PositionedSection = props => {
  return (
    <section className="bg-primary relative sm:mb-72 mb-8 w-auto lg:h-96">
      <div className="mb-36 text-white text-center py-4 mx-auto py-6 self-center">
        <h2 className="font-normal">Subscribe to the Platformable</h2>
        <h2>Open Banking and Open Finance Quarterly Trends Report</h2>
        <Link url={"https://platformable.com/signup/"}>
            <Button 
              type="button"
              label={"Subscribe now"}
              btnClass="uppercase bg-secondary font-bold my-5 mx-0 py-2 px-10 rounded-full hover:bg-pink hover:text-primary cursor-pointer h-34 w-80"
            />
          </Link>
        <p className="text-center">
          And get key insights into the open banking and open finance ecosystem
        </p>
      </div>
    <ActionableInfo/>

    </section>
      
  )
}

export default PositionedSection
