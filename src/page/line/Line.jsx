import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(213, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 261,
      },
      {
        x: "helicopter",
        y: 229,
      },
      {
        x: "boat",
        y: 8,
      },
      {
        x: "train",
        y: 99,
      },
      {
        x: "subway",
        y: 73,
      },
      {
        x: "bus",
        y: 112,
      },
      {
        x: "car",
        y: 77,
      },
      {
        x: "moto",
        y: 166,
      },
      {
        x: "bicycle",
        y: 284,
      },
      {
        x: "horse",
        y: 245,
      },
      {
        x: "skateboard",
        y: 154,
      },
      {
        x: "others",
        y: 21,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(5, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 47,
      },
      {
        x: "helicopter",
        y: 273,
      },
      {
        x: "boat",
        y: 15,
      },
      {
        x: "train",
        y: 50,
      },
      {
        x: "subway",
        y: 80,
      },
      {
        x: "bus",
        y: 249,
      },
      {
        x: "car",
        y: 250,
      },
      {
        x: "moto",
        y: 18,
      },
      {
        x: "bicycle",
        y: 58,
      },
      {
        x: "horse",
        y: 245,
      },
      {
        x: "skateboard",
        y: 86,
      },
      {
        x: "others",
        y: 298,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(165, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 89,
      },
      {
        x: "helicopter",
        y: 276,
      },
      {
        x: "boat",
        y: 203,
      },
      {
        x: "train",
        y: 148,
      },
      {
        x: "subway",
        y: 196,
      },
      {
        x: "bus",
        y: 117,
      },
      {
        x: "car",
        y: 116,
      },
      {
        x: "moto",
        y: 190,
      },
      {
        x: "bicycle",
        y: 88,
      },
      {
        x: "horse",
        y: 208,
      },
      {
        x: "skateboard",
        y: 191,
      },
      {
        x: "others",
        y: 212,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(127, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 81,
      },
      {
        x: "helicopter",
        y: 224,
      },
      {
        x: "boat",
        y: 249,
      },
      {
        x: "train",
        y: 137,
      },
      {
        x: "subway",
        y: 207,
      },
      {
        x: "bus",
        y: 157,
      },
      {
        x: "car",
        y: 273,
      },
      {
        x: "moto",
        y: 170,
      },
      {
        x: "bicycle",
        y: 112,
      },
      {
        x: "horse",
        y: 97,
      },
      {
        x: "skateboard",
        y: 233,
      },
      {
        x: "others",
        y: 230,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(60, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 195,
      },
      {
        x: "helicopter",
        y: 216,
      },
      {
        x: "boat",
        y: 112,
      },
      {
        x: "train",
        y: 97,
      },
      {
        x: "subway",
        y: 235,
      },
      {
        x: "bus",
        y: 31,
      },
      {
        x: "car",
        y: 169,
      },
      {
        x: "moto",
        y: 156,
      },
      {
        x: "bicycle",
        y: 60,
      },
      {
        x: "horse",
        y: 146,
      },
      {
        x: "skateboard",
        y: 248,
      },
      {
        x: "others",
        y: 270,
      },
    ],
  },
];

const Line = ({ isDahboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        curve="catmullRom"
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard ? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
