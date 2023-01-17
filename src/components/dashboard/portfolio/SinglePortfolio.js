import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import samplePortfolio from "../sample-portfolio.json";

const SinglePortfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const portfolioId = useParams()?.id;
  const navigate = useNavigate();
  const [currentPortfolio, setCurrentPortfolio] = useState([]);
  useEffect(() => {
    const data = JSON.parse(JSON.stringify(samplePortfolio));
    setPortfolioData(data);
  }, []);

  useEffect(() => {
    if (portfolioData?.length) {
      setCurrentPortfolio(
        portfolioData?.find((data) => data?.id == portfolioId)
      );
    }
  }, [portfolioData]);

  return (
    <div className="relative bg-gray-900 grow">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src={currentPortfolio?.imageUrl}
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-80 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3"
            >
              BACK
            </button>
            <a
              href={currentPortfolio?.linkUrl}
              target="_blank"
              className="text-3xl font-bold text-indigo-300 hover:text-indigo-400"
            >
              {currentPortfolio?.title}
            </a>
          </div>
          <p className="mt-3 text-base font-semibold tracking-tight text-white">
            {currentPortfolio?.subTitle}
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
            quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce
            orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet
            amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {currentPortfolio?.metrics?.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{" "}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolio;
