import Image from "next/image";
import { Inter } from "next/font/google";
import BigSvg from "@/public/big-svg";
import Navbar from "./components/navbar";
import { IoIosStarHalf } from "react-icons/io";
import Link from "next/link";

const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="max-w-[1100px] mx-auto px-6">
        <section className="md:py-[100px] py-20">
          <div className="">
            <h1 className="text-white font-semibold  md:font-bold leading-none text-[40px]  md:text-9xl ">
              Serious tracking for serious gym workouts.
            </h1>
            <div className="mt-10">
              <Image src="/gym.svg" alt="gym image" height={150} width={150} />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center py-16">
          <div className="flex-1 hidden md:block">
            <ul className="text-xl font-semibold text-white flex flex-col gap-16">
              <li className="border-b">Workouts</li>
              <li className="border-b">Body metrics</li>
              <li className="border-b">Streak and cooldown</li>
              <li className="border-b">Highly customisable</li>
            </ul>
          </div>
          <div>
            <Image src="/workout-1.png " alt="phone" height={400} width={400} />
          </div>
        </section>

        <section>
          <div>
            <h1 className=" text-white text-4xl lg:text-9xl font-extrabold py-10">
              Athletic <br />
              by design.
            </h1>
            <p className="text-white text-2xl md:text-3xl mb-24">
              Made purly for the gym
            </p>
          </div>

          <div className=" ">
            <Image
              className=" hidden md:block"
              src="/big-bg.svg"
              alt="big image card"
              height={800}
              width={800}
            />
            <Image
              className="block md:hidden"
              src="/service.svg"
              alt="image card"
              height={800}
              width={800}
            />

            <p className="max-w-[836px] text-2xl md:text-4xl py-8  md:py-44 text-[#A8A9B2]">
              Hands shaking from working out, using the app from across the
              room, divided attention, bad connection, switching exercises
              on-the-fly, knowing what weights you did the last time - all of it
              has been considered to get the ultimate gym tracking experience.
            </p>
          </div>
        </section>

        <section>
          <div className="">
            <h1 className="text-white text-6xl md:text-8xl py-9 font-extrabold">
              Not just <br />
              reps.
            </h1>
          </div>

          <div className="flex flex-row justify-between items-center py-16">
            <ul className="text-white font-semibold flex flex-col gap-10 flex-1">
              <li className="border-b">Distance and pace</li>
              <li className="border-b">Sets and reps</li>
              <li className="border-b">Intervals</li>
              <li className="border-b">Mark-to-complete</li>
              <li className="border-b">Duration timer</li>
            </ul>

            <div>
              <Image
                src="/workout-3.png "
                alt="phone"
                height={420}
                width={420}
              />
            </div>
          </div>

          <p className="text-[#A8A9B2] text-[26px] md:text-[30px] md:py-20 max-w-[836px]">
            Wether you’re tracking a classic workout with sets and reps, using
            HIIT interval timers, calisthenics, running a distance, running for
            time or just want a simple list to check things off. Dropset is
            flexible enough to support it all.
          </p>
        </section>

        <section className="text-white justify-start py-14 md:py-24">
          <div className="">
            <h1 className="text-6xl md:text-8xl font-extrabold">
              Fully <br /> featured.
            </h1>
          </div>
        </section>

        <section className="py-10">
          <div className=" ">
            <h1 className="font-bold md:text-[80px] text-5xl text-[#E6E6E6] py-2">
              Supersets.
            </h1>
            <p className="py-3 font-semibold md:text-[32px] text-2xl text-[#A8A9B2]">
              Connect supersets by links.
            </p>
          </div>
          <div className=" md:py-10 py-2">
            <Image src="/workout-4.png " alt="phone" height={950} width={950} />
          </div>
        </section>

        <section className="py-10">
          <div>
            <div className="">
              <h1 className="font-bold md:text-[80px] text-5xl text-[#E6E6E6] py-2">
                Dropsets.
              </h1>
              <p className="py-3 font-bold md:text-[32px] text-lg text-[#A8A9B2]">
                Tags for dropsets, warmup and RPE.
              </p>
            </div>
            <div className="md:py-10 py-2">
              <Image
                src="/workout-5.png "
                alt="phone"
                height={950}
                width={950}
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className=" ">
            <h1 className="font-bold md:text-[80px] text-5xl text-[#E6E6E6] py-2">
              {" "}
              Notes.
            </h1>
            <p className="py-3 font-bold md:text-[32px] text-lg text-[#A8A9B2]">
              Both for workouts and exercises.
            </p>
          </div>
          <div className=" md:py-10 py-2">
            <Image src="/workout-6.png " alt="phone" height={950} width={950} />
          </div>
        </section>

        <section className="py-10">
          <div className="">
            <h1 className="font-bold md:text-[80px] text-5xl text-[#E6E6E6] py-2">
              Pace.
            </h1>
            <p className="py-3 font-bold md:text-[32px] text-lg text-[#A8A9B2]">
              For duration and distance logs.
            </p>
          </div>
          <div className="md:py-10 py-2">
            <Image src="/workout-7.png " alt="phone" height={950} width={950} />
          </div>
        </section>

        <section>
          <div>
            <div className=" py-7">
              <h1 className="font-bold md:text-[80px] text-5xl text-[#E6E6E6] py-2">
                Flexible scheduling.
              </h1>
              <p className="py-3 font-bold md:text-[32px] text-lg text-[#A8A9B2]">
                The foundation of amazing results.
              </p>
            </div>
            <div className="md:py-10 py-2">
              <Image
                src="/workout-8.png "
                alt="phone"
                height={950}
                width={950}
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="">
            <h1 className="font-bold md:text-[80px] text-5xl text-[#E6E6E6] py-2">
              Community.
            </h1>
            <p className="py-3 font-bold md:text-[32px] text-lg text-[#A8A9B2]">
              Connect, gain visibility and share knowledge.
            </p>
          </div>
          <div className=" md:py-10 py-2">
            <Image src="/workout-9.png " alt="phone" height={950} width={950} />
          </div>
        </section>

        <section className=" ">
          <div className="py-20">
            <div className="md:py-24">
              <h1 className="md:text-[80px] text-4xl font-bold md:leading-none text-[#E6E6E6] py-10">
                What other <br /> people think.
              </h1>
              <p className="text-[#A8A9B2] text-xl md:text-[32px] font-semibold pb-20">
                Reviews from our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="">
                <div className="max-w-[400px]">
                  <div className="flex gap-4  text-white text-3xl">
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-xl md:text-[24px] text-[#E6E6E6] py-3">
                      An elegant and powerful workout tracker.
                    </h4>
                    <p className=" text-[#A8A9B2] text-[30PX] font-normal ">
                      I’ve used many workout trackers over the years and hoops
                      is by far the best. It’s seamless, doesn’t get in your
                      way, and the design is so pleasing to work with. Best of
                      all, the devs are responsive and are quick to address any
                      bugs as they come up!
                    </p>
                    <p className=" text-[#525359]  font-normal text-[20px] py-3">
                      September 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-[400px]">
                  <div className="flex gap-4  text-white text-3xl">
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-[#E6E6E6] text-xl md:text-[24px] py-3">
                      An elegant and powerful workout tracker.
                    </h4>
                    <p className=" text-[#A8A9B2] text-[30PX] ">
                      I’ve used many workout trackers over the years and hoops
                      is by far the best. It’s seamless, doesn’t get in your
                      way, and the design is so pleasing to work with. Best of
                      all, the devs are responsive and are quick to address any
                      bugs as they come up!
                    </p>
                    <p className=" text-[#525359] text-[20px] py-3">
                      September 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="max-w-[400px]">
                  <div className="flex gap-4 text-white text-3xl">
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-[#E6E6E6] text-xl md:text-[24px] py-3">
                      An elegant and powerful workout tracker.
                    </h4>
                    <p className=" text-[#A8A9B2] text-[30PX] ">
                      I’ve used many workout trackers over the years and hoops
                      is by far the best. It’s seamless, doesn’t get in your
                      way, and the design is so pleasing to work with. Best of
                      all, the devs are responsive and are quick to address any
                      bugs as they come up!
                    </p>
                    <p className=" text-[#525359] text-[20px] py-3">
                      September 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="max-w-[400px]">
                  <div className="flex gap-4 text-white text-3xl">
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                  </div>
                  <div>
                    <h4 className=" font-semibold  text-[#E6E6E6] text-xl md:text-[24px] py-3">
                      An elegant and powerful workout tracker.
                    </h4>
                    <p className=" text-[#A8A9B2] text-[30PX] ">
                      I’ve used many workout trackers over the years and hoops
                      is by far the best. It’s seamless, doesn’t get in your
                      way, and the design is so pleasing to work with. Best of
                      all, the devs are responsive and are quick to address any
                      bugs as they come up!
                    </p>
                    <p className=" text-[#525359] text-[20px] py-3">
                      September 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="max-w-[400px]">
                  <div className="flex gap-4 text-white text-3xl">
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-[#E6E6E6] text-xl md:text-[24px] py-3">
                      An elegant and powerful workout tracker.
                    </h4>
                    <p className=" text-[#A8A9B2] text-[30PX] ">
                      I’ve used many workout trackers over the years and hoops
                      is by far the best. It’s seamless, doesn’t get in your
                      way, and the design is so pleasing to work with. Best of
                      all, the devs are responsive and are quick to address any
                      bugs as they come up!
                    </p>
                    <p className=" text-[#525359] text-[20px] py-3">
                      September 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="max-w-[400px]">
                  <div className="flex gap-4 text-white text-3xl">
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                    <IoIosStarHalf />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-[#E6E6E6] text-xl md:text-[24px] py-3">
                      An elegant and powerful workout tracker.
                    </h4>
                    <p className=" text-[#A8A9B2] text-[30PX] ">
                      I’ve used many workout trackers over the years and hoops
                      is by far the best. It’s seamless, doesn’t get in your
                      way, and the design is so pleasing to work with. Best of
                      all, the devs are responsive and are quick to address any
                      bugs as they come up!
                    </p>
                    <p className=" text-[#525359] text-[20px] py-3">
                      September 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className=" max-w-[700px] ">
              <h1 className="text-[#E6E6E6] text-4xl md:text-[80px] font-extrabold py-[30px] md:mt-36 leading-none">
                Jacob <br />
                Capablanca on using Dropset.
              </h1>
              <p className="text-[#A8A9B2] text-lg md:text-[32px] font-semibold py-[32px]">
                How he uses Dropset to track his workouts.
              </p>
            </div>
            <div>
              <Image
                src="/workout-10.png "
                alt="phone"
                height={950}
                width={950}
              />
            </div>
          </div>
        </section>

        <section className=" pt-40  md:py-24 max-w-[900px] md:mt-[300px]">
          <div>
            <div className="flex  justify-between">
              <h1 className="text-white text-4xl md:text-8xl font-bold ">
                Download <br />
                form the app <br />
                store.
              </h1>
              <Link
                href="/"
                className="bg-white rounded-full py-4 px-4 h-[54px] w-[54px]"
              >
                <Image
                  src="/down-arrow.png"
                  alt="down"
                  height={50}
                  width={50}
                />
              </Link>
            </div>
            <div>
              <p className="text-[#A8A9B2] font-thin text-xl md:text-[30px] py-[30px] ">
                Dropset is free to download and try for a few days. After that,
                it’s a $4 per month subscription, or equivalent in your area.
                Designed by 44 in Stockholm, Sweden. Fine Scandinavian
                minimalism since 2020. Get in touch with questions or feedback
                at
              </p>
              <a
                href="#"
                className="text-[#A8A9B2] text-[24px] pt-2 border-b border-x-cyan-200"
              >
                hello@getdropset.app.
              </a>
              <p className="text-[#A8A9B2] text-[24px] py-20">
                {" "}
                Copyright © 44 · 2024.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
