import { NativeModules } from 'react-native';

const { GoogleMapsServices } = NativeModules;

function getPlacePredictions() {
  return "Hello World!";
}

export { getPlacePredictions };

export default { getPlacePredictions };
