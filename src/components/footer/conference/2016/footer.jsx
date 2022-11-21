const React = require('react');

const FlexRow = require('../../../flex-row/flex-row.jsx');
const FooterBox = require('../../container/footer.jsx');

require('../footer.scss');

const ConferenceFooter = () => (
    <FooterBox>
        <div className="collaborators">
            <h4>Sponsors</h4>
            <FlexRow as="ul">
                <li className="odl">
                    <a href="https://odl.mit.edu/">
                        <img
                            alt="MIT Office of Digital Learning"
                            src="/images/conference/footer/mit-odl.png"
                        />
                    </a>
                </li>
                <li className="intel">
                    <a href="http://www.intel.com/content/www/us/en/homepage.html">
                        <img
                            alt="Intel"
                            src="/images/conference/footer/intel.png"
                        />
                    </a>
                </li>
                <li className="lego">
                    <a href="http://www.legofoundation.com/">
                        <img
                            alt="LEGO Foundation"
                            src="/images/conference/footer/lego-foundation.png"
                        />
                    </a>
                </li>
                <li className="google">
                    <a href="http://www.google.com/">
                        <img
                            alt="Google"
                            src="/images/conference/footer/google.png"
                        />
                    </a>
                </li>
                <li className="siegel">
                    <a href="http://www.siegelendowment.org/">
                        <img
                            alt="Siegel Family Endowment"
                            src="/images/conference/footer/siegel-endowment.png"
                        />
                    </a>
                </li>
                <li className="nostarch">
                    <a href="https://www.nostarch.com/">
                        <img
                            alt="No Starch Press"
                            src="/images/conference/footer/no-starch.png"
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
                <h4>SteamHub Family</h4>
                <FlexRow>
                    <FlexRow
                        as="ul"
                        className="column"
                    >
                        <li>
                            <a href="">SteamHub</a>
                        </li>
                        <li>
                            <a href="">SteamHub</a>
                        </li>
                    </FlexRow>
                    <FlexRow
                        as="ul"
                        className="column"
                    >
                        <li>
                            <a href="">SteamHub Foundation</a>
                        </li>
                        <li>
                            <a href="">SteamHub</a>
                        </li>
                    </FlexRow>
                    <FlexRow
                        as="ul"
                        className="column"
                    >
                        <li>
                            <a href="">SteamHub Day</a>
                        </li>
                    </FlexRow>
                </FlexRow>
            </div>
            <div className="media">
                <div className="contact-us">
                    <h4>Contact</h4>
                    <p>
                        <a href="">
                            Email Us
                        </a>
                    </p>
                </div>
                <div className="social">
                    <FlexRow as="ul">
                        <li>
                            <a href="">
                                <img
                                    alt="SteamHub twitter"
                                    src="/images/conference/footer/twitter.png"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    alt="SteamHub facebook"
                                    src="/images/conference/footer/facebook.png"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    alt="SteamHub foundation blog"
                                    src="/images/conference/footer/medium.png"
                                />
                            </a>
                        </li>
                    </FlexRow>
                </div>
            </div>
        </FlexRow>
    </FooterBox>
);

module.exports = ConferenceFooter;
