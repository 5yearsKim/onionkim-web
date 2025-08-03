/* This example requires Tailwind CSS v2.0+ */


export default function Example() {
  return (
    <div className="relative bg-gray-50">

      <main>

        <div className="w-full bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo / Site Name */}
              <div className="text-2xl font-bold text-indigo-600">Onion Kim</div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
                <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
              </div>

              {/* Right Side (Optional: Buttons or Social) */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/5yearsKim"
                  className="text-gray-500 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.208 11.436c.6.112.82-.26.82-.578 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.09-.744.083-.729.083-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.81 1.304 3.495.997.107-.774.418-1.305.76-1.605-2.665-.304-5.467-1.333-5.467-5.933 0-1.31.468-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.182 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016.006 0C18.99 3.262 20 3.584 20 3.584c.653 1.655.242 2.878.12 3.182.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.812 1.1.812 2.22 0 1.604-.015 2.897-.015 3.29 0 .32.217.694.825.577A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>




        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-4 px-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block">Code, Learn, and Share</span> <span className="block text-indigo-600">Onion Kim</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">
              A builder, learner, and storyteller in the world of code. I turn ideas into products, and experiences into knowledge.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="mt-3 rounded-md shadow mt-0 ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Let's Learn
                </a>
              </div>
              <div className="mt-3 rounded-md shadow mt-0 ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                  Let's Share 
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-64 h-72">
          <img
            className="inset-0 w-full h-full object-contain"
            src="/oddish.webp"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
