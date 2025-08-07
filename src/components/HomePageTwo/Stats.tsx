import React from "react";
import CountUp from "react-countup";
import Container from "../common/Container";

type StatItem = {
  id: number;
  end: number;
  suffix: string;
  label: string;
};

const stats: StatItem[] = [
  { id: 1, end: 600, suffix: "+", label: "Team member" },
  { id: 2, end: 6, suffix: "K", label: "Project Complete" },
  { id: 3, end: 53, suffix: "+", label: "Winning award" },
  { id: 4, end: 3, suffix: "K", label: "Client Review" },
];

const Stats: React.FC = () => {
  return (
   <Container className="section-gap">
     <section className="bg-primaryBlue rounded-[30px] lg:py-10 py-8 lg:px-15 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center border border-white rounded-[20px] py-5 px-8 text-center text-white"
          >
            <h2 className="text-white mb-2 md:text-[60px] text-[50px]">
              <CountUp end={stat.end} duration={2.5} separator="," />
              {stat.suffix}
            </h2>
            <p className="text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
   </Container>
  );
};

export default Stats;
