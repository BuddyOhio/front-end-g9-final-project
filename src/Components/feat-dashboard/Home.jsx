import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { axiosRequest } from "../../axios";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [dashboardActivities, setDashboardActivities] = useState(Object);
  const basePieChartConfig = {
    type: "donut",
    series: [],

    options: {
      labels: ["None"],
      dataLabels: {
        enabled: false,
      },
      title: {
        align: "center",
      },
      legend: {
        show: true,
        position: "bottom",
        align: "center",
      },
      noData: {
        text: "No activities",
        align: "center",
        verticalAlign: "middle",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "Activities",
                color: "#373d3f",
                formatter: function (w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0) + " min"
                  );
                },
              },
            },
          },
        },
      },
    },
  };

  var baseColumnsChartConfig = {
    series: [],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      yaxis: {
        title: {
          text: "Goal progress",
        },
        min: 0,
        max: 120,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " minutes";
          },
        },
      },
    },
  };

  // Store in state base daily donut chart config
  const [dailyActivitiesConfig, setDailyActivitiesConfig] = useState({
    ...basePieChartConfig,
    options: {
      ...basePieChartConfig.options,
      title: {
        align: basePieChartConfig.options.align,
        text: "Daily Activities",
      },
    },
  });

  // Store in state base all activities donut chart config
  const [allActivitiesConfig, setAllActivitiesConfig] = useState({
    ...basePieChartConfig,
    options: {
      ...basePieChartConfig.options,
      title: {
        align: basePieChartConfig.options.align,
        text: "All Activities",
      },
    },
  });

  // Store in state base weekly donut chart config
  const [weeklyActivitiesConfig, setWeeklyActivitiesConfig] = useState({
    ...basePieChartConfig,
    options: {
      ...basePieChartConfig.options,
      title: {
        align: basePieChartConfig.options.align,
        text: "Weekly Activities",
      },
    },
  });

  const [weeklyColumnsChartConfig, setWeeklyColumnsChartConfig] = useState({
    ...baseColumnsChartConfig,
    options: {
      ...baseColumnsChartConfig.options,
      title: {
        align: basePieChartConfig.options.align,
        text: "Weekly Activities",
      },
    },
  });

  // Store in state base weekly columns chart config
  const getPieChartConfig = (currentConfig, activities) => {
    return {
      ...currentConfig,
      series: activities?.map((activity) => activity.time),
      options: {
        labels: activities?.map((activity) => activity.type),
      },
    };
  };
  const getColumnsChartConfig = (currentConfig, days) => {
    // [Bike, Hike, Run]
    const allActivitiesType = days
      .flatMap((day) => day.activities)
      .map((activity) => activity.type)
      .reduce((prev, curr) => prev.concat(curr), [])
      .filter((item, i, arr) => arr.indexOf(item) === i);

    // [Monday, Tuesday, Wednesday...]
    const daysOfWeek = days?.map((day) => day.dayOfWeek);

    var series = [];
    /* 
      [
        {
          name: 'Run',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: 'Hike',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        .
        .
        .
      ]
    
    */
    allActivitiesType.forEach((activityType) => {
      series.push({ name: activityType, data: daysOfWeek.map((day) => 0) });
    });

    for (let dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
      for (
        let activityIndex = 0;
        activityIndex < allActivitiesType.length;
        activityIndex++
      ) {
        const dayActivity = days[dayIndex].activities.find(
          (activity) => activity.type === allActivitiesType[activityIndex]
        );

        series[activityIndex].data[dayIndex] = dayActivity
          ? dayActivity.time
          : 0;
      }
    }

    return {
      ...currentConfig,
      series: series,
      options: {
        ...currentConfig.options,
        xaxis: {
          categories: days?.map((day) => day.dayOfWeek),
        },
      },
    };
  };

  useEffect(() => {
    const getUserDashboardActivities = async () => {
      try {
        const response = await axiosRequest.get("/get-dashboard-activities");

        if (response.status === 200) {
          setDashboardActivities(response.data);

          setDailyActivitiesConfig(
            getPieChartConfig(
              dailyActivitiesConfig,

              response.data.donutDailyActivities
            )
          );

          setAllActivitiesConfig(
            getPieChartConfig(
              allActivitiesConfig,
              response.data.donutAllActivities
            )
          );
          setWeeklyActivitiesConfig(
            getPieChartConfig(
              weeklyActivitiesConfig,
              response.data.donutWeeklyActivities
            )
          );
          setWeeklyColumnsChartConfig(
            getColumnsChartConfig(
              weeklyColumnsChartConfig,
              response.data.columnsWeeklyActivities
            )
          );

          return response;
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getUserDashboardActivities();
  }, []);

  return (
    <NavbarDesktop>
      <div id="add-activity" className="flex mb-2 lg:pt-20 pt-12 pb-20">
        <div className="grow bg-white ">
          <h1 className="text-center text-2xl p-4 font-bold text-blue-900">
            Home
          </h1>
          {/* Chart Body - Donut */}
          <div className="flex flex-col mb:flex-row xl:flex-row lg:justify-center  items-center gap-10 xl:gap-2">
            <div className="dailyActivities">
              <div>
                <ReactApexChart
                  options={dailyActivitiesConfig.options}
                  series={dailyActivitiesConfig.series}
                  type="donut"
                  width={300}
                />
              </div>
            </div>
            <div className="allActivities pt-6 order-first xl:order-none">
              <ReactApexChart
                options={allActivitiesConfig.options}
                series={allActivitiesConfig.series}
                type="donut"
                width={380}
              />
            </div>
            <div className="weeklyActivitiesActivities pt-6 order-first xl:order-none">
              <ReactApexChart
                options={weeklyActivitiesConfig.options}
                series={weeklyActivitiesConfig.series}
                type="donut"
                width={300}
              />
            </div>
          </div>
          {/* Chart Body - graph */}
          <div className="xyGraph pt-10 px-8">
            <ReactApexChart
              options={weeklyColumnsChartConfig.options}
              series={weeklyColumnsChartConfig.series}
              type="bar"
              height={350}
            />
          </div>
          {/* All Activity */}
          <div className="flex justify-center m-10">
            <Link to={"/all-activity"}>
              <button
                type="submit"
                className="rounded-xl bg-cyan-400 w-64 py-2.5 h-14 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {" "}
                All Activity
              </button>
            </Link>
          </div>
        </div>
      </div>
    </NavbarDesktop>
  );
};

export default Home;
