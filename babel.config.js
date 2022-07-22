export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
  [
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      allowUndefined: false,
    },
  ],
];
