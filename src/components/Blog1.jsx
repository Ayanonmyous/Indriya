import React from "react";
import { useNavigate } from "react-router-dom";

const Blog1 = () => {
  return (
    <>
      <div className="mt-22 bg-gray-100 p-12">
        <h2 className="text-4xl mb-7 font-bold ml-7">
          Inside Schizophrenia Podcast
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="../images/blog/blog1.png"
            alt="Blog 1 image"
            className=" ml-7 w-full rounded-3xl md:w-1/2 h-100 "
          />

          <div className="flex flex-col">
            <p className="mb-3 text-lg">
              <span className="font-semibold text-blue-500 ">
                Inside Schizophrenia{" "}
              </span>
              is a captivating monthly podcast that offers a distinctive glimpse
              into life through the eyes of individuals grappling with
              schizophrenia and psychosis.
            </p>

            <p className="mb-4 text-lg">
              Hosted by{" "}
              <span className="underline-offset-auto">
                Rachel Star Withers{" "}
              </span>{" "}
              who lives with schizophrenia, and Gabe Howard, each episode
              features engaging conversations and insightful interviews covering
              a wide range of topics including stigma, caregiving, family
              dynamics, employment, incarceration, homelessness, violence,
              treatments, and getting help for schizophrenia. The podcast brings
              firsthand experiences from individuals with schizophrenia, family
              members, caregivers, and medical experts, aiming to foster a
              deeper understanding of schizophrenia, shed light on its impact,
              and develop strategies for managing this serious mental illness.
            </p>

            <p className="mb-4 text-lg">
              New episodes are released on the third Wednesday of every month,
              available here or on your favorite podcast player.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Blog2 = () => {
  return (
    <>
      <div className="mt-22 bg-gray-100 p-12">
        <h2 className="text-4xl mb-7 font-bold ml-7">
          How Does Social Anxiety Affect the Brain?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="../images/blog/blog2.png"
            alt="Blog 2 image"
            className=" ml-7 w-full rounded-3xl md:w-1/2 h-100 "
          />

          <div className="flex flex-col">
            <p className="mb-3 text-lg">
              <span className="font-semibold text-blue-500 ">
                Social anxiety disorder{" "}
              </span>
              also known as social phobia, is a form of anxiety that causes
              intense fear and embarrassment in social situations.
            </p>

            <p className="mb-4 text-lg">
              For example, it’s common to feel slightly nervous when meeting new
              people or speaking in public. People with social anxiety disorder
              can experience a paralyzing fear that makes it hard for them to
              live everyday life.
            </p>

            <p className="mb-4 text-lg">
              We now know that social anxiety disorder affects more than just
              relationships, work, and other daily activities — it also affects
              the brain.
            </p>

            <p className="mb-4 text-lg">
              Researchers have found that critical areas in the brains of
              socially anxious people function differently. These areas mainly
              involve processing emotion, danger, and social cues.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Blog3 = () => {
  return (
    <>
      <div className="mt-30 bg-gray-100 p-12">
        <h2 className="text-4xl mb-7 font-bold ml-7">
          Why You Should Forgive But ‘Never’ Forget
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="../images/blog/blog3.png"
            alt="Blog 3 image"
            className=" ml-7 w-full rounded-3xl md:w-1/2 h-auto "
          />

          <div className="flex flex-col">
            <p className="mb-3 text-lg">
              Forgiveness is a crucial skill, but can you also forget what
              you’re forgiving — and should you?
            </p>

            <p className="mb-4 text-lg">
              We’ve all heard the adage “forgive and forget” when someone has
              wronged us. The idea is that this will keep the peace, preserve
              relationships, and maintain a calm mind.
            </p>

            <p className="mb-4 text-lg">
              Sounds good, but can you really do that — forgive an offense and
              then forget about it? And is that the best action to take?
            </p>

            <p className="mb-4 text-lg">
              Because this advice has been handed out for ages, you might think
              it’s rooted in deep wisdom, and it must be easy to do.
            </p>
            <p className="mb-4 text-lg">
              Wisdom? Yes, in part. Easy? No, definitely not.This adage that
              we’re all so familiar with might be more properly phrased as,
              “forgive, but don’t forget.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Blog4 = () => {
  return (
    <>
      <div className="mt-22 bg-gray-100 p-12">
        <h2 className="text-4xl mb-7 font-bold ml-7">
          Do You Feel Shame about Being Single?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="../images/blog/blog4.png"
            alt="Blog 4 image"
            className=" ml-7 w-full rounded-3xl md:w-1/2 h-auto "
          />

          <div className="flex flex-col">
            <p className="mb-3 text-lg">
              If find yourself single, are you ok with that or distressed by it?
              Do you feel judged by others — or perhaps judge yourself for your
              current status?
            </p>

            <p className="mb-4 text-lg">
              Growing up in our society, it’s hard to avoid the message that
              being married is required for happiness. We may feel pressured to
              believe that if we’re not in a partnership, there’s something
              wrong with us — that it’s shameful to be single.
            </p>

            <p className="mb-4 text-lg">
              But is being single so horrible? Are married or partnered folks
              really happier than the single people among us?
            </p>

            <p className="mb-4 text-lg">
              In a fifteen year study of 24,000 people living in Germany,
              researchers found that marriage offered a boost to life
              satisfaction, but the increase was tiny — one-tenth of one point
              on a ten-point scale. And that difference was likely due to the
              initial effects of marriage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Blog1, Blog2, Blog3, Blog4 };
