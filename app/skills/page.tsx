import React from 'react'

const Skills = () => {
  return (
    <div className="text-yellow-300 h-screen bg-black pt-20 px-5 sm:px-10 md:px-20">
      {/* Viewport Meta Tag (Should be in the `public/index.html` in a React app, but added here for clarity) */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <h1 className="flex justify-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
        Skills
      </h1>
      <ul className="mt-5">
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          HTML
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          CSS
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          TAILWIND CSS
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          BOOTSTRAP
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          JAVASCRIPT
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          TYPESCRIPT
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          NEXT.JS
        </li>
        <li className="flex justify-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          FIGMA
        </li>
      </ul>
    </div>
  )
}

export default Skills
