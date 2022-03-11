import React from 'react'

export default function Overlay() {
  return (
    <main>
      <div className="content-wrapper">
        <section>
          <h1>
            Hola! I'm <b className="accent-shadow">Jordi Izquierdo</b>
          </h1>
          <div className="gui-card">
            <p>
              I'm a 27 years old developer and artist. I'm currently helping to create awesome web stuff on a research group at{' '}
              <a href="https://www.upc.edu/ca" target="_blank">
                UPC
              </a>.
            </p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/jordi-izquierdo-a69209136/" target="_blank">
                  <img src="icons/linkedin.svg" />
                </a>
              </li>
              <li>
                <a href="mailto:hi@izquiratops.dev" target="_blank">
                  <img src="icons/email.svg" />
                </a>
              </li>
              <li>
                <a href="jordi-izquierdo-cv.pdf" target="_blank">
                  <img src="icons/cv.svg" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>
            What can be found on my{' '}
            <a href="https://github.com/izquiratops" target="_blank" className="accent-shadow">
              GitHub <img src="icons/github.svg" style={{ height: '1rem' }} />
            </a>
          </h2>
          <dl>
            <div className="gui-card">
              <dt>
                <a href="https://github.com/izquiratops/Advent-of-Code-2021" target="_blank">
                  Advent of Code 2021
                </a>
              </dt>
              <dd>
                Annual programming puzzles that can be solved in any language.<br/>
                <small>I used JavaScript</small>
              </dd>
            </div>

            <div className="gui-card">
              <dt>
                <a href="https://github.com/izquiratops/Starter-R3F-Template" target="_blank">
                  React Three Fiber boilerplate
                </a>
              </dt>
              <dd>You can build something like those 🍑 from the background with this project!</dd>
            </div>

            <div className="gui-card">
              <dt>
                <a href="https://github.com/izquiratops/ESbuild-PostCSS" target="_blank">
                  ESBuild PostCSS plugin
                </a>
              </dt>
              <dd>
                I like ESBuild a lot, so I wrote my own <small>little</small> plugin to work with PostCSS
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  )
}
