-- Chefs
INSERT INTO chefs (nombre, acerca_de, localidad) VALUES
('Auguste Gusteau', 'Auguste Gusteau es chef y propietario de Gusteau''s.', 'Paris, France'),
('Remy', 'Remy es una rata con un extraordinario sentido del gusto y el olfato.', 'Paris, France'),
('Colette Tatou', 'Colette es la única mujer chef en la cocina de Gusteau''s.', 'Paris, France'),
('Alfredo Linguini', 'Linguini es un joven aprendiz de chef que trabaja en Gusteau''s.', 'Paris, France');

-- Ingredientes
INSERT INTO ingredientes (nombre, categoria, calorias_aprox, unidad_medida, es_vegano) VALUES
('Leche de vaca', 'Leche', 32, 'ml', FALSE),
('Queso Emmental', 'Lácteos', 350, 'gr', FALSE),
('Tomate', 'Verdura', 18, 'unidades', TRUE),
('Berenjena', 'Verdura', 25, 'unidades', TRUE),
('Calabacín', 'Verdura', 17, 'unidades', TRUE),
('Pimiento rojo', 'Verdura', 31, 'unidades', TRUE),
('Aceite de oliva', 'Aceite', 884, 'ml', TRUE),
('Ajo', 'Condimento', 149, 'unidades', TRUE),
('Hierbas provenzales', 'Condimento', 250, 'gr', TRUE);

-- Recetas
INSERT INTO recetas (nombre, chef_id, nivel_dificultad, categoria) VALUES
('Vaso de leche', 1, 0, 'Sin categoría'),
('Ratatouille', 2, 2, 'Sin categoría'),
('Sopa de Remy', 2, 1, 'Sin categoría');

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
