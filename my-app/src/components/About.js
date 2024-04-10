import React from "react";



export default function About() {
  return (
    <section className="about mt-2" id="about">
      <div className="container m-0 p-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <h1> Little Lemon Restaurant</h1>
            <h2>Chicago</h2>
            
            <p className="mt-2">
              {" "}
              Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
            </p>
            <p>
              {" "}
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
