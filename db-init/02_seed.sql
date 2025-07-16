-- Chefs
INSERT INTO chefs (nombre, acerca_de, localidad, imagen_url) VALUES
('Auguste Gusteau', 'Auguste Gusteau es chef y propietario de Gusteau''s.', 'Paris, France', NULL),
('Remy', 'Remy es una rata con un extraordinario sentido del gusto y el olfato.', 'Paris, France', 'https://s6573.pcdn.co/wp-content/uploads/2025/04/Remy-from-Ratatouille.webp'),
('Colette Tatou', 'Colette es la única mujer chef en la cocina de Gusteau''s.', 'Paris, France', NULL),
('Alfredo Linguini', 'Linguini es un joven aprendiz de chef que trabaja en Gusteau''s.', 'Paris, France', 'https://pm1.aminoapps.com/6609/a57a820f1ef9fb58d7a3a3485cdbc90ddf7d4e8e_hq.jpg');

-- Ingredientes
INSERT INTO ingredientes (nombre, categoria, calorias_aprox, unidad_medida, es_vegano) VALUES
('Leche de vaca', 'Leche', 32, 'ml', FALSE),
('Queso Emmental', 'Lácteos', 350, 'gr', FALSE),
('Tomate', 'Verdura', 18, 'gr', TRUE),
('Berenjena', 'Verdura', 25, 'gr', TRUE),
('Calabacín', 'Verdura', 17, 'gr', TRUE),
('Pimiento rojo', 'Verdura', 31, 'gr', TRUE),
('Aceite de oliva', 'Aceite', 884, 'ml', TRUE),
('Ajo', 'Condimento', 149, 'gr', TRUE),
('Hierbas provenzales', 'Condimento', 250, 'gr', TRUE);

-- Recetas
INSERT INTO recetas (nombre, chef_id, nivel_dificultad, categoria) VALUES
('Vaso de leche', 1, 0, 'Recetas básicas'),
('Ratatouille', 2, 2, 'Plato principal'),
('Sopa de Remy', 2, 1, 'Entrante');

-- Ingredientes de recetas
INSERT INTO ingredientes_recetas (receta_id, ingrediente_id, cantidad_ingredientes) VALUES
(1, 1, 500), -- Vaso de leche: 500 ml de leche de vaca
(2, 3, 2),   -- Ratatouille: 2 tomates
(2, 4, 1),   -- Ratatouille: 1 berenjena
(2, 5, 1),   -- Ratatouille: 1 calabacín
(2, 6, 1),   -- Ratatouille: 1 pimiento rojo
(2, 7, 30),  -- Ratatouille: 30 ml de aceite de oliva
(2, 8, 2),   -- Ratatouille: 2 dientes de ajo
(2, 9, 5),   -- Ratatouille: 5 g de hierbas provenzales
(3, 3, 3),   -- Sopa de Remy: 3 tomates
(3, 8, 1),   -- Sopa de Remy: 1 diente de ajo
(3, 7, 15);  -- Sopa de Remy: 15 ml de aceite de oliva
