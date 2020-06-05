import React from 'react'

export const ProjectSection = () => {
  return (
    <div>
      <section
        className="mb-1 text-center bg-gray-200 sectionContainer"
        id="section_one"
        data-testid="sectionOne"
      >
        <div className="bg-gray-700 bg-opacity-50">
          <p className="py-2 mx-auto mt-2 mb-2 text-4xl">
            Full Stack JavaScript Web Development
          </p>
          {/* <!-- FIXME: intro-content sizing from < md, width not responsive enough --> */}
          <div
            className="flex justify-around w-full"
            id="intro-content"
          >
            <div className="text-left" id="intro-content" id="left-intro-content">
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
            </div>
            <div
              className="w-2/3 h-40 text-left border border-black border-solid"
              id="right-intro-content"
            >
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
              <p className="intro-subtitle hover:scale-1">
                Full Stack
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mb-1 text-center bg-blue-400 sectionContainer"
        data-testid="sectionTwo
        "
        id="section_two"
      >
        <div className="text-4xl bg-gray-700 bg-opacity-50">
          Section Section Section Section Section
        </div>
      </section>

      <section
        className="mb-1 text-center bg-gray-200 sectionContainer"
        data-testid="sectionThree
        "
        id="section_three"
      >
        <div className="text-4xl bg-gray-700 bg-opacity-50">
          Section Section Section Section Section
        </div>
      </section>

      <section
        className="mb-1 text-center bg-blue-400 sectionContainer"
        id="section_four"
        data-testid="sectionFour"
      >
        <div className="text-4xl">
          Section Section Section Section
        </div>
      </section>
    </div>
  )
}
