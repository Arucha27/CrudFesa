drop database if exists crudfjs;
CREATE DATABASE crudfjs;
use crudfjs;
-- Crear la tabla task es solo creacion nde tabla de mi bd de prueba
CREATE TABLE tasks (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description VARCHAR(255)
)engine = innoDB;