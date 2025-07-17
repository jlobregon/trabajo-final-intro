-- Chefs
INSERT INTO chefs (nombre, acerca_de, especialidad, localidad, imagen_url) VALUES
('Remy', 'Una rata apasionada por la cocina francesa, con un olfato excepcional y un gran talento culinario.', 'Comida vegana', 'París, Francia', 'https://s6573.pcdn.co/wp-content/uploads/2025/04/Remy-from-Ratatouille.webp'),
('Alfredo Linguini', 'Un joven torpe pero de buen corazón, que aprende a cocinar gracias a la ayuda de Remy.', 'Comida tradicional', 'París, Francia', 'https://pm1.aminoapps.com/6609/a57a820f1ef9fb58d7a3a3485cdbc90ddf7d4e8e_hq.jpg'),
('Auguste Gusteau', 'El legendario chef y fundador del restaurante Gusteau’s, famoso por su lema: "Cualquiera puede cocinar".', 'Alta cocina', 'París, Francia', 'https://i.pinimg.com/736x/dd/8a/90/dd8a905e3381b4268d4997397e30f849.jpg'),
('Colette Tatou', 'La única mujer chef en la cocina de Gusteau’s, experta en técnicas culinarias y muy estricta.', 'Reposteria', 'París, Francia', 'https://i.pinimg.com/736x/82/41/ab/8241abfaf24e8e58689cdb98f4e404db.jpg'),
('Skinner', 'El chef principal tras la muerte de Gusteau, ambicioso y desconfiado.', 'Alta cocina', 'París, Francia', 'https://i.pinimg.com/736x/04/d4/1c/04d41c5030fc304b6560b5fe1c193f0d.jpg'),
('Germán Martitegui', 'Chef argentino reconocido por su enfoque en la cocina de autor y su participación en programas de televisión.', 'Cocina argentina', 'Buenos Aires, Argentina', 'https://media.discordapp.net/attachments/1359208325538906435/1395183043068690523/German_Martitegui_es.webp?ex=687984f6&is=68783376&hm=b8d40e229e999169eaf258af4bc0932fa7a39e014f8260a27475859ef700b059&=&format=webp&width=1016&height=1016');

