import FilterSection from "./components/FilterSection";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import data from "./data.json";
import { DataType } from "./Interface";

export default function Home() {
  return (
    <main className="main-home w-full relative">
      <div className="w-full absolute top-0 left-0 z-10">
     
        <FilterSection />

        <section
          className="container w-[87.2%] md:w-[89.71%] lg:w-[77.03%] mx-auto mt-[32px] md:mt-[45px] lg:mt-[80px] 
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[30px]  items-center bg-transparent"
        >
          {data.map((item, i) => (
            <JobCard
            
            />
          ))}
        </section>
      </div>
    </main>
  );
}
