import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, icon }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        {icon && <span className="mr-2 text-blue-600">{icon}</span>}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;