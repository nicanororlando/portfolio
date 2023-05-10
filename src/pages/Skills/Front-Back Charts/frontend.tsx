import React, { useMemo } from "react";
import { useLanguage } from "hooks/useLanguage";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { FrontEndSkills } from "data/FrontendSkills";
import styled from "styled-components";
import { formatLevel } from "utils/formatLevel";

const Chart = styled.div``;

const Frontend = () => {
  const { language } = useLanguage();

  const chartSeries = useMemo<ApexAxisChartSeries>(
    () => [
      {
        data: FrontEndSkills.map((row) => row.level),
      },
    ],
    []
  );

  const chartOptions = useMemo<ApexOptions>(
    () => ({
      chart: {
        type: "bar",
        height: 380,
      },
      title: {
        text: language.skills.titles.frontend_chart,
        align: "center",
        floating: true,
        offsetY: 15,
        style: {
          fontSize: "0.875em",
          color: "var(--text-color)",
          fontFamily: "var(--body-font)",
          fontWeight: 100,
        },
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: [
        "#F16529",
        "#264de4",
        "#f0db4f",
        "#007acc",
        "#61DBFB",
        "ffffff",
        "#563d7c",
        "#38bbf8",
        "#1565C0",
        "#d0312d",
      ],
      legend: {
        show: true,
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["var(--color-contrast-dark)"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        width: 0.2,
        colors: ["var(--color-contrast-dark"],
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: FrontEndSkills.map((row) => row.title),
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (serialNumber) {
              return "";
            },
          },
          formatter: function (val) {
            return formatLevel(val);
          },
        },
      },
    }),
    [language.skills.titles.frontend_chart]
  );

  return (
    <Chart className="skills__content">
      <h3 className="skills__title">{language.skills.frontend_title}</h3>

      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={380}
      />
    </Chart>
  );
};

export default Frontend;
