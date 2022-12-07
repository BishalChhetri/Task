import "../styles/item.css";
import Logo from "../images/logo.png";

function item({ item, type }) {
  return (
    <div className={type}>
      <h1>{type}</h1>
      {item.map((item, i) => (
        <div className="menu" key={i}>
          <div
            className="first-container"
            style={{ backgroundColor: item.color }}
          >
            <span>{item.name}</span>
            <span>170 Dishes</span>
            <span>The Grill Restro</span>
            <img src={Logo} alt="" />
          </div>
          <div className="second-container">
            <div></div>
            <div className="items">
              <span>{item.name}</span>
              <span>170 Dishes</span>
              <span>Active Space</span>
              <span>{item.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default item;
