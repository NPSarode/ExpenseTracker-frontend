import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = ({ chartId = 'chartDiv', minHeight = '30vh' }) => {
  useLayoutEffect(() => {
    var root = am5.Root.new(chartId);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
      })
    );

    // Set data
    series.data.setAll([
      { value: 5000, category: "Income" },
      { value: 5000, category: "Expense" },
    ]);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartId]);

  return <div id={chartId} style={{ minHeight }}></div>;
};

export default PieChart;
