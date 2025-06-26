# Gebruik een lichte webserver image
FROM nginx:alpine

# Kopieer alle bestanden naar de standaard nginx directory
COPY . /usr/share/nginx/html

# Expose poort 80
EXPOSE 80
