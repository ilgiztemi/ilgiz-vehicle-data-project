const prodConfig = {
  apiKey: 'AIzaSyCcUZPlC6cgQigzSHHNXS3CL4wPsN92Fvo',
  authDomain: 'team-2-internship-project.firebaseapp.com',
  databaseURL: 'https://team-2-internship-project-default-rtdb.firebaseio.com',
  projectId: 'team-2-internship-project',
  storageBucket: 'team-2-internship-project.appspot.com',
  messagingSenderId: '727767197485',
  appId: '1:727767197485:web:f314d268bada3a709bd5a4'
};

const devConfig = {
  apiKey: 'AIzaSyCcUZPlC6cgQigzSHHNXS3CL4wPsN92Fvo',
  authDomain: 'team-2-internship-project.firebaseapp.com',
  databaseURL: 'https://team-2-internship-project-default-rtdb.firebaseio.com',
  projectId: 'team-2-internship-project',
  storageBucket: 'team-2-internship-project.appspot.com',
  messagingSenderId: '727767197485',
  appId: '1:727767197485:web:f314d268bada3a709bd5a4'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
