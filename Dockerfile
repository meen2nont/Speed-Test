FROM nginx:alpine

# Copy custom configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
