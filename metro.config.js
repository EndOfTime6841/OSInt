const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/** @type {import('@react-native/metro-config').MetroConfig} */
const config = {
  // Add your custom resolver, transformer, or watcher options here
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
