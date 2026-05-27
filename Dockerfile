FROM nginx:alpine
# Copiamos todo el contenido (index.html, style.css, js y public) a la ruta de nginx
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
