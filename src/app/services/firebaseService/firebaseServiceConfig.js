const prodConfig = {
  apiKey: 'AIzaSyDiQJ5DtHz4Anav5m9LUEXgQ-nADZkdg0g',
  authDomain: 'ilgiz-vehicle-data.firebaseapp.com',
  databaseURL: 'https://ilgiz-vehicle-data-default-rtdb.firebaseio.com',
  projectId: 'ilgiz-vehicle-data',
  storageBucket: 'ilgiz-vehicle-data.appspot.com',
  messagingSenderId: '171072416598',
  appId: '1:171072416598:web:9baecb9c8a3eccd2c044f7'
};

const devConfig = {
  apiKey: 'AIzaSyDiQJ5DtHz4Anav5m9LUEXgQ-nADZkdg0g',
  authDomain: 'ilgiz-vehicle-data.firebaseapp.com',
  databaseURL: 'https://ilgiz-vehicle-data-default-rtdb.firebaseio.com',
  projectId: 'ilgiz-vehicle-data',
  storageBucket: 'ilgiz-vehicle-data.appspot.com',
  messagingSenderId: '171072416598',
  appId: '1:171072416598:web:9baecb9c8a3eccd2c044f7'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
