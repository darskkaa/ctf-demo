# base image
FROM kalilinux/kali-rolling
# install packages
RUN apt-get update && apt-get install -y \
    nmap netcat-openbsd iputils-ping curl wget python3 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN echo "alias nmap='nmap -sT'" >> /etc/bash.bashrc

# ttyd not in Kali apt — install binary from GitHub
RUN curl -fsSL https://github.com/tsl0922/ttyd/releases/download/1.7.7/ttyd.x86_64 \
    -o /usr/local/bin/ttyd && chmod +x /usr/local/bin/ttyd

# copy files
COPY start.sh /start.sh
COPY flag_server.py /flag_server.py
RUN chmod +x /start.sh
EXPOSE 8080
CMD ["/start.sh"]
