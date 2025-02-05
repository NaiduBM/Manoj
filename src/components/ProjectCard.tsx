import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  github,
  demo,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={github}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <Github className="w-5 h-5 mr-1" />
            Code
          </a>
          {demo && (
            <a
              href={demo}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;