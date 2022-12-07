import React from "react";
import "../styles/graph.css";
import ReactApexChart from "react-apexcharts";
import blueRing from "../images/blueRing.png";
import goldCircle from "../images/goldCircle.png";
import greenCircle from "../images/greenCircle.png";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import fourth from "../images/fourth.png";
import user from "../images/user.png";
import user1 from "../images/user1.png";
import revenue from "../images/revenue.png";
import cart from "../images/cart.png";
import cube from "../images/cube.png";
import cube1 from "../images/cube1.png";
import stock from "../images/stock.png";
import dollar from "../images/dollar.png";

function graph() {
  const state = {
    series: [54.2, 34.5, 11.2],
    options: {
      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return 42459;
              },
            },
          },
        },
      },
      labels: ["Served", "Pending", "Cancelled"],
    },
  };

  return (
    <div className="graph">
      <div className="left-g">
        <div className="left-g-first">
          <span>
            <img src={user} alt="" className="customer-icon"></img>
          </span>
          <span>92.6K</span>
          <span>Customer</span>
          <img src={first} alt=""></img>
        </div>

        <div className="left-g-first">
          <span>
            <img src={revenue} alt="" className="customer-icon"></img>
          </span>
          <span>97.5K</span>
          <span>Revenue Generated</span>
          <img src={second} alt=""></img>
        </div>

        <div className="left-g-first">
          <span>
            <img src={cart} alt="" className="customer-icon"></img>
          </span>
          <span>3000K</span>
          <span>Expense</span>
          <img src={third} alt=""></img>
        </div>

        <div className="left-g-first">
          <span>
            <img src={cube} alt="" className="customer-icon"></img>
          </span>
          <span>38.4K</span>
          <span>Orders Recieved</span>
          <img src={fourth} alt=""></img>
        </div>

        <div className="left-g-second">
          <div className="left-g-second-first">
            <span>Todays Report </span>
            <span>Updated 1 month ago</span>
          </div>

          <div className="left-g-second-second">
            <div className="icon-detail">
              <span>
                <img src={stock} alt="" className="customer-icon"></img>
              </span>
              <div>
                <span>230K</span>
                <span>Expenses</span>
              </div>
            </div>

            <div className="icon-detail">
              <span>
                <img src={user1} alt="" className="customer-icon"></img>
              </span>
              <div>
                <span>8.549K</span>
                <span>Customers</span>
              </div>
            </div>

            <div className="icon-detail">
              <span>
                <img src={cube1} alt="" className="customer-icon"></img>
              </span>
              <div>
                <span>1.423K</span>
                <span>Profit</span>
              </div>
            </div>

            <div className="icon-detail">
              <span>
                <img src={dollar} alt="" className="customer-icon"></img>
              </span>
              <div>
                <span>$9745</span>
                <span>Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-g">
        <span>POS Live Summary</span>
        <div className="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="radialBar"
            height={390}
          />
        </div>
        <div className="index">
          <div className="index-first">
            <div>
              <span>
                <img src={blueRing} alt="" width="12px"></img>
              </span>
              <span> Served</span>
            </div>
            <span>23043</span>
          </div>
          <div className="index-first">
            <div>
              <span>
                {" "}
                <img src={greenCircle} alt="" width="12px"></img>
              </span>
              <span> Pending</span>
            </div>
            <span>14568</span>
          </div>
          <div className="index-first">
            <div>
              <span>
                <img src={goldCircle} alt="" width="10.5px"></img>
              </span>
              <span> Cancelled</span>
            </div>
            <span>4758</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default graph;
