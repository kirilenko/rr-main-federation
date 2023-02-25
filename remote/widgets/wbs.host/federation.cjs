const {
  withNativeFederation, shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "remoteWidgetsWbs",
  exposes: {
    wbs: "./src/widgets/wbs"
  },
  shared: shareAll(),
  skip: [
    'react-dom/server',
    'react-dom/server.node',
  ],
});

