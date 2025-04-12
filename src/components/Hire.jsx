import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaBriefcase,
  FaHandshake,
  FaUserTie,
  FaFileContract,
  FaMoneyBillWave,
} from "react-icons/fa";

const Hire = () => {
  return (
    <div className="bg-black w-full h-[50vh] flex flex-col justify-center items-center relative">
      <div className="bg-purple-400 transform rotate-6 w-full">
        <Marquee speed={50}>
          <p className="text-3xl font-medium uppercase flex items-center gap-2 px-5 py-3">
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
          </p>
        </Marquee>
      </div>
      <div className="bg-white transform -rotate-6 w-full">
        <Marquee direction="right" speed={50}>
          <p className="text-3xl font-medium uppercase flex items-center gap-2 px-5 py-3">
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
            hire me <FaBriefcase /> hire me <FaHandshake /> hire me{" "}
            <FaUserTie /> hire me <FaFileContract /> hire me <FaMoneyBillWave />
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Hire;
