import brandLogo from '../img/SVG/brand-logo.svg';

export const Footer = () => {

    const template = `
        <footer id="footer" class="footer">
            <div class="footer__wrapper">
                <div class="about-brand">
                    <img src=${brandLogo} alt="gudfood logo" class="logo"/>
                    <p class="paragraph paragraph--sub">At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis praesentium voluptatum deleniti atque corrupti.</p>
                </div>
                <div class="opening-hours">
                    <h3 class="heading-3">opening hours</h3>
                    <h5 class="heading-5">Mon -  Sun: 8 am - 11 pm<br><br>
                </div>
                <div class="contact-info">
                    <h3 class="heading-3">Contact Info</h3>
                    <h5 class="heading-5">(1800) 574 9687<br><br>India<br><br>orderfood@contact.in</h5>
                </div>
            </div>
        </footer>
    `;

    return template;
}
