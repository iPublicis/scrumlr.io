import * as React from 'react';
import './WelcomeArea.scss';

export const WelcomeArea: React.SFC<{}> = ({ children }) => (
  <div className="welcome-area">
    <div className="welcome-area__promotion-wrapper">
      <div className="welcome-area__promotion">
        <h1 className="welcome-area__headline">Scrumlr</h1>

        <div className="welcome-area__promotion-text">
          <h2>Progress is impossible without change</h2>

          <p>
            Take a seat and let us guide you and your team through your first
            online retrospective. Start your first session within seconds -
            completely for free, no registration or payment details required.
            Put your thoughts and your feedback on cards and share them
            instantly on a collaborative virtual board. Vote on the topics that
            really matter. Learn and grow as a team.
          </p>
        </div>
      </div>
    </div>

    <div className="welcome-area__action-area-wrapper">
      <div className="welcome-area__action-area">{children}</div>
      <footer className="welcome-area__action-footer">
        <a
          className="welcome-area__legal-notice"
          href="/#/legal"
          target="_blank"
        >
          Legal notice
        </a>
        <p className="welcome-area__copyright">
          © Copyright 2019. All rights reserved.
        </p>
      </footer>
    </div>
  </div>
);

export default WelcomeArea;
