import React from "react"
import ButtonLp from "./ButtonLp"
import knowledgeImg from "../assets/subscription_knowledge.svg"
import strategyImg from "../assets/subscription_strategy.svg"
import directionImg from "../assets/subscription_direction.svg"
import leadershipImg from "../assets/subscription_leadership.svg"

const SubscriptionPlans = props => {
  return (
    <section className="subscription-section text-grayed my-8 mx-auto px-2">
      <h2 className="text-primary text-center py-5 font-black">Subscription Plans</h2>
      <div className="plans-group flex flex-wrap flex-col md:flex-row justify-evenly text-center text-sm my-5">

        <div className="plans-item lg:w-1/5 w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative mx-auto">
          <img
            src={knowledgeImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-32 border-bottom">
            <h3 className="text-primary mt-8 font-black">Knowledge Pack</h3>
            <p className="my-2 text-sm mx-7">
              Understand key trends in open banking and open finance
            </p>
          </div>
          <ul className="py-5 h-80">
            <li className="mb-2">
              Quarterly Trends Report Access for a Single User
            </li>
            <li className="mb-2">
              Analytics Dashboard Access for a Single User
            </li>
            <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li>
          </ul>
          <div className="plans-price h-32">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                49
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <ButtonLp
              label="Subscribe"
              className="btn--purple font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white  cursor-pointer "
            />
          </div>
        </div>

        <div className="plans-item lg:w-1/5 w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative mx-auto">
          <img
            src={strategyImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-32 border-bottom">
            <h3 className="text-primary mt-8 font-black">Strategy Pack</h3>
            <p className="my-2 text-sm mx-7">
              Work with your team to share insights and plan ecosystem strategy
            </p>
          </div>
          <ul className="py-5 h-80">
            <li className="mb-2">
              Quarterly Trends Report Access for up to 10 members
            </li>
            <li className="mb-2">
              Analytics Dashboard Access for up to 10 members
            </li>
            <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts
            </li>
          </ul>
          <div className="plans-price mx-3">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                159
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <ButtonLp
              label="Subscribe"
              className="btn--pink font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
            />
          </div>
        </div>

        <div className="plans-item lg:w-1/5 w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative mx-auto">
          <img
            src={directionImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-32 border-bottom">
            <h3 className="text-primary mt-8 font-black">Direction Pack</h3>
            <p className="my-2 text-sm mx-7">
              Steer your business towards embracing a platform mindset with data
              and evidence
            </p>
          </div>
          <ul className="py-5 h-80">
            <li className="mb-2">
              Quarterly Trends Report Access for up to 10 members
            </li>
            <li className="mb-2">
              Analytics Dashboard Access for up to 10 members
            </li>
            <li className="mb-2">
              Vote on a “Question of the Quarter” and receive answers from our
              analysts{" "}
            </li>
            <li className="mb-2">
              Bespoke Analysis with Platformable Experts for 5 hours/monthly
            </li>
            <li className="mb-2">
              Your logo advertised in the Quarterly Trends Report
            </li>
          </ul>
          <div className="plans-price mx-3">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                1k
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <ButtonLp
              label="Subscribe"
              className="btn--silver font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
            />
          </div>
        </div>

        <div className="plans-item lg:w-1/5 w-2/5 px-3 bg-card rounded-3xl sm:mx-1 my-4 relative mx-auto">
          <img
            src={leadershipImg}
            alt=""
            className="w-14 self-center mx-auto absolute -top-7 inset-x-0"
          />
          <div className="h-32 border-bottom">
            <h3 className="text-primary mt-8 font-black">Leadership Pack</h3>
            <p className="my-2 text-sm mx-7">
              Become an ecosystem leader by leveraging data and insights to drive
              business strategy and action
            </p>
          </div>
          <ul className="py-5 h-80">
            <li className="mb-2">
              Quarterly Trends Report Access for unlimited members
            </li>
            <li className="mb-2">
              Analytics Dashboard Access for up to 10 members
            </li>
            <li className="mb-2">
              Bespoke Analysis with Platformable Experts for 10 hours/monthly
            </li>
            <li className="mb-2">
              White label edition of reports to use as a lead generation tool
              for your company
            </li>
          </ul>
          <div className="plans-price h-32">
            <p className="font-bold">
              <span className="text-gray-400 text-base opacity-25">$ </span>
              <strong className="text-primary text-3xl leading-tight">
                3k
              </strong>
              <span className="text-gray-400 text-base opacity-25">
                {" "}
                /month{" "}
              </span>
            </p>
            <ButtonLp
              label="Subscribe"
              className="btn--gold font-bold text-primary my-5 mx-0 py-2 px-10 rounded-full hover:bg-primary hover:text-white cursor-pointer "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionPlans
