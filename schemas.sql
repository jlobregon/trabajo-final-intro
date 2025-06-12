CREATE TABLE chefs (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    acerca_de VARCHAR(200),
    especialidad VARCHAR(50),
    localidad VARCHAR(50) NOT NULL,
    imagen_url TEXT
);

CREATE TABLE ingredientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    categoria VARCHAR(50),
    calorias_aprox INT NOT NULL,
    unidad_medida INT NOT NULL,
    es_vegano BOOLEAN NOT NULL
);

CREATE TABLE recetas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    chef_id INT NOT NULL,
    descripcion TEXT,
    nivel_dificultad INT NOT NULL,
    tiempo_estimado INT,
    imagen_url TEXT,
    FOREIGN KEY (chef_id) REFERENCES chefs(id)
);
