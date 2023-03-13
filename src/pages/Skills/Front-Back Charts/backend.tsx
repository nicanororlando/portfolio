import React, { useMemo } from "react";
import { useLanguage } from "hooks/useLanguage";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { DBSkills } from "data/BackendSills";

const Backend = () => {
  const { language } = useLanguage();

  const BackendSeries = [
    {
      name: language.skills.labels_back.language,
      data: [60, 30, 33],
    },
    {
      name: language.skills.labels_back.framework,
      data: [60, 15, 15],
    },
    {
      name: language.skills.labels_back.testing,
      data: [30, 5, 0],
    },
  ];
  const BackendOptions = useMemo<ApexOptions>(
    () => ({
      chart: {
        type: "bar",
        height: 250,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opt: any) {
          return "";
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: false,
            },
          },
        },
      },
      xaxis: {
        categories: ["Java", "C#", "NodeJS"],
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            // TITLE STRING VALUE
            formatter: function (seriesName) {
              return seriesName;
            },
          },
          // NUMBER VALUE
          formatter: function (val, opt) {
            return "";
          },
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        showForNullSeries: false,
        showForZeroSeries: false,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 400,
        formatter: function (val: any, opt: any) {
          return val;
        },
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 15,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 0.2,
        colors: ["var(--color-contrast-dark"],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
    }),
    []
  );

  const DBSeries = DBSkills.map((row) => row.level);
  const DBOptions = useMemo<ApexOptions>(
    () => ({
      chart: {
        width: 380,
        type: "pie",
      },
      labels: DBSkills.map((row) => row.title),
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            // TITLE STRING VALUE
            formatter: function (seriesName) {
              return seriesName + ": ";
            },
          },
          // NUMBER VALUE
          formatter: function (val, opt) {
            return val + "%";
          },
        },
      },
      stroke: {
        width: 0.2,
        colors: ["var(--color-contrast-dark"],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="skills__content d-flex flex-column align-items-center">
      <h3 className="skills__title">{language.skills.backend_title}</h3>
      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center m-auto">
        <div className="m-auto text-center">
          <small>{language.skills.titles.backend_chart}</small>
          <ReactApexChart
            options={BackendOptions}
            series={BackendSeries}
            type="bar"
            height={250}
          />
        </div>
        <div className="m-auto text-center">
          <small>{language.skills.titles.db_chart}</small>
          <ReactApexChart
            options={DBOptions}
            series={DBSeries}
            type="pie"
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Backend;
