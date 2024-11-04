// Features.jsx
import React from 'react';
import { CONTENT_PAGE_IDS } from '../../../routesNames';

const Features = () => {
  return (
    <main>
      <h1 className="visually-hidden">Features examples</h1>

      {/* Columns with Icons */}
      <div
      
      id={CONTENT_PAGE_IDS.COLUMNS_WITH_ICONS}
      className="container px-4 py-5" >
        <h2 className="pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {/* Feature 1 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded">
              <i className="bi bi-collection" style={{ fontSize: '1em' }}></i>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll
              add onto it with another sentence and probably just keep going until
              we run out of words.
            </p>
            <a href="#" className="icon-link d-flex align-items-center">
              Call to action <i className="bi bi-chevron-right ms-2"></i>
            </a>
          </div>

          {/* Feature 2 */}
          <div
          
          className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded">
              <i className="bi bi-person-circle" style={{ fontSize: '1em' }}></i>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll
              add onto it with another sentence and probably just keep going until
              we run out of words.
            </p>
            <a href="#" className="icon-link d-flex align-items-center">
              Call to action <i className="bi bi-chevron-right ms-2"></i>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded">
              <i className="bi bi-toggles2" style={{ fontSize: '1em' }}></i>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading. We'll
              add onto it with another sentence and probably just keep going until
              we run out of words.
            </p>
            <a href="#" className="icon-link d-flex align-items-center">
              Call to action <i className="bi bi-chevron-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      {/* Hanging Icons */}
      <div
      
      id={CONTENT_PAGE_IDS.HANGING_ICONS}
      className="container px-4 py-5" >
        <h2 className="pb-2 border-bottom">Hanging icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {/* Hanging Icon 1 */}
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 p-3 rounded">
              <i className="bi bi-toggles2" style={{ fontSize: '1em' }}></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading. We'll
                add onto it with another sentence and probably just keep going until
                we run out of words.
              </p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>

          {/* Hanging Icon 2 */}
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 p-3 rounded">
              <i className="bi bi-cpu-fill" style={{ fontSize: '1em' }}></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading. We'll
                add onto it with another sentence and probably just keep going until
                we run out of words.
              </p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>

          {/* Hanging Icon 3 */}
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 p-3 rounded">
              <i className="bi bi-tools" style={{ fontSize: '1em' }}></i>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading. We'll
                add onto it with another sentence and probably just keep going until
                we run out of words.
              </p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      {/* Custom Cards */}
      <div
      
      id={CONTENT_PAGE_IDS.CUSTOM_CARDS}
      className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">Custom cards</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {/* Custom Card 1 */}
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2" style={{ fontSize: '1em' }}></i>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2" style={{ fontSize: '1em' }}></i>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Card 2 */}
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2" style={{ fontSize: '1em' }}></i>
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2" style={{ fontSize: '1em' }}></i>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Card 3 */}
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-3.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2" style={{ fontSize: '1em' }}></i>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2" style={{ fontSize: '1em' }}></i>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      {/* Icon Grid */}
      <div
      
      id={CONTENT_PAGE_IDS.ICON_GRID}
      className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">Icon grid</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {/* Icon Grid Item 1 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-bootstrap text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 2 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-cpu-fill text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 3 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-calendar3 text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 4 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-house text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 5 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-speedometer2 text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 6 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-toggles2 text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 7 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-geo-fill text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>

          {/* Icon Grid Item 8 */}
          <div className="col d-flex align-items-start">
            <i
              className="bi bi-tools text-body-secondary flex-shrink-0 me-3"
              style={{ fontSize: '1.75em' }}
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      {/* Features with Title */}
      <div 
      
      id={CONTENT_PAGE_IDS.FEATURES_WITH_TITLE}
      className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">Features with title</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          {/* Left-aligned Title */}
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">
              Left-aligned title explaining these awesome features
            </h2>
            <p className="text-body-secondary">
              Paragraph of text beneath the heading to explain the heading. We'll
              add onto it with another sentence and probably just keep going until
              we run out of words.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Primary button
            </a>
          </div>

          {/* Features List */}
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              {/* Feature Item 1 */}
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 p-2">
                  <i className="bi bi-collection" style={{ fontSize: '1em' }}></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              {/* Feature Item 2 */}
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 p-2">
                  <i className="bi bi-gear-fill" style={{ fontSize: '1em' }}></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              {/* Feature Item 3 */}
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 p-2">
                  <i className="bi bi-speedometer" style={{ fontSize: '1em' }}></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              {/* Feature Item 4 */}
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 p-2">
                  <i className="bi bi-table" style={{ fontSize: '1em' }}></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features;
