function fn() {
  var config = {}
  var android = {}
  android["desiredConfig"] = {
  //var result = karate.('classpath:src/test/java/resources/UiDemo.apk', config);
   //"app" : "./src/UiDemo.apk",
   "app" : "https://github.com/babusekaran/droidAction/raw/main/build/UiDemo.apk",
   "newCommandTimeout" : 300,
   "platformVersion" : "9.0",
   "platformName" : "Android",
   "connectHardwareKeyboard" : true,
   "deviceName" : "emulator-5554",
   "avd" : "Pixel2_PIE",
   "automationName" : "UiAutomator2"
  }
  config["android"] = android
  return config;
}
