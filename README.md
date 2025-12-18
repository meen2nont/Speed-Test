# Self-Hosted Speed Test

A lightweight, privacy-focused, and mobile-optimized HTML5 Network Performance Estimation Tool based on OpenSpeedTest™.

## Features

- **Dynamic Units**: Automatically switches between **Mbps** and **Gbps** based on speed (Smart Unit Switching).
- **Privacy First**: Zero external calls or redirects. Strictly self-hosted and secure against data exfiltration.
- **Mobile Optimized**: Responsive design with a full-screen, native-app feel on mobile devices.
- **Clean UI**: Modern aesthetic with SVG vector icons and precise layout.
- **Accurate Reporting**: Real-time User IP extraction and precise Jitter/Ping measurement.
- **Easy Deployment**: Ready for Docker, Node.js, or any static web server (Nginx/Apache).

## Installation & Usage

### Option 1: Docker (Recommended)

1. Build the image:
   ```bash
   docker build -t speedtest .
   ```
2. Run the container:
   ```bash
   docker run -d -p 80:80 speedtest
   ```
3. Open `http://localhost` in your browser.

### Option 2: Node.js (Local Development)

1. Ensure Node.js is installed.
2. Run the local server:
   ```bash
   node local-server.js
   ```
3. Open `http://localhost:8081` in your browser.

### Option 3: Static Web Server (Nginx/Apache)

Copy all files to your web server's root directory (e.g., `/var/www/html`).
If using Nginx, you can use the provided `nginx.conf` as a reference for handling large upload bodies and timeouts.

## Configuration

- **`assets/js/config.js`**: Configure test parameters if needed.
- **`nginx.conf`**: Nginx configuration for handling upload tests and CORS.

## Project Structure

- `index.html`: Main application entry point.
- `result.html`: Post-test summary page.
- `assets/`: Contains JS, CSS, fonts, and images.
- `local-server.js`: Simple Node.js server script.
- `Dockerfile`: Container configuration.

## License

Based on OpenSpeedTest™. Free and Open-Source Software (FOSS).
