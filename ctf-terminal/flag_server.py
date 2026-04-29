# flag server script
import socket

TOKEN = b'open_sesame'
FLAG  = b'FLAG{p0rt_kn0ck3r}\n'
DENY  = b'access denied. wrong token.\n'

# setup server
s = socket.socket()
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.bind(('', 8888))
s.listen(5)

# loop forever
while True:
    # handle connection
    c, addr = s.accept()
    try:
        c.sendall(b'token: ')
        data = c.recv(1024).strip()
        
        if data == TOKEN:
            c.sendall(FLAG)
        else:
            c.sendall(DENY)
            
    except (ConnectionResetError, BrokenPipeError):
        pass
        
    finally:
        c.close()
