import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import samplePortfolio from "../sample-portfolio.json";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(JSON.stringify(samplePortfolio));
    setPortfolioData(data);
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
          <div className="mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData?.length &&
              portfolioData?.map((data) => (
                <div className="group relative" key={Math.random()}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={data?.imageUrl}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-gray-900">
                    <Link to={`/portfolio/${data?.slug}`}>
                      <span className="absolute inset-0"></span>
                      {data?.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{data?.subTitle}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
