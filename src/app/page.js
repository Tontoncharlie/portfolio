export const metadata = {
  title: 'Tonton | Web Developer Portfolio',
  description: 'Welcome to the portfolio of Tonton, a passionate full stack developer skilled in React, Next.js, and Tailwind CSS.',
  keywords: ['Tonton', 'Web Developer', 'Portfolio', 'React', 'Next.js'],
  authors: [{ name: 'Tonton' }],
};

import React from 'react';
import Navbar from './Components/Home/Home';

const page = () => {
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default page;
