import ji7 from "../../assets/images/ji7.png";
import ji8 from "../../assets/images/ji8.png";
import havan from "../../assets/images/havan.jpeg";
function LifeStory() {
  return (
    <section className="about-story-section">
      <div className="container">
        <div className="story-block row align-items-center g-4 g-lg-5 reveal-up">
          <div className="col-lg-6">
            <div className="story-content-card">
              <p className="story-tag">Chapter One</p>
              <h2>Early Life &amp; Calling</h2>
              <p>
                Shri Ganesh Shastri Ji Maharaj was born in <strong>1977</strong> in the sacred
                village of <strong>Mulana, Tehri Garhwal, Uttarakhand</strong>.
              </p>
              <p>
                Born to <strong>Pandit Premlal Baloni</strong> and <strong>Smt. Kamla Devi</strong>,
                he was blessed with deep spiritual impressions from childhood and drew inspiration
                from <strong>Bhagwat Shiromani Shri Suryamani Shastri Ji</strong>.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="story-visual-card">
              <img src={ji7} alt="Early spiritual life visual" loading="lazy" />
              <span className="story-ornament" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="story-block row align-items-center g-4 g-lg-5 mt-2 mt-lg-4 reveal-up delay-1">
          <div className="col-lg-6 order-lg-2">
            <div className="story-content-card">
              <p className="story-tag">Chapter Two</p>
              <h2>Education &amp; Attainment</h2>
              <p>
                He received Vaishnav initiation from <strong>Shri Krishna Chandra Shastri Ji</strong>
                and completed Vedic education at <strong>Jayaram Sanskrit Vidyalaya</strong>,
                Rishikesh, earning the titles of <strong>Shastri</strong> and <strong>Acharya</strong>.
              </p>
              <p>
                On the banks of <strong>River Ganga</strong>, through intense sadhana, he attained
                siddhi in mantras and delivered his first Bhagwat Katha at the age of
                <strong> 14</strong>.
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div className="story-visual-card">
              <img src={ji8} alt="Education and attainment visual" loading="lazy" />
              <span className="story-ornament" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="story-block row align-items-center g-4 g-lg-5 mt-2 mt-lg-4 reveal-up delay-1">
          <div className="col-lg-6 order-lg-2">
            <div className="story-content-card">
              <p className="story-tag">Havan kund</p>
              <h2>Havan kund Aagni Joyti</h2>
              <p><strong>The sacred fire in this Havan Kund</strong> has been burning continuously <strong>for the past 16 years.</strong>
               Whether it rains or anything else happens,<strong> the holy flame is still ignited and burning even today.” 🔥</strong></p>
              <p>
                The Havan Kund was <strong>established by Guru Ji</strong> at the time of the ashram’s foundation.
                 The most special feature of this sacred fire pit is that the holy fire has been continuously
                  burning from the day the ashram was established until today, <strong>even during rainfall.</strong>
              </p>
              <p>
                It is believed that any man or woman who circumambulates <strong>(parikrama)</strong>
                 this kund with true faith and devotion has their wishes fulfilled, 
                 by the<strong>blessings of Gurudev Bhagwan Shri Ji.</strong> 
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-2">
            <div className="story-visual-card">
              <img src={havan} alt="Education and attainment visual" loading="lazy" />
              <span className="story-ornament" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default LifeStory;


