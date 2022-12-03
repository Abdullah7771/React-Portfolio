import React, { useState } from "react";


function ServicesExperience() {

    const services=[
        {
            icon: "fa-paintbrush",
            title: "FrontEnd",
            desc: "FrontEnd based on React/ReactNative",
            active: true,
          },
          {
            icon: "fa-pen-to-square",
            title: "BackEnd",
            desc: "BackEnd based on NodeJS/ExpressJS",
            active: true,
          },
          {
            icon: "fa-database",
            title: "Database",
            desc: "Database MongoDB and MYSQL",
            active: false,
          },



    ];

  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>12</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>08</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;