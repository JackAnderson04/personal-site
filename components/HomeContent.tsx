"use client"

import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import Card from './ui/Card';

const featuredProjects = [
  {
    id: 1,
    title: 'Strava Advanced Analytics',
    description: 'A dashboard designed to allow Strava users to analyze activity data in more depth.',
    imageSrc: '/images/project1.jpg',
    tags: ['React', 'TypeScript', 'RESTful APIs', 'OAuth 2.0', 'Hosting'],
    link: '/projects/strava',
  },
  {
    id: 2,
    title: 'MiniJava Compiler',
    description: 'Just-in-time compiler designed to handle lexical analysis, parsing, and semantic analysis.',
    imageSrc: '/images/project2.jpg',
    tags: ['Visitor design pattern', 'Java', 'Modular desgin'],
    link: '/projects/minijava',
  },
  {
    id: 3,
    title: 'Open Food Network',
    description: 'Contributed to an open-source, food sustainability & availbility project.',
    imageSrc: '/images/project3.jpg',
    tags: ['Ruby on Rails', 'Model-view-controller pattern', 'Debugging'],
    link: '/projects/task-management',
  },
];

const HomeContent: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-blue-600">Jack Anderson</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Graduating Senior & Apsiring Software Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              The goal of this site is to a build responsive, accessible, and performant web application
              using modern technologies like React, TypeScript, and Tailwind CSS to showcase my development skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Contact Me
              </Button>
              <Button href="/about" variant="secondary">
                About Me
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-80 lg:h-96">
            {/* Replace with your actual profile image */}
            <Image 
              src="/images/self_photo.jpg" 
              alt="Jack Anderson - Profile Photo" 
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 -mx-4 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out some of my recent work that showcases my skills and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in modern web technologies focused on building
              efficient and scalable frontend applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'CSS',
              'Tailwind CSS',
              'HTML5',
              'Redux',
              'Git',
              'UI/UX Design',
              'Responsive Design',
              'Accessibility',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center hover:shadow-md transition duration-300"
              >
                <span className="text-gray-700 dark:text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;