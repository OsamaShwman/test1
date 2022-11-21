const FormattedMessage = require('react-intl').FormattedMessage;
const injectIntl = require('react-intl').injectIntl;
const intlShape = require('react-intl').intlShape;
const React = require('react');

const FlexRow = require('../../../flex-row/flex-row.jsx');
const FooterBox = require('../../container/footer.jsx');
const LanguageChooser = require('../../../languagechooser/languagechooser.jsx');

require('../footer.scss');

const ConferenceFooter = props => (
    <FooterBox>
        <div className="collaborators">
            <h4>Sponsors</h4>
            <FlexRow as="ul">
                <li className="odl">
                    <a href="">
                        <img
                            alt="MIT Office of Digital Learning"
                            src=""
                        />
                    </a>
                </li>
                <li className="google">
                    <a href="http://www.google.com/">
                        <img
                            alt="Google"
                            src="/images/conference/footer/2018/google.png"
                        />
                    </a>
                </li>
                <li className="epam">
                    <a href="https://www.epam.com/">
                        <img
                            alt="EPAM Systems"
                            src="/images/conference/footer/2018/epam.png"
                        />
                    </a>
                </li>
                <li className="intel">
                    <a href="http://www.intel.com/content/www/us/en/homepage.html">
                        <img
                            alt="Intel"
                            src="/images/conference/footer/2018/intel.png"
                        />
                    </a>
                </li>
                <li className="lego">
                    <a href="">
                        <img
                            alt="The LEGO Foundation"
                            src="/images/conference/footer/2018/lego-foundation.png"
                        />
                    </a>
                </li>
                <li className="siegel">
                    <a href="http://www.siegelendowment.org/">
                        <img
                            alt="Siegel Family Endowment"
                            src="/images/conference/footer/2018/siegel.png"
                        />
                    </a>
                </li>
                <li className="cartoon-network">
                    <a href="https://www.cartoonnetwork.com/">
                        <img
                            alt="Cartoon Network"
                            src="/images/conference/footer/2018/cartoon-network.png"
                        />
                    </a>
                </li>
                <li className="scratchfoundation">
                    <a href="">
                        <img
                            alt="SteamHub Foundation"
                            src=""
                        />
                    </a>
                </li>
            </FlexRow>
        </div>
        <FlexRow className="scratch-links">
            <div className="family">
                <h4><FormattedMessage id="footer.scratchFamily" /></h4>
                <FlexRow>
                    <FlexRow
                        as="ul"
                        className="column"
                    >
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                SteamHub
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                SteamHub
                            </a>
                        </li>
                    </FlexRow>
                    <FlexRow
                        as="ul"
                        className="column"
                    >
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                SteamHub Foundation
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                SteamHub
                            </a>
                        </li>
                    </FlexRow>
                    <FlexRow
                        as="ul"
                        className="column"
                    >
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                SteamHub Day
                            </a>
                        </li>
                    </FlexRow>
                </FlexRow>
            </div>
            <div className="media">
                <div className="contact-us">
                    <h4>Contact</h4>
                    <p>
                        <a
                            href=""
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Email Us
                        </a>
                    </p>
                </div>
                <div className="social">
                    <FlexRow as="ul">
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="SteamHub twitter"
                                    src="/images/conference/footer/twitter.png"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="SteamHub facebook"
                                    src="/images/conference/footer/facebook.png"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="SteamHub team blog"
                                    src="/images/conference/footer/medium.png"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    alt="SteamHub store"
                                    src="/images/conference/footer/shopify-white.svg"
                                />
                            </a>
                        </li>
                    </FlexRow>
                </div>
            </div>
        </FlexRow>
        <LanguageChooser locale={props.intl.locale} />
    </FooterBox>
);

ConferenceFooter.propTypes = {
    intl: intlShape
};

module.exports = injectIntl(ConferenceFooter);
