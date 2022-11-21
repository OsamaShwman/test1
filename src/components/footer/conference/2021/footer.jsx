const FormattedMessage = require('react-intl').FormattedMessage;
const injectIntl = require('react-intl').injectIntl;
const intlShape = require('react-intl').intlShape;
const React = require('react');
const PropTypes = require('prop-types');


const FlexRow = require('../../../flex-row/flex-row.jsx');
const FooterBox = require('../../container/footer.jsx');
const LanguageChooser = require('../../../languagechooser/languagechooser.jsx');

require('../footer.scss');

const ConferenceFooter = props => (
    <FooterBox>
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
                                SteamHubJr
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
                                SteamHubEd
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
                            href="mailto:conference@scratch.mit.edu"
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
        <div className="organized-by-message">
            <FormattedMessage id={props.organizedByMsgId} />
        </div>
    </FooterBox>
);

ConferenceFooter.propTypes = {
    intl: intlShape,
    organizedByMsgId: PropTypes.string
};

module.exports = injectIntl(ConferenceFooter);
