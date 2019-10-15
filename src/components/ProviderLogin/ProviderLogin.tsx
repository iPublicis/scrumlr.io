import * as React from 'react';

import './ProviderLogin.scss';
import { AuthProvider } from '../../constants/Auth';
import Icon from '../Icon/Icon';
import { authConfig } from '../../config';

const google = require('../../components/ProviderLogin/google.png');
const github = require('../../components/ProviderLogin/github.png');
const saml = require('../../components/ProviderLogin/saml.png');
const twitter = require('../../components/ProviderLogin/twitter.png');

export interface ProviderLoginProps {
  onProviderLogin: (provider: AuthProvider) => () => void;
}

interface SelectionCircleProps {
  imageSrc: string;
  imageAlt: string;
  imageTitle: string;
}

const SelectionCircle: React.SFC<SelectionCircleProps> = props => (
  <div className="selection-circle-provider">
    <Icon
      name="circle-selection"
      className="selection-circle-provider__border"
    />
    <img src={props.imageSrc} alt={props.imageAlt} title={props.imageTitle} />
  </div>
);

class ProviderLogin extends React.Component<ProviderLoginProps, {}> {
  render() {
    const { onProviderLogin } = this.props;

    return (
      <div className="login-providers">
        <span className="login-providers__login-with">Login with</span>
        {authConfig.enableGoogleIdentity && (
          <button
            onClick={onProviderLogin('google')}
            type="button"
            className="login-providers__button"
          >
            <SelectionCircle
              imageSrc={google}
              imageAlt="Google logo"
              imageTitle="Google"
            />
          </button>
        )}
        {authConfig.enableTwitterIdentity && (
          <button
            onClick={onProviderLogin('twitter')}
            type="button"
            className="login-providers__button"
          >
            <SelectionCircle
              imageSrc={twitter}
              imageAlt="Twitter logo"
              imageTitle="Twitter"
            />
          </button>
        )}

        {authConfig.enableGithubIdentity && (
          <button
            onClick={onProviderLogin('github')}
            type="button"
            className="login-providers__button"
          >
            <SelectionCircle
              imageSrc={github}
              imageAlt="GitHub logo"
              imageTitle="GitHub"
            />
          </button>
        )}

        {authConfig.enableSamlIdentity && (
          <button
            onClick={onProviderLogin('saml')}
            type="button"
            className="login-providers__button"
          >
            <SelectionCircle
              imageSrc={saml}
              imageAlt="Single-Sign-On (SSO) logo"
              imageTitle="Single-Sign-On (SSO)"
            />
          </button>
        )}
      </div>
    );
  }
}

export default ProviderLogin;
