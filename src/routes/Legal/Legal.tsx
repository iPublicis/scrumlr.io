import * as React from 'react';
import './Legal.scss';

const Address: React.FunctionComponent<{}> = () => (
    <address>
        <p>J... B...</p>
        <p>L.... ..</p>
        <p>7.... E....</p>
        <p>Germany</p>
    </address>
);

export const Legal: React.FunctionComponent<{}> = () => (
    <main className="legal">
        <h1>Legal Notice</h1>
        <p>
            Work in progress, used these sources as a base for now:
            <ul>
                <li>http://www.terrymartin.eu/legal-notice-impressum.html</li>
                <li>https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers</li>
            </ul>
        </p>

        <div className="legal__container">
            <div className="legal__column">
                <h2>Imprint</h2>
                <Address/>

                <h2>Contact</h2>
                <address>
                    <dl>
                        <dt>Phone</dt>
                        <dd><a href="tel:+49...">+49 ... .. .. ...</a></dd>

                        <dt>E-Mail</dt>
                        <dd><a href="mailto:...@....io">...@....io</a></dd>
                    </dl>
                </address>

                <h2>Responsible for content</h2>
                <Address/>

                <h2>Disclaimer</h2>
                <h3>Liability of content</h3>
                <p>
                    The content of this site has been created with the greatest of care. I cannot, however, guarantee
                    that the information in it is accurate, complete or up-to-date. As a service provider I am
                    responsible under Section 6(1) of the German Media Services Inter-State Agreement and Section 8(1)
                    of the German Teleservices Act for my own content on this site. Service providers are not however
                    obliged to monitor third party information transmitted or stored on their site by them or to look
                    for circumstances which may suggest a violation of the law. This does not affect my statutory
                    obligations to remove or block the use of information. My liability in such cases shall however
                    commence from the time I become aware of an actual violation. On becoming aware of such violations I
                    shall remove this content immediately.
                </p>

                <h3>Liability for links</h3>
                <p>
                    This website contains links to external third-party websites, over the content of which I have no
                    control. I cannot, therefore, make any guarantees regarding this third-party content. Responsibility
                    for the content of linked sites lies solely with the provider or operator of the site concerned. All
                    linked sites were checked for possible violations of the law when they were linked to mine. At that
                    time I was not aware of any content which may violate the law. However, I cannot be expected to
                    monitor the content of linked sites on an ongoing basis unless I have reason to suspect a violation
                    of the law. On becoming aware of such a violation I shall remove the respective link immediately.
                </p>

                <h3>Copyright</h3>
                <p>
                    The operator of this site makes every effort to respect the copyrights of outside parties and to
                    employ his own material and material in the public domain. All content and material on this site
                    created by the site operator is governed by German copyright law. Downloads and copies of this site
                    may be made for private, non-commercial use only. Reproduction, processing, distribution and any
                    form of exploitation beyond that permitted by copyright law requires the written consent of the
                    author or creator concerned. Contributions by third parties are identified as such. Should anyone
                    become aware of a possible copyright infringement, I kindly request that you inform me of such. Upon
                    becoming aware of such a violation I shall remove the respective content immediately.
                </p>

                <h3>Data protection</h3>
                <p>
                    As a rule the use of this website is possible without providing any personally relevant data. Any
                    provision of personal data (e.g. name, address or email addresses) occurs entirely on a voluntary
                    basis. These data will not be provided to any third parties without the user's express approval. Be
                    aware that the transmission of data via the internet (e.g. communication by email) is subject to
                    security gaps. Complete protection of data from unauthorized access by third parties is not
                    possible. The use of contact details published under the statutory requirement to provide
                    acknowledgements by third parties for the purpose of the transmission of unsolicited advertising and
                    informational material is expressly opposed. The site operator expressly reserves the right to take
                    legal action against the unsolicited mailing of advertising information by way of spamming or
                    similar.
                </p>
            </div>
            <div className="legal__column">
                <h2>Privacy Policy</h2>
                <p>Effective starting: October 15, 2019</p>

                <h3>What this policy covers</h3>
                <p>
                    Your privacy is important to us, and so is being transparent about how we collect, use, and share
                    information about you. This policy is intended to help you understand:
                </p>
                <ul>
                    <li>What information we collect about you</li>
                    <li>How we use information we collect</li>
                    <li>How we share information we collect</li>
                    <li>How we store and secure information we collect</li>
                    <li>How to access and control your information</li>
                    <li>How we transfer information we collect internationally</li>
                    <li>Other important privacy information</li>
                </ul>

                <p>
                    This Privacy Policy covers the information we collect about you when you use our products or
                    services, or otherwise interact with us (for example, by attending our premises or events or by
                    communicating with us), unless a different policy is displayed. Atlassian, we and us refers to
                    Atlassian Pty Ltd, Atlassian, Inc. and any of our corporate affiliates. We offer a wide range of
                    products, including our cloud, server and data center products. We refer to all of these products,
                    together with our other services and websites as "Services" in this policy.
                </p>

                <p>
                    This policy also explains your choices surrounding how we use information about you, which include
                    how you can object to certain uses of information about you and how you can access and update
                    certain information about you. <strong>If you do not agree with this policy, do not access or use
                    our Services or interact with any other aspect of our business</strong>.
                </p>

                <p>
                    Where we provide the Services under contract with an organization (for example, your employer) that
                    organization controls the information processed by the Services. For more information, please see
                    Notice to End Users below. This policy does not apply to the extent we process personal information
                    in the role of a processor on behalf of such organizations.
                </p>
            </div>
        </div>
    </main>
);

export default Legal;