CREATE TABLE game (
id INTEGER GENERATED ALWAYS AS IDENTITY,
title VARCHAR(50) NOT NULL,
description VARCHAR(250) NOT NULL,
image_url VARCHAR(250) NOT NULL,
genre VARCHAR(50) NOT NULL,
release_date INTEGER NOT NULL,
url_slug VARCHAR(50) NOT NULL,
	UNIQUE (url_slug),
PRIMARY KEY (id)
)

INSERT INTO public.game 
(title,
 description,
 image_url,
 genre,
 release_date,
 url_slug
 )
VALUES
('Tetris',
 ' Lorem ipsum dolor sit amet consectetur adipisicing elit. 
 Similique officiis quod earum aliquid possimus alias. 
 Tenetur vitae, fugit tempore magni enim velit aspernatur autem optio rem officiis quisquam quasi ipsum!',
 'https://via.placeholder.com/140x100',
 'Puzzle',
 '1984',
 'Tetris'

);

CREATE TABLE score (
id INTEGER GENERATED ALWAYS AS IDENTITY,
game VARCHAR(50) NOT NULL,
player VARCHAR(250) NOT NULL,
score_date DATE NOT NULL,
points INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (game)
	REFERENCES game (url_slug)
	ON DELETE CASCADE	
)

INSERT INTO score
(game,
 player,
 score_date,
 points
 )
VALUES
('Tetris',
 ' John Jones',
 '2021-08-12',
 '3402405'
);




