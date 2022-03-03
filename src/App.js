import './App.css';
import { initialize, toId } from '@iot-app-kit/source-iotsitewise';
import { LineChart, BarChart, ScatterChart, Kpi, StatusTimeline, StatusGrid, ResourceExplorer, Table, WebglContext } from '@iot-app-kit/react-components';
const { defineCustomElements } = require('@iot-app-kit/components/loader');
defineCustomElements();

function App() {
  const DEMO_ASSET_1 = '<replace-with-sitwise-asset-id>';
  const DEMO_ASSET_1_PROPERTY_1 = '<replace-with-sitwise-asset-property-id>';
  const DEMO_ASSET_1_PROPERTY_2 = '<replace-with-sitwise-asset-property-id>';

  const DEMO_ASSET_2 = '<replace-with-sitwise-asset-id>';
  const DEMO_ASSET_2_PROPERTY_1 = '<replace-with-sitwise-asset-property-id>';
  const DEMO_ASSET_2_PROPERTY_2 = '<replace-with-sitwise-asset-property-id>';

  const { query } = initialize({ awsCredentials: {
      "accessKeyId": "<replace-with-aws-access-key-id>",
      "secretAccessKey": "<replace-with-aws-access-key>",
      "sessionToken": "<replace-with-aws-session-token>",
    }, awsRegion: '<replace-with-aws-region>' });

  return (
    <div className="App" style={{ width: "1800px", display: "flex" }} >
      <div style={{ width: "400px" }} >
        <ResourceExplorer
          query={query.assetTree.fromRoot()}
          onSelectionChange={(event) => console.log('changes asset', event)}
        />
      </div>
      <div style={{ width: "1300px", height: "1600px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }} >
        <div style={{ width: "400px", height: "400px" }}>
          <LineChart
            widgetId="line-1"
            settings={{ requestBuffer: 1 }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_ASSET_1,
                    properties: [
                      { propertyId: DEMO_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_ASSET_1_PROPERTY_1 },
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
            styleSettings={{ ['testing']: { color: '#0000FF' } }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_ASSET_1,
                    properties: [
                      { propertyId: DEMO_ASSET_1_PROPERTY_2, refId: 'testing' },
                      { propertyId: DEMO_ASSET_1_PROPERTY_1 },
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
            settings={{ requestBuffer: 1 }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_ASSET_1,
                    properties: [
                      { propertyId: DEMO_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_ASSET_1_PROPERTY_1 },
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
              { color: '#FF0000', comparisonOperator: 'GT', value: 0 },
              { color: '#0000FF', comparisonOperator: 'GT', value: 1 },
              { color: '#00FF00', comparisonOperator: 'GT', value: 2 },
              ] }}
            viewport={{ duration: '5m' }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_ASSET_2,
                    properties: [
                      { propertyId: DEMO_ASSET_2_PROPERTY_1 },
                      { propertyId: DEMO_ASSET_2_PROPERTY_2 },
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
                      assetId: DEMO_ASSET_1,
                      properties: [
                        { propertyId: DEMO_ASSET_1_PROPERTY_2 },
                        { propertyId: DEMO_ASSET_1_PROPERTY_1 },
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
                  { color: '#FF0000', comparisonOperator: 'GT', value: 0 },
                  { color: '#0000FF', comparisonOperator: 'GT', value: 1 },
                  { color: '#00FF00', comparisonOperator: 'GT', value: 2 },
                ] }}
              queries={[
                query.timeSeriesData({
                  assets: [
                    {
                      assetId: DEMO_ASSET_2,
                      properties: [
                        { propertyId: DEMO_ASSET_2_PROPERTY_1 },
                        { propertyId: DEMO_ASSET_2_PROPERTY_2 },
                      ],
                    },
                  ],
                }),
              ]}
            />
          </div>
        </div>
        <div style={{ width: "400px", height: "400px" }}>
          <Table
            widgetId="scatter-1"
            tableColumns={[
              { header: 'OEE',
                rows: [
                  toId({ assetId: DEMO_ASSET_1, propertyId: DEMO_ASSET_1_PROPERTY_2 }),
                  toId({ assetId: DEMO_ASSET_1, propertyId: DEMO_ASSET_1_PROPERTY_1 }),
                ]
              }
            ]}
            viewport={{ duration: '5m', yMin: 0, yMax: 1 }}
            queries={[
              query.timeSeriesData({
                assets: [
                  {
                    assetId: DEMO_ASSET_1,
                    properties: [
                      { propertyId: DEMO_ASSET_1_PROPERTY_2 },
                      { propertyId: DEMO_ASSET_1_PROPERTY_1 },
                    ],
                  },
                ],
              }),
            ]}
          />
        </div>
      </div>
      <WebglContext />
    </div>
  );
}

export default App;
