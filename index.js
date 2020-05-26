import { NativeModules } from 'react-native';

const { GoogleMapsServices } = NativeModules;

function sampleMethod(test) {
    GoogleMapsServices.sampleMethod(test);
}

export default {
    sampleMethod
}
// export default GoogleMapsServices;
