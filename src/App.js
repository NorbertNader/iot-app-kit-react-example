import './App.css';
import { initialize } from '@iot-app-kit/source-iotsitewise';
import { LineChart, WebglContext } from '@iot-app-kit/react-components';
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

  return (
    <div className="App" >
      <div style={{ width: "400px", height: "500px", margin: "auto" }}>
        <LineChart
          widgetId="line-2"
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
      <WebglContext />
    </div>
  );
}

export default App;
