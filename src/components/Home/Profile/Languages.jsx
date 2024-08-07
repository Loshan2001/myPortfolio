import React from 'react';
import { useSpring, animated } from 'react-spring';

function Languages() {
  const languages = [
    { language: 'Java', percentage: 85 },
    { language: 'JavaScript', percentage: 70 },
    { language: 'C++', percentage: 50 },
  ];

  return (
    <div className="p-3">
      <h3 className="text-xl font-semibold mb-4">Languages</h3>
      {languages.map((lang, index) => {
        const props = useSpring({ width: `${lang.percentage}%`, from: { width: '0%' } });

        return (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{lang.language}</span>
              <span className="font-medium">{lang.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <animated.div
                className="bg-yellow dark:bg-secondary h-full rounded-full"
                style={props}
              />
            </div>
          </div>
        );
      })}
      <hr className="text-slate-300 w-[90%] items-center mx-auto my-4" />
    </div>
  );
}

export default Languages;
