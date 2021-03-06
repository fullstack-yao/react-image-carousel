interface ConfigType {
    PHOTOS_URI: string;
    DEFAULT_PHOTO_CATEGORY: string;
    PHOTO_CATEGORIES: string[];
    FEATURES?: {[key: string]: boolean;}
  };

  const config: ConfigType = {
    PHOTOS_URI: "http://localhost:9000/photos",
    DEFAULT_PHOTO_CATEGORY: 'cat',
    PHOTO_CATEGORIES: ['cat', 'shark'],
    FEATURES: {
        cycleNavEnabled: true,
        numberIndicatorEnabled: true,
        keydownNavEnabled: true
    }
  };

  export default config;
