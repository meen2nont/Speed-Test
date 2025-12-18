document.addEventListener('DOMContentLoaded', function () {
    console.log("Result Summary Script Loaded");



    let isFinished = false;
    let pollInterval = null;

    // Function to start polling ONLY after SVG is loaded
    function startPolling(svgDoc) {
        if (pollInterval) clearInterval(pollInterval);

        console.log("Starting poll on SVG document...");

        // Helper to extract text from SVG object or Main DOM
        function getSvgElementText(id) {
            // 1. Try Main Document (Inline SVG or Overlay)
            let el = document.getElementById(id);
            if (el) return el.textContent.trim();

            // 2. Try SVG Object Content Document (Embedded SVG)
            if (svgDoc) {
                el = svgDoc.getElementById(id);
                if (el) return el.textContent.trim();
            }
            return null;
        }

        pollInterval = setInterval(() => {
            if (isFinished) {
                clearInterval(pollInterval);
                return;
            }

            const dlVal = getSvgElementText('downResult');
            const ulVal = getSvgElementText('upRestxt');

            let pingVal = getSvgElementText('pingResult');
            if (!pingVal || pingVal === '--') pingVal = getSvgElementText('pingMobres');

            let jitterVal = getSvgElementText('jitterDesk');
            if (!jitterVal || jitterVal === '--') jitterVal = getSvgElementText('JitterResultMon');

            // Numeric check - relaxed to allow strings with units as long as they start with a number
            const isNumeric = (str) => {
                if (!str || str === '---' || str === '--') return false;
                const val = parseFloat(str);
                return !isNaN(val) && isFinite(val);
            };

            // Enable result if ALL values are numeric
            console.log(`Polling: DL=${dlVal}, UL=${ulVal}, Ping=${pingVal}, Jitter=${jitterVal}`);
            if (isNumeric(dlVal) && isNumeric(ulVal) && isNumeric(pingVal) && isNumeric(jitterVal)) {
                // Check if Upload > 0 (Test done)
                const uploadSpeed = parseFloat(ulVal);
                console.log(`Numeric Check Passed. Upload Speed: ${uploadSpeed}`);
                if (uploadSpeed > 0.0) {
                    // Wait 3 seconds for stability
                    setTimeout(() => {
                        // Final read
                        let finalDl = getSvgElementText('downResult');
                        let finalUl = getSvgElementText('upRestxt');

                        let dlUnit = getSvgElementText('dlUnit') || 'Mbps';
                        let ulUnit = getSvgElementText('ulUnit') || 'Mbps';

                        let finalPing = getSvgElementText('pingResult');
                        if (!finalPing || finalPing === '--') finalPing = getSvgElementText('pingMobres');

                        let finalJitter = getSvgElementText('jitterDesk');
                        if (!finalJitter || finalJitter === '--') finalJitter = getSvgElementText('JitterResultMon');

                        let userIp = getSvgElementText('YourIP');
                        if (!userIp || userIp.includes('SpeedTest by')) userIp = 'Unknown';

                        redirectToResults({
                            download: finalDl,
                            dlUnit: dlUnit,
                            upload: finalUl,
                            ulUnit: ulUnit,
                            ping: finalPing,
                            jitter: finalJitter,
                            ip: userIp
                        });
                        isFinished = true;
                    }, 3000);
                }
            }
        }, 1000);
    }

    // Main Logic: Wait for SVG Object to Load
    const svgObj = document.getElementById('OpenSpeedTest-UI');

    if (svgObj) {
        // If already loaded (rare race condition)
        if (svgObj.contentDocument) {
            startPolling(svgObj.contentDocument);
        } else {
            // Listen for load event
            svgObj.addEventListener('load', function () {
                console.log("SVG Object Loaded");
                startPolling(svgObj.contentDocument);
            });
        }
    } else {
        console.error("OpenSpeedTest-UI object not found!");
    }

    function redirectToResults(data) {
        // Redirect to result.html with query parameters
        const url = `result.html?dl=${encodeURIComponent(data.download)}&dlUnit=${encodeURIComponent(data.dlUnit)}&ul=${encodeURIComponent(data.upload)}&ulUnit=${encodeURIComponent(data.ulUnit)}&ping=${encodeURIComponent(data.ping)}&jitter=${encodeURIComponent(data.jitter)}&ip=${encodeURIComponent(data.ip)}`;
        window.location.href = url;
    }
});
