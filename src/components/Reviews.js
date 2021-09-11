import cus1 from '../img/png/cus-1.png';
import cus2 from '../img/png/cus-2.png';
import cus3 from '../img/png/cus-3.png';

export const Reviews = () => {

    const template = `
        <section id="reviews" class="reviews">
            <div class="client-box">
                <h2>What Our<br>Customers Says</h2>
            </div>
            <div class="review-box review-box--1">
            <div class="details">
                <p class="paragraph">They are great for any meal, but I had breakfast there this time. Such a selection including creamed chipped beef, biscuits and gravy, potato pancakes, waffles, pancakes, egg scrambles, eggs benedict, and so much more. It has charming Cape style decor with a series of small rooms and little nooks and crannies, a bar area, and outdoor seating with shade.</p>
                <div class="client-profile">
                    <img src=${cus1} alt="jane doe"/>
                    <div class="username">
                        <h6>jane doe</h6>
                    </div>
                </div>
            </div>
            </div>
            <div class="review-box review-box--2">
                <div class="details">
                    <p class="paragraph">We like to go to The Fairway every time we come to the Cape. The food is always delicious! This is the first year we could make reservations (probably due to spacing because of the virus). Our waitress, Casey, was great!.</p>
                    <div class="client-profile">
                    <img src=${cus2} alt="jane doe"/>
                    <div class="username">
                        <h6>jane doe</h6>
                    </div>
                </div>
            </div>
            </div>
            <div class="review-box review-box--3">
                <div class="details">
                    <p class="paragraph">I had ordered breakfast there this morning and dinner tonight. All were well beyond my expectations. Everything is so fresh. Best clam chowder I have ever had. Clams and linguine were out of this world. Breakfast will knock your slippers off.</p>
                    <div class="client-profile">
                    <img src=${cus3} alt="jane doe"/>
                    <div class="username">
                        <h6>jane doe</h6>
                    </div>
                </div>
            </div>
        </section>
    `;

    return template;
}
