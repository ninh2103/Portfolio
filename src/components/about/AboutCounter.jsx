import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "learningYearsCounter", end: 4, duration: 2 });
  useCountUp({ ref: "githubReposCounter", end: 10, duration: 2 });
  useCountUp({ ref: "coursesCompletedCounter", end: 15, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 20, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years in software development"
          counter={<span id="learningYearsCounter" />}
          measurement=""
        />

        <CounterItem
          title="GitHub Repositories"
          counter={<span id="githubReposCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Completed courses"
          counter={<span id="coursesCompletedCounter" />}
          measurement=""
        />

        <CounterItem
          title="Personal & School Projects"
          counter={<span id="projectsCounter" />}
          measurement=""
        />
      </div>
    </div>
  );
};

export default AboutCounter;
