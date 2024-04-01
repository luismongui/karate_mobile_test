function fn() {
  var config = {}
  var android = {}
  android["desiredConfig"] = {
   "app":"/Users/luismongui/Documents/workspace/POC_MOBILE/mobile-test/src/test/java/resources/UiDemo.apk",
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
