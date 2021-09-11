import aboutImg from '../img/png/about-img.png';

export const About = () => {

    const template = `
        <section id="about" class="about">
            <img src=${aboutImg} alt="about image" class="about__img"/>
            <div class="about__content">
                <h2 class="heading-2">about us</h2>
                <h3 class="heading-3">“All you need is love. But a little chocolate now and then doesn't hurt.”</h3>
                <p class="paragraph">We work on the tagline of "Never had a bad meal".Hence, We ensure to satisfy user demands and needs.“Seize the moment. Remember all those women on the 'Titanic' who waved off the dessert cart.”</p>
            </div>
        </section>
    `;

    return template;
}
