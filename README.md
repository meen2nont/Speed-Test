# Self-Hosted Speed Test

A lightweight, privacy-focused, and mobile-optimized HTML5 Network Performance Estimation Tool based on OpenSpeedTest™.

## Key Features

- **🚀 Dynamic Units**: Automatically switches between **Mbps** and **Gbps** (Smart Unit Switching) for high-speed networks.
- **📷 Save Result Image**: One-click download of your test results as a high-quality PNG image.
- **🔒 Privacy First**: Zero external calls, analytics, or redirects. Your data stays on your network.
- **📱 Mobile Optimized**: Responsive design that feels like a native app on smartphones and tablets.
- **🎯 Accurate Reporting**:
    - **Real-Client IP Detection**: Supports `X-Forwarded-For` to identify clients behind Reverse Proxies/Docker.
    - **Server Hostname Display**: Correctly shows the IP or Domain you are testing against.
- **🎨 Modern UI**: Clean aesthetic with SVG vector icons, dark mode support, and precise layout.
- **📦 Easy Deployment**: Docker, Node.js, or any static web server (Nginx/Apache).

## Installation & Usage

### Option 1: Docker (Recommended)

1. **Build the image**:
   ```bash
   docker build -t speedtest .
   ```

2. **Run the container**:
   ```bash
   # Map port 8080 (host) to 80 (container)
   docker run -d -p 8080:80 --name speedtest speedtest
   ```

3. **Access**: Open `http://localhost:8080` (or your server's IP:8080).

### Option 2: Node.js (Local Testing)

1. Ensure Node.js is installed.
2. Run the local server:
   ```bash
   node local-server.js
   ```
3. Access: Open `http://localhost:8081`.

### Option 3: Static Web Server (Nginx/Apache)

Copy all files to your web server's root directory (e.g., `/var/www/html`).
*Note: Ensure your web server allows large request bodies (e.g., `client_max_body_size 35M;` in Nginx) for the upload test to function correctly.*

## Configuration

- **`nginx.conf`**: Pre-configured Nginx setup handling:
    - Large upload bodies
    - Real IP forwarding (`X-Forwarded-For`)
    - CORS headers
- **`assets/js/config.js`**: Advanced test parameters.

## Troubleshooting

- **Carrier shows "Unknown" or Gateway IP?**
    - This project is configured to read `X-Forwarded-For`. Ensure your Reverse Proxy passes this header.
    - If running on Docker Desktop, this is normal unless running in `--network host` mode, but the app will try to display the best available guess.
    
- **"Save Image" button missing?**
    - You might be viewing a cached version. Hard refresh (`Ctrl+F5`) or rebuild your Docker image to ensure the latest `result.html` is loaded.

## License

Based on OpenSpeedTest™. Free and Open-Source Software (FOSS).
