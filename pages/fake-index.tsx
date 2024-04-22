import Image from "next/image";
import { Inter } from "next/font/google";
import BigSvg from "@/public/big-svg";
import Navbar from "./components/navbar";
import { IoIosStarHalf } from "react-icons/io";

export default function Home() {
  return (
    <main className="mx-auto px-6 py-6 bg-black">
      <Navbar />
      {/* <section>
        <div className="text-white">
          <h1 className=" items-center justify-center font-bold text-9xl py-28">
            Serious tracking
            <br /> for serious gym <br />
            workouts.
          </h1>
          <h5 className="font-bold text-3xl">
            New Apps <br />
            We Love
          </h5>
          <p className="text-sm pl-14">Apple 2023</p>
        </div>
        <h1 className="font-bold text-9xl py-28 text-white">
          Serious tracking
          <br /> for serious gym <br />
          workouts.
        </h1>
      </section> */}

      {/* <section className="flex items-center justify-center flex-row gap-72 py-20">
        <div className="">
          <ul className="text-[#E6E6E6] px-24 py-11 leading-[150px] font-semibold text-[20px]">
            <li className="border-b">Workouts</li>
            <li className="border-b">Body metrics</li>
            <li className="border-b">Streak and cooldown</li>
            <li className="border-b">Highly customisable</li>
          </ul>
        </div>
        <div>
          <Image src="/workout-1.png " alt="phone" height={400} width={400} />
        </div>
      </section> */}

      {/* <section>
        <div className="text-white flex flex-col items-center justify-center">
          <div>
            <h1 className="font-bold text-9xl py-10">
              Athletic <br />
              <span className="text-gray-300"> by designe.</span>
            </h1>
            <p className="py-9 font-semibold text-[#A8A9B2] text-[32px]">
              Made purly for the gym
            </p>
          </div>
          <div className="flex flex-col py-8">
            <BigSvg />
            <p className="w-[690px] text-[26px] py-8 text-[#A8A9B2] ">
              Hands shaking from working out, using the app from across the
              room, divided attention, bad connection, switching exercises
              on-the-fly, knowing what weights you did the last time - all of it
              has been considered to get the ultimate gym tracking experience.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className="">
            <h1 className="text-white text-8xl font-extrabold py-20">
              Not just <br />
              reps.
            </h1>
          </div>
          <div className="text-[#E6E6E6] flex items-center justify-center flex-row gap-72 py-20">
            <ul className="px-24 py-11 leading-[80px] font-semibold text-[20px]">
              <li className="border-b">Distance and pace</li>
              <li className="border-b">Sets and reps</li>
              <li className="border-b">Intervals</li>
              <li className="border-b">Mark-to-complete</li>
              <li className="border-b">Duration timer</li>
            </ul>
            <Image src="/workout-3.png " alt="phone" height={420} width={420} />
          </div>

          <p className="text-[#A8A9B2] w-[650px] text-[26px] py-10">
            Wether you’re tracking a classic workout with sets and reps, using
            HIIT interval timers, calisthenics, running a distance, running for
            time or just want a simple list to check things off. Dropset is
            flexible enough to support it all.
          </p>
        </div>
      </section> */}

      {/* <section className="text-white justify-start py-14">
        <div className="w-10">
          <h1 className="text-8xl font-extrabold">Fully featured.</h1>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className=" py-7">
            <h1 className="font-bold text-[80px] text-[#E6E6E6] py-2">
              Supersets.
            </h1>
            <p className="py-3 font-semibold text-[32px] text-[#A8A9B2]">
              Connect supersets by links.
            </p>
          </div>
          <div className=" py-10">
            <Image src="/workout-4.png " alt="phone" height={950} width={950} />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className=" py-7">
            <h1 className="font-bold text-[80px] text-[#E6E6E6]  py-2">
              Dropsets.
            </h1>
            <p className="py-3 font-semibold text-[32px] text-[#A8A9B2]">
              Tags for dropsets, warmup and RPE.
            </p>
          </div>
          <div className=" py-10">
            <Image src="/workout-5.png " alt="phone" height={950} width={950} />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className=" py-7">
            <h1 className="font-bold text-[80px] text-[#E6E6E6] py-2">
              {" "}
              Notes.
            </h1>
            <p className="py-3 font-semibold text-[32px] text-[#A8A9B2]">
              Both for workouts and exercises.
            </p>
          </div>
          <div className=" py-10">
            <Image src="/workout-6.png " alt="phone" height={950} width={950} />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className="py-7">
            <h1 className="font-bold text-[80px]  text-[#E6E6E6] py-2">
              Pace.
            </h1>
            <p className="py-3 font-semibold text-[32px] text-[#A8A9B2]">
              For duration and distance logs.
            </p>
          </div>
          <div className=" py-10">
            <Image src="/workout-7.png " alt="phone" height={950} width={950} />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className=" py-7">
            <h1 className="font-bold text-[80px] text-[#E6E6E6] py-2">
              Flexible scheduling.
            </h1>
            <p className="py-3 font-semibold text-[32px] text-[#A8A9B2]">
              The foundation of amazing results.
            </p>
          </div>
          <div className=" py-10">
            <Image src="/workout-8.png " alt="phone" height={950} width={950} />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className=" py-7">
            <h1 className="font-bold text-[80px] text-[#E6E6E6] py-2">
              Community.
            </h1>
            <p className="py-3 font-semibold text-[32px] text-[#A8A9B2]">
              Connect, gain visibility and share knowledge.
            </p>
          </div>
          <div className=" py-10">
            <Image src="/workout-9.png " alt="phone" height={950} width={950} />
          </div>
        </div>
      </section> */}

      {/* <section className=" ">
        <div className="py-20">
          <div className="">
            <h1 className="text-[80px] font-bold  text-[#E6E6E6] py-10">
              What other <br /> people think.
            </h1>
            <p className="text-[#A8A9B2] text-[32px] font-semibold pb-20">
              Reviews from our customers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
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
                  <h4 className=" font-semibold text-[24px] text-[#E6E6E6] py-3">
                    An elegant and powerful workout tracker.
                  </h4>
                  <p className=" text-[#A8A9B2] text-[30PX] font-normal ">
                    I’ve used many workout trackers over the years and hoops is
                    by far the best. It’s seamless, doesn’t get in your way, and
                    the design is so pleasing to work with. Best of all, the
                    devs are responsive and are quick to address any bugs as
                    they come up!
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
                  <h4 className=" font-semibold text-[#E6E6E6] text-[24px] py-3">
                    An elegant and powerful workout tracker.
                  </h4>
                  <p className=" text-[#A8A9B2] text-[30PX] ">
                    I’ve used many workout trackers over the years and hoops is
                    by far the best. It’s seamless, doesn’t get in your way, and
                    the design is so pleasing to work with. Best of all, the
                    devs are responsive and are quick to address any bugs as
                    they come up!
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
                  <h4 className=" font-semibold text-[#E6E6E6] text-[24px] py-3">
                    An elegant and powerful workout tracker.
                  </h4>
                  <p className=" text-[#A8A9B2] text-[30PX] ">
                    I’ve used many workout trackers over the years and hoops is
                    by far the best. It’s seamless, doesn’t get in your way, and
                    the design is so pleasing to work with. Best of all, the
                    devs are responsive and are quick to address any bugs as
                    they come up!
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
                  <h4 className=" font-semibold  text-[#E6E6E6] text-[24px] py-3">
                    An elegant and powerful workout tracker.
                  </h4>
                  <p className=" text-[#A8A9B2] text-[30PX] ">
                    I’ve used many workout trackers over the years and hoops is
                    by far the best. It’s seamless, doesn’t get in your way, and
                    the design is so pleasing to work with. Best of all, the
                    devs are responsive and are quick to address any bugs as
                    they come up!
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
                  <h4 className=" font-semibold text-[#E6E6E6] text-[24px] py-3">
                    An elegant and powerful workout tracker.
                  </h4>
                  <p className=" text-[#A8A9B2] text-[30PX] ">
                    I’ve used many workout trackers over the years and hoops is
                    by far the best. It’s seamless, doesn’t get in your way, and
                    the design is so pleasing to work with. Best of all, the
                    devs are responsive and are quick to address any bugs as
                    they come up!
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
                  <h4 className=" font-semibold text-[#E6E6E6] text-[24px] py-3">
                    An elegant and powerful workout tracker.
                  </h4>
                  <p className=" text-[#A8A9B2] text-[30PX] ">
                    I’ve used many workout trackers over the years and hoops is
                    by far the best. It’s seamless, doesn’t get in your way, and
                    the design is so pleasing to work with. Best of all, the
                    devs are responsive and are quick to address any bugs as
                    they come up!
                  </p>
                  <p className=" text-[#525359] text-[20px] py-3">
                    September 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div>
          <div className=" max-w-[700px]">
            <h1 className="text-[#E6E6E6] text-[80px] font-bold py-[30px] leading-none">
              Jacob <br />
              Capablanca on using Dropset.
            </h1>
            <p className="text-[#A8A9B2] text-[32px] font-semibold py-[32px]">
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
      </section> */}

      {/* <section className=" py-40 max-w-[900px]">
        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-white text-8xl font-bold">
              Download form the app store
            </h1>
            <button className="bg-white rounded-full py-4 px-4">
              {" "}
              <Image src="/down-arrow.png" alt="down" height={50} width={50} />
            </button>
          </div>
          <div>
            <p className="text-[#A8A9B2]  text-[24px] py-[30px] ">
              Dropset is free to download and try for a few days. After that,
              it’s a $4 per month subscription, or equivalent in your area.
              Designed by 44 in Stockholm, Sweden. Fine Scandinavian minimalism
              since 2020. Get in touch with questions or feedback at
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
      </section> */}
    </main>
  );
}
