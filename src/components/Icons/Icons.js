import square from "../../stories/assets/square.svg";
import apartment from "../../stories/assets/apartment.svg";
import beds from "../../stories/assets/beds.svg";
import baths from "../../stories/assets/baths.svg";
import person from "../../stories/assets/person.svg";
import land from "../../stories/assets/land.svg";

import "../../components/Icons/Icons.css";

export const Icons = () => (
  <div className="link-list">
    <div className="link-item">
      <img src={square} alt="square" />
      
    </div>
    <div className="link-item">
      <img src={apartment} alt="apartment" />
    </div>
    <div className="link-item">
      <img src={beds} alt="beds" />
    </div>
    <div className="link-item">
      <img src={baths} alt="baths" />
    </div>
    <div className="link-item">
      <img src={person} alt="person" />
    </div>
    <div className="link-item">
      <img src={land} alt="land" />
    </div>
    
  </div>
 
);

