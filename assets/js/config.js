

// Add or Remove Server --> Automatically choose the one with the least latency
var openSpeedTestServerList = [
    { "ServerName": "Home", "Download": "downloading", "Upload": "upload", "ServerIcon": "DefaultIcon" }
];

// Send pings 'pingSamples' times to each Server URL.
var pingSamples = 10;

// 50% samples(Least)/length 1=100% 0.1 = 10%
var jitterFinalSample = 0.5;

// Set a pingSample dynamically by passing "Ping" or "p" as a URL Parameter.
var setPingSamples = true;

// If Server has not responded within 5 Seconds for any requests we send ('pingSamples' times)
// We will show Network Error. You can change the limit here.
// In milliseconds, if you need to set 6 seconds. Change the value to 6000.
var pingTimeOut = 5000;

// Set a PingTimeout dynamically by passing "Out" or "O" as a URL Parameter    
var setPingTimeout = true;

// GET or HEAD  // Other Methods may work. but why?
var pingMethod = "GET";

//Choose Download or Upload from the Server list. If you Prefer Download, change pingMethod to HEAD.
var pingFile = "Upload";

// The amount of garbage data sent to the server in Mb, 30 = 30Mb
var ulDataSize = 30;

// Don't touch it
var ulDelay = 300;
var dlDelay = 300;

// Overhead Compensation factor, This is a browser-dependent test, Many Unknowns. Currently, 4%. That is within the margin of error.
var upAdjust = 1.04;
var dlAdjust = 1.04;

// You can pass "Clean" or "C" as a URL Parameter and reset the Overhead Compensation factor to Zero or set any value between 0 and 4. 1 = 1% to 4 = 4% 
// "clean" will not accept values above 4, so Compensation is limited to a maximum of 4%.
var enableClean = true;

// Minimum 12 Seconds is Expected. 
var dlDuration = 12;
var ulDuration = 12;

// 6 is the common limit found on most browsers.
// Choose  Number for parallel HTTP connections to Server | Default is 6 
var dlThreads = 6;
var ulThreads = 6;

// Allow user to Change default limit of 6 parallel HTTP connections to Server  | Accept values above 1 and max 32
// pass "XHR" or "X" as a URL Parameter
var setHTTPReq = true;

// Save Data to a Database
var saveData = false;
var saveDataURL = "//localhost:4500/save?data=";

// Allow user to change the default 12 seconds test duration
// Pass "Stress" or "S" as a URL Parameter.
var stressTest = true;

// Allow user to select and run one test at a time, download, upload, or ping
// Pass "Test" or "T" as a URL Parameter.
var selectTest = true;

// Allow user to select a different server to run a test  
// Pass "Host" or "H" ad a  URL Parameter.
// Accept only valid HTTP URLs like "http://192.168.1.10:3000" or "https://yourHost.com"
var selectServer = true;

// Start a test Automatically without pressing the start button
// You can Delay the test for 'n' seconds by passing any number as a value for Run Keyword. e.g.: "Run=10" or "R=10" to delay the test by 10 Seconds.
// Pass "Run" or "R" as a URL Parameter to start a test instantly.
var enableRun = true;

// "Run" will not work if you are already using 'selectTest' "Test" or "T" Keyword.


function ostOnload() {
    console.log("OpenSpeedTest.com V2.5.4 Loaded!")
    console.log("Now Press the Start Button or HIT Enter.")
    console.log("The secret to living happy is giving happiness. Have a wonderful day.")

}

var openChannel = "dev";
