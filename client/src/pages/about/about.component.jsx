import React from "react";
import ProfilePic1 from "../../assets/profile/profile1.jpg";
import ProfilePic2 from "../../assets/profile/profile2.jpg";
import HelmetMetaData from "../../components/helmet-meta-data/helmet-meta-data";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <HelmetMetaData title="About - Dulin Dís" />
      <h2>ABOUT</h2>
      <div className="author-description">
        <div className="author-description-text">
          <p className="">
            Quite dynamic in its core, my personality propels constant
            variations in its artistic expression. Much of my focus is deeply
            rooted within the realm of the explosiveness and untapped power of
            nature, coated in the layer oniric unrealness. Using primarily
            paints and metal, I try to capture the fleeting moments, the seen
            and the invisible. The silent scream of nature and the loud silence
            of perception.
          </p>
          <p className="">
            My name is Paulina and this page is showcasing pieces of my creative
            spirit, through the mirror image of my innermost yearnings and
            emotions. Originally Cracovian, having lived in the North I
            developed reverence to the manifestation of harsh beauty and the
            aura of the crude, sometimes even barren scenery, captured in a
            frantic dream. Glacier moraines, icecaps, crispy rocks of old lava
            fields, scent of moss... Light and tone play, trickling over these
            trigger my desire to capture synesthetic sensations. I would like to
            open for you the gates of wonder. Become the scent, lingering on a
            reverie. What do you feel? What can you <i>see</i>?
          </p>
          <p className="right">
            For any enquiries, including buying and commissioning work,{" "}
            {
              <Link to="/contact" className="link-in-text">
                Contact
              </Link>
            }{" "}
            me.
          </p>
          <p className="quote">
            “The cord of shielded sensitivity is trembling, shaken by polar
            winds, fragile crust of soul sprinkled by icy diamond dust. The
            cheeks of my alter ego blush sweeped by a marine, salty breath of
            the unknown.”
          </p>
        </div>

        <div className="author-description-pictures">
          <div className="picture">
            <img src={ProfilePic1} alt="Paulina Okulska - Dulin Dís " />
          </div>
          <div className="picture">
            <img src={ProfilePic2} alt="Paulina Okulska - Dulin Dís" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