-- Ingredientes
INSERT INTO ingredientes (nombre, categoria, calorias_aprox, unidad_medida, es_vegano) VALUES
('Leche de vaca', 'Lácteos', 42, 'ml', FALSE),
('Harina de trigo', 'Cereales', 364, 'g', TRUE),
('Tomate', 'Verduras', 18, 'unidad', TRUE),
('Berenjena', 'Verduras', 25, 'unidad', TRUE),
('Calabacín', 'Verduras', 17, 'unidad', TRUE),
('Pimiento rojo', 'Verduras', 31, 'unidad', TRUE),
('Aceite de oliva', 'Aceites', 884, 'ml', TRUE),
('Ajo', 'Verduras', 149, 'diente', TRUE),
('Hierbas provenzales', 'Especias', 250, 'g', TRUE),
('Sal', 'Especias', 0, 'g', TRUE),
('Pimienta negra', 'Especias', 255, 'g', TRUE),
('Queso gruyere', 'Lácteos', 413, 'g', FALSE),
('Huevos', 'Huevos', 155, 'unidad', FALSE),
('Manteca', 'Lácteos', 717, 'g', FALSE),
('Carne de res', 'Carnes', 250, 'g', FALSE),
('Vino tinto', 'Bebidas', 85, 'ml', TRUE),
('Cebolla', 'Verduras', 40, 'unidad', TRUE),
('Zanahoria', 'Verduras', 41, 'unidad', TRUE),
('Apio', 'Verduras', 16, 'unidad', TRUE),
('Laurel', 'Especias', 313, 'hoja', TRUE),
('Tomillo', 'Especias', 276, 'g', TRUE),
('Panceta', 'Carnes', 541, 'g', FALSE),
('Crema de leche', 'Lácteos', 195, 'ml', FALSE),
('Azúcar', 'Endulzantes', 387, 'g', TRUE),
('Harina de maíz', 'Cereales', 365, 'g', TRUE),
('Mostaza', 'Especias', 66, 'g', TRUE),
('Pechuga de pollo', 'Carnes', 165, 'g', FALSE),
('Limón', 'Frutas', 29, 'unidad', TRUE),
('Perejil', 'Verduras', 36, 'g', TRUE),
('Aceitunas', 'Frutas', 115, 'g', TRUE),
('Lechuga', 'Verduras', 15, 'unidad', TRUE),
('Vinagre', 'Bebidas', 21, 'ml', TRUE),
('Jamón cocido', 'Carnes', 145, 'g', FALSE),
('Dulce de leche', 'Lácteos', 315, 'g', FALSE),
('Vainilla', 'Especias', 288, 'ml', TRUE),
('Maicena', 'Cereales', 381, 'g', TRUE),
('Polvo de hornear', 'Otros', 53, 'g', TRUE),
('Naranja', 'Frutas', 47, 'unidad', TRUE),
('Miel', 'Endulzantes', 304, 'g', TRUE),
('Papa', 'Verduras', 77, 'unidad', TRUE),
('Cebolla de verdeo', 'Verduras', 32, 'unidad', TRUE),
('Carne picada', 'Carnes', 250, 'g', FALSE),
('Comino', 'Especias', 375, 'g', TRUE),
('Pimentón', 'Especias', 282, 'g', TRUE),
('Aceite de girasol', 'Aceites', 884, 'ml', TRUE),
('Queso cremoso', 'Lácteos', 300, 'g', FALSE),
('Espinaca', 'Verduras', 23, 'g', TRUE),
('Ricota', 'Lácteos', 174, 'g', FALSE),
('Champiñones', 'Verduras', 22, 'g', TRUE),
('Pan rallado', 'Cereales', 350, 'g', TRUE),
('Acelga', 'Verduras', 19, 'g', TRUE),
('Albahaca', 'Verduras', 23, 'g', TRUE),
('Frutillas', 'Frutas', 32, 'g', TRUE),
('Durazno', 'Frutas', 39, 'unidad', TRUE),
('Coco rallado', 'Frutas', 660, 'g', TRUE),
('Chocolate', 'Endulzantes', 546, 'g', TRUE),
('Pollo', 'Carnes', 239, 'g', FALSE),
('Arroz', 'Cereales', 130, 'g', TRUE),
('Porotos', 'Legumbres', 127, 'g', TRUE),
('Lentejas', 'Legumbres', 116, 'g', TRUE),
('Garbanzos', 'Legumbres', 164, 'g', TRUE),
('Zapallo', 'Verduras', 26, 'g', TRUE),
('Batata', 'Verduras', 86, 'g', TRUE),
('Manzana', 'Frutas', 52, 'unidad', TRUE),
('Pera', 'Frutas', 57, 'unidad', TRUE),
('Durazno en almíbar', 'Frutas', 85, 'g', TRUE),
('Crema chantilly', 'Lácteos', 257, 'g', FALSE),
('Frambuesa', 'Frutas', 52, 'g', TRUE),
('Morrón', 'Verduras', 31, 'unidad', TRUE),
('Salsa criolla', 'Verduras', 45, 'g', TRUE),
('Salsa tártara', 'Lácteos', 210, 'g', FALSE);

-- Recetas
INSERT INTO recetas (nombre, chef_id, nivel_dificultad, categoria, imagen_url, descripcion, tiempo_estimado) VALUES
-- Remy (chef_id = 1)
('Ratatouille', 1, 2, 'Vegano', 'https://cleanfoodcrush.com/wp-content/uploads/2017/08/Eat-Clean-Classic-Summertime-Ratatouille--1024x683.jpg',
 'Un clásico de la cocina francesa a base de verduras. Pasos: 1) Cortar berenjena, calabacín, tomate y pimiento en rodajas. 2) Saltear ajo en aceite de oliva. 3) Disponer las verduras en una fuente, salpimentar y agregar hierbas. 4) Hornear a 180°C por 40 minutos.', 50),
('Sopa de verduras', 1, 1, 'Vegano', 'https://comedera.com/wp-content/uploads/sites/9/2013/05/sopa-de-verduras-1.jpg?fit=1316,892&crop=0px,76px,1316px,740px',
 'Sopa reconfortante y saludable. Pasos: 1) Picar tomate, cebolla, zanahoria y apio. 2) Sofreír en aceite de oliva. 3) Añadir agua y hervir 20 minutos. 4) Salpimentar al gusto.', 30),

