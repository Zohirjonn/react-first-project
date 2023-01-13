// Oddiy line chart
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Yanvar",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Fevral",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mart",
    uv: 3100,
    pv: 1450,
    amt: 2290,
  },
  {
    name: "Aprel",
    uv: 3200,
    pv: 1500,
    amt: 2000,
  },
  {
    name: "May",
    uv: 3500,
    pv: 1000,
    amt: 2181,
  },
  {
    name: "Iyun",
    uv: 4000,
    pv: 500,
    amt: 2500,
  },
  {
    name: "Iyul",
    uv: 1000,
    pv: 2000,
    amt: 2100,
  },
  {
    name: "Avgust",
    uv: 3000,
    pv: 1900,
    amt: 2100,
  },
  {
    name: "Sentyabr",
    uv: 4300,
    pv: 2900,
    amt: 2100,
  },
  {
    name: "Oktyabr",
    uv: 2900,
    pv: 2000,
    amt: 2100,
  },
  {
    name: "Noyabr",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dekabr",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default class SimpleChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {" "}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="natural"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="natural" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
