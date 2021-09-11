import dinning from '../img/png/dinning-img.png'

export const Dinning = () => {

    const template = `
        <section id="dinning" class="dinning">
            <div class="dinning__content">
                <h2 class="heading-2">Ultimate Dinning Experience Like <br>No Other</h2>
                <p class="paragraph">“Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.Part of the secret of success in life is to eat what you like and let the food fight it out inside."</p>
                <button class="cta">book a table</button>
            </div>
            <img src=${dinning} alt="dinning image" class="dinning__img"/>
        </section>
    `;

    return template;
}