-- Alfredo Linguini (chef_id = 2)
('Fideos', 2, 2, 'Sin categoría', 'https://www.somosmamas.com.ar/wp-content/uploads/2020/03/fideos.jpg',
 'Fideos caseros frescos. Pasos: 1) Mezclar harina, huevos, aceite y sal. 2) Amasar y dejar reposar 30 minutos. 3) Estirar y cortar en tiras. 4) Hervir en agua con sal por 3-5 minutos.', 45),
('Ensalada', 2, 1, 'Vegetariano', 'http://restaurantemassilia.com/wp-content/uploads/2016/02/ensalada_cab.jpg',
 'Ensalada fresca y simple. Pasos: 1) Lavar y cortar lechuga. 2) Añadir aceitunas y perejil picado. 3) Exprimir limón y mezclar con sal. 4) Servir fría.', 10),

-- Auguste Gusteau (chef_id = 3)
('Soufflé de queso', 3, 3, 'Sin categoría', 'https://i.blogs.es/df33ce/souffle-de-queso-y-pimiento/840_560.jpg',
 'Soufflé esponjoso de queso. Pasos: 1) Preparar salsa blanca con manteca, harina y leche. 2) Agregar yemas y queso rallado. 3) Batir claras a nieve e incorporar. 4) Hornear a 180°C por 25 minutos.', 40),
('Boeuf Bourguignon', 3, 3, 'Sin categoría', 'https://www.le-v.fr/wp-content/uploads/2025/02/boeuf-bourguignon-recette-de-grand-mere-scaled-1.jpg',
 'Estofado tradicional francés. Pasos: 1) Dorar carne y panceta. 2) Añadir verduras y vino tinto. 3) Cocinar a fuego bajo con hierbas y especias por 2 horas. 4) Servir caliente.', 150),
('Quiche Lorraine', 3, 2, 'Sin categoría', 'https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg',
 'Tarta salada francesa. Pasos: 1) Preparar masa con harina, manteca y huevo. 2) Rellenar con mezcla de crema, huevos, queso y panceta. 3) Hornear a 180°C por 35 minutos.', 60),

-- Colette Tatou (chef_id = 4)
('Crepes Suzette', 4, 2, 'Sin categoría', 'https://www.africanbites.com/wp-content/uploads/2019/09/IMG_0491.jpg',
 'Postre clásico francés. Pasos: 1) Mezclar harina, huevos, leche y manteca. 2) Cocinar crepes en sartén. 3) Preparar salsa con naranja, azúcar y manteca. 4) Bañar crepes en la salsa.', 35),

-- Skinner (chef_id = 5)
('Pollo a la mostaza', 5, 2, 'Celiaco', 'https://cecotec.es/recetas/wp-content/uploads/2024/07/Olla_Pollo_a_la_mostaza_RRSS-1.jpg',
 'Pechuga de pollo en salsa cremosa de mostaza. Pasos: 1) Dorar pollo en aceite. 2) Añadir mostaza y crema. 3) Cocinar a fuego bajo 15 minutos. 4) Salpimentar y servir.', 25),

-- Germán Martitegui (chef_id = 6)
('Empanadas', 6, 2, 'Sin categoría', 'https://images.tastet.ca/_/rs:fit:1080:720:false:0/plain/local:///2020/04/recette-des-empenadas-du-restaurant-beba-scaled.jpg@jpg',
 'Empanadas argentinas clásicas. Pasos: 1) Preparar relleno con carne, cebolla, papa y especias. 2) Hacer la masa y cortar discos. 3) Rellenar, cerrar y hornear a 200°C por 20 minutos.', 60),
('Flan', 6, 2, 'Celiaco', 'https://chimikingrestaurant.com/wp-content/uploads/2024/12/Best-Cheese-Flan-in-Orlando-FL.png',
 'Postre tradicional. Pasos: 1) Batir huevos, leche, azúcar y vainilla. 2) Verter en molde acaramelado. 3) Cocinar a baño maría por 45 minutos. 4) Dejar enfriar y desmoldar.', 70);

