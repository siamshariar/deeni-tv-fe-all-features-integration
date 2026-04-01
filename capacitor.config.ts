import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.deeni.tv',
  appName: 'Deeni TV',
  webDir: 'out',
  server: {
    url: 'http://localhost:4356',
    cleartext: true
  }
};

export default config;
