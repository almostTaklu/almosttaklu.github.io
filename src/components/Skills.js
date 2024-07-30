import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Advanced', percentage: 85 },
  { name: 'React.js', level: 'Expert', percentage: 85 },
  { name: 'Node.js', level: 'Intermediate', percentage: 70 },
  { name: 'Python', level: 'Intermediate', percentage: 75 },
  { name: 'Java', level: 'Advanced', percentage: 80 },
  { name: 'HTML/CSS', level: 'Expert', percentage: 95 },
  { name: 'SQL/PSQL', level: 'Expert', percentage: 90 },
  { name: 'C/C++', level: 'Intermediate', percentage: 60 },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-light dark:bg-dark px-2 sm:px-12 font-lato w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-start mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-dark-text dark:text-light-text">Skills</h2>
          <div className="w-8 h-1 bg-primary mt-1"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4 sm:mb-0">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-dark-text dark:text-light-text">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
              </div>
              <div className="w-full bg-light-card dark:bg-dark-card rounded-full h-4">
                <div
                  className="bg-primary h-4 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