-- Ratatouille (receta_id = 1)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(1, 3, 2),   -- Tomate
(1, 4, 1),   -- Berenjena
(1, 5, 1),   -- Calabacín
(1, 6, 1),   -- Pimiento rojo
(1, 7, 30),  -- Aceite de oliva (ml)
(1, 8, 2),   -- Ajo
(1, 9, 5),   -- Hierbas provenzales (g)
(1, 10, 2),  -- Sal (g)
(1, 11, 1);  -- Pimienta negra (g)

-- Sopa de verduras (receta_id = 2)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(2, 3, 2),   -- Tomate
(2, 18, 1),  -- Zanahoria
(2, 19, 1),  -- Apio
(2, 7, 20),  -- Aceite de oliva (ml)
(2, 10, 2),  -- Sal (g)
(2, 11, 1);  -- Pimienta negra (g)

-- Pasta (receta_id = 3)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(3, 2, 100),  -- Harina de trigo (g)
(3, 13, 2),   -- Huevos
(3, 7, 10),   -- Aceite de oliva (ml)
(3, 10, 1);   -- Sal (g)

-- Ensalada (receta_id = 4)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(4, 31, 1),  -- Lechuga
(4, 28, 1),  -- Limón
(4, 29, 5),  -- Perejil (g)
(4, 30, 10), -- Aceitunas (g)
(4, 10, 1);  -- Sal (g)

-- Soufflé de queso (receta_id = 5)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(5, 12, 100), -- Queso gruyere (g)
(5, 13, 3),   -- Huevos
(5, 14, 30),  -- Manteca (g)
(5, 2, 30),   -- Harina de trigo (g)
(5, 23, 50),  -- Crema de leche (ml)
(5, 10, 1);   -- Sal (g)

-- Boeuf Bourguignon (receta_id = 6)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(6, 15, 500), -- Carne de res (g)
(6, 16, 200), -- Vino tinto (ml)
(6, 17, 1),   -- Cebolla
(6, 18, 1),   -- Zanahoria
(6, 19, 1),   -- Apio
(6, 20, 1),   -- Laurel (hoja)
(6, 21, 2),   -- Tomillo (g)
(6, 22, 50),  -- Panceta (g)
(6, 7, 20),   -- Aceite de oliva (ml)
(6, 10, 2),   -- Sal (g)
(6, 11, 1);   -- Pimienta negra (g)

-- Quiche Lorraine (receta_id = 7)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(7, 2, 100),   -- Harina de trigo (g)
(7, 14, 50),   -- Manteca (g)
(7, 13, 2),    -- Huevos
(7, 23, 100),  -- Crema de leche (ml)
(7, 12, 50),   -- Queso gruyere (g)
(7, 22, 50),   -- Panceta (g)
(7, 10, 1);    -- Sal (g)

-- Crepes Suzette (receta_id = 8)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(8, 2, 100),   -- Harina de trigo (g)
(8, 13, 2),    -- Huevos
(8, 1, 200),   -- Leche de vaca (ml)
(8, 14, 30),   -- Manteca (g)
(8, 38, 1),    -- Naranja (unidad)
(8, 24, 20),   -- Azúcar (g)
(8, 10, 1);    -- Sal (g)

-- Pollo a la mostaza (receta_id = 9)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(9, 27, 1),   -- Pechuga de pollo (g)
(9, 26, 20),  -- Mostaza (g)
(9, 23, 50),  -- Crema de leche (ml)
(9, 7, 10),   -- Aceite de oliva (ml)
(9, 10, 1);   -- Sal (g)

-- Empanadas (receta_id = 10)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(10, 42, 200), -- Carne picada (g)
(10, 17, 1),   -- Cebolla
(10, 41, 1),   -- Papa
(10, 43, 2),   -- Comino (g)
(10, 44, 2),   -- Pimentón (g)
(10, 2, 100),  -- Harina de trigo (g)
(10, 14, 30),  -- Manteca (g)
(10, 10, 1);   -- Sal (g)

-- Flan (receta_id = 11)
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(11, 13, 4),   -- Huevos
(11, 1, 500),  -- Leche de vaca (ml)
(11, 24, 100), -- Azúcar (g)
(11, 35, 1),   -- Vainilla (ml)
(11, 34, 100); -- Dulce de leche (g)