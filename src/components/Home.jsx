import React from 'react'

const Home = () => {
  return (
    
    <main>
      {/* Introduction Section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug  md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" />
          </h1>
          <p className="mt-4 text-lg">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src='/self.jpeg' alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>
    </main>
  )
}

export default Home