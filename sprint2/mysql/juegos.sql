CREATE TABLE IF NOT EXISTS juegos (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   plataforma VARCHAR(50)
);

INSERT INTO juegos (nombre, plataforma) VALUES ('Super Mario Bros.', 'NES');
INSERT INTO juegos (nombre, plataforma) VALUES ('The Legend of Zelda', 'NES');
INSERT INTO juegos (nombre, plataforma) VALUES ('Sonic the Hedgehog', 'Sega Genesis');
INSERT INTO juegos (nombre, plataforma) VALUES ('Final Fantasy VII', 'PlayStation');
INSERT INTO juegos (nombre, plataforma) VALUES ('Halo: Combat Evolved', 'Xbox');
