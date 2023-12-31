import React from "react";
import "./about.modules.css";
import Image, { StaticImageData } from "next/image";

import image1 from "public/image1.jpg";
import image2 from "public/image2.png";
import image3 from "public/image3.png";
import image4 from "public/image4.jpg";
import image5 from "public/image5.png";
import image6 from "public/image6.jpg";

function About() {
  return (
    <>
      <div className="bg-lb ">
        <div className="s py-40 mx-28 gap-12">
          <div className="s s-1  section-1">
            <h1 className="text-6xl flex justify-center  font-bold">
              ABOUT US
            </h1>
            <div className="container">
              <span>
                Welcome to True Paw shelter, a sanctuary for compassion, hope,
                and second chances. Nestled in Split, Croatia, our shelter
                stands as a beacon of hope for animals in need, providing a
                heaven where their stories of hardship transform into tales of
                resilience and love. Amidst the stunning landscapes of Split,
                Croatia, True Paw Shelter opens its doors to embrace animals in
                search of solace. Here, were devoted to fostering a community
                where every paw finds warmth, healing, and a pathway to a
                brighter, tail-wagging future. With each wag of a tail and each
                purr of contentment, our shelter embodies the unwavering
                commitment to rewriting stories of despair into narratives
                brimming with joy and belonging.
              </span>
              <div className=" w-95px h-95px">
                <Image
                  src={image1}
                  alt="image"
                  width={600}
                  height={600}
                  className="image rounded-xl ml-20 border-2 border-purple-600"
                />
              </div>
            </div>
          </div>
          <div className="s s-2 ">
            <h2>Our story</h2>
            <div className="container">
              <div className=" w-80px h-80px">
                <Image
                  src={image2}
                  alt="image"
                  width={600}
                  height={600}
                  className="image rounded-xl mr-20 border-2 border-purple-600"
                />
              </div>
              <span>
                True Paw Shelter was born from a collective passion for animal
                welfare. It began with a small group of dedicated individuals
                who recognized the dire need to address the plight of abandoned,
                mistreated, and forgotten animals in our community. What started
                as a humble endeavor has flourished into a vibrant sanctuary
                dedicated to making a lasting impact on the lives of our furry
                friends.United by a shared concern for the overlooked and
                mistreated animals, our journey began with a simple yet profound
                goal: to be a guiding light in the lives of those who couldnt
                speak for themselves.
              </span>
            </div>
          </div>
          <div className="s s-3">
            <h2>Our Mission</h2>
            <div className="container">
              <span>
                At True Paw Shelter, our mission is to not just rescue animals,
                but to transform their lives and find them loving, forever
                homes. We are committed to:
                <br />
                Rescue: We rescue animals from a variety of situations, offering
                them refuge and a chance at a new beginning.
                <br />
                Rehabilitation: Every animal that comes through our doors
                receives the care and attention needed to heal, both physically
                and emotionally.
                <br />
                Education: We aim to educate the community on responsible pet
                ownership, animal welfare, and the importance of adoption.
                <br />
                Advocacy: We advocate for the rights and well-being of all
                animals, striving for a world where they are treated with
                compassion and respect.
                <br />
              </span>
              <div className=" w-95px h-95px">
                <Image
                  src={image3}
                  alt="image"
                  width={400}
                  height={400}
                  className="image rounded-xl ml-20 border-2 border-purple-600"
                />
              </div>
            </div>
          </div>
          <div className="s s-4">
            <h2>Making a Difference, One Paw at a Time </h2>
            <div className="container">
              <div className=" w-95px h-95px">
                <Image
                  src={image4}
                  alt="image"
                  width={400}
                  height={400}
                  className="image rounded-xl mr-20 border-2 border-purple-600"
                />
              </div>
              <span>
                Each day at True Paw Shelter is filled with stories of triumph,
                where the resilience of animals shines brightly. From the
                tiniest kitten to the gentlest senior dog, we are dedicated to
                ensuring that every animal experiences the love and care they
                deserve. Through our tireless efforts, we create success stories
                where once there were tales of adversity. In the heart of True
                Paw Shelter, every sunrise heralds new tales of courage and
                resilience. Be it the playful gambols of a kitten or the tender
                gaze of an elderly canine, our commitment remains unwavering—to
                envelop each soul in our care with the embrace of love and
                unwavering support. With each passing day, we weave tales of
                triumph, transforming past struggles into narratives of hope and
                newfound joy, shaping a future where compassion reigns supreme.
              </span>
            </div>
          </div>
          <div className="s s-5">
            <h2>Our Promise</h2>
            <div className="container">
              <span>
                We promise to be a voice for the voiceless, a safe haven for the
                vulnerable, and a beacon of hope for those in search of a loving
                companion. Every animal that enters our shelter is embraced with
                warmth, kindness, and the promise of a brighter tomorrow. At
                True Paw Shelter, we pledge to stand as advocates for the
                silent, a refuge for the defenseless, and a guiding light for
                those yearning for a loyal companion. Every furry resident is
                welcomed into our fold with open arms, cradled in the assurance
                of a hopeful journey ahead.
              </span>
              <div className=" w-95px h-95px">
                <Image
                  src={image5}
                  alt="image"
                  width={600}
                  height={600}
                  className="image rounded-xl ml-20 border-2 border-purple-600"
                />
              </div>
            </div>
          </div>
          <div className="s s-6">
            <h2>Join Our Cause</h2>
            <div className="container">
              <div className=" w-95px h-95px">
                <Image
                  src={image6}
                  alt="image"
                  width={600}
                  height={600}
                  className="image rounded-xl mr-20 border-2 border-purple-600"
                />
              </div>
              <span>
                We invite you to be part of our journey. Whether you choose to
                volunteer, donate, adopt, or simply spread the word about our
                mission, your support makes a world of difference. Together, we
                can continue to make a profound impact on the lives of animals
                in need. Join us in shaping these heartwarming narratives. Your
                involvement, whether through lending a helping hand,
                contributing, opening your heart and home to adoption, or even
                by sharing our mission, casts ripples of change. Every act of
                support you extend creates a resounding impact in the lives of
                our cherished animals.
              </span>
            </div>
          </div>
          <div className="s s-7">
            <span>
              Thank you for being an integral part of our mission, for your
              unwavering support, and for championing the cause of our beloved
              four-legged friends. Your involvement truly embodies the spirit of
              compassion and solidarity, painting a canvas of hope for those who
              rely on our collective goodwill.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
