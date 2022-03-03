import { useRef, useEffect } from 'react'
import './App.css';
import { initialize, toId } from '@iot-app-kit/source-iotsitewise';
import { LineChart, BarChart, ScatterChart, Kpi, StatusTimeline, StatusGrid, ResourceExplorer, WebglContext } from '@iot-app-kit/react-components';
const { defineCustomElements } = require('@iot-app-kit/components/loader');
defineCustomElements();

function App() {
  const DEMO_TURBINE_ASSET_1 = '<replace-with-sitwise-asset-id>';
  const DEMO_TURBINE_ASSET_1_PROPERTY_1 = '<replace-with-sitwise-asset-property-id>';
  const DEMO_TURBINE_ASSET_1_PROPERTY_2 = '<replace-with-sitwise-asset-property-id>';

  const { query } = initialize({ awsCredentials: {
      "accessKeyId": "<replace-with-aws-access-key-id>",
      "secretAccessKey": "<replace-with-aws-access-key>",
      "sessionToken": "<replace-with-aws-session-token>",
    }, awsRegion: '<replace-with-aws-region>' });

  const resourceExplorerRef = useRef(null);

  useEffect(() => {
    resourceExplorerRef.current.onSelectionChange = (event) => console.log('changed asset', event);
  });

  return (
    <div className="App" style={{ width: "1800px", display: "flex" }} >
      <div style={{ width: "400px" }} >
        <ResourceExplorer
          ref={resourceExplorerRef}
          query={query.assetTree.fromRoot()}
        />
      </div>
      <div style={{ width: "1300px", height: "1600px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }} >
        <div style={{ width: "400px", height: "400px" }}>
          <LineChart
            widgetId="line-1"
            settings={{ requestBuffer: 0.2 }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_TURBINE_ASSET_1,
                    properties: [
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_1 },
                    ],
                  },
                ],
              }),
            ]}
          />
        </div>
        <div style={{ width: "400px", height: "400px" }}>
          <BarChart
            widgetId="line-2"
            settings={{ requestBuffer: 0.2 }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_TURBINE_ASSET_1,
                    properties: [
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_1 },
                    ],
                  },
                ],
              }),
            ]}
          />
        </div>
        <div style={{ width: "400px", height: "400px" }}>
          <ScatterChart
            widgetId="line-3"
            settings={{ requestBuffer: 0.2 }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_TURBINE_ASSET_1,
                    properties: [
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_1 },
                    ],
                  },
                ],
              }),
            ]}
          />
        </div>
        <div style={{ width: "400px", height: "400px" }}>
          <StatusTimeline
            widgetId="line-3"
            settings={{ requestBuffer: 0.2  }}
            annotations={{ y: [
              { color: '#FF0000', comparisonOperator: 'GT', value: 30.45 },
              { color: '#0000FF', comparisonOperator: 'GT', value: 2.93 },
              { color: '#00FF00', comparisonOperator: 'LT', value: 2.93 },
              ] }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_TURBINE_ASSET_1,
                    properties: [
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_1 },
                    ],
                  },
                ],
              }),
            ]}
          />
        </div>
        <div>
          <div style={{ width: "400px", height: "400px", display: "inline-block" }}>
            <Kpi
              widgetId="line-3"
              settings={{ requestBuffer: 0.2 }}
              viewport={{ duration: '5m' }}
              queries={[
                query.timeSeriesData({
                  assets: [
                    {
                      assetId: DEMO_TURBINE_ASSET_1,
                      properties: [
                        { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_2 },
                        { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_1 },
                      ],
                    },
                  ],
                }),
              ]}
            />
          </div>
          <div style={{ width: "400px", height: "400px", display: "inline-block" }}>
            <StatusGrid
              widgetId="line-3"
              settings={{ requestBuffer: 0.2 }}
              viewport={{ duration: '5m' }}
              annotations={{ y: [
                  { color: '#FF0000', comparisonOperator: 'GT', value: 30.45 },
                  { color: '#0000FF', comparisonOperator: 'GT', value: 2.93 },
                  { color: '#00FF00', comparisonOperator: 'LT', value: 2.93 },
                ] }}
              queries={[
                query.timeSeriesData({
                  assets: [
                    {
                      assetId: DEMO_TURBINE_ASSET_1,
                      properties: [
                        { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_2 },
                        { propertyId: DEMO_TURBINE_ASSET_1_PROPERTY_1 },
                      ],
                    },
                  ],
                }),
              ]}
            />
          </div>
        </div>
      </div>
      <WebglContext />
    </div>
  );
}

export default App;
