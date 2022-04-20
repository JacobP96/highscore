CREATE TABLE game (
id INTEGER GENERATED ALWAYS AS IDENTITY,
title VARCHAR(50) NOT NULL,
description VARCHAR(250) NOT NULL,
image_url VARCHAR(250) NOT NULL,
genre VARCHAR(50) NOT NULL,
release_date DATE(50) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO public.game 
(title,
 description,
 imageUrl,
 genre,
 releaseYear,
 )
VALUES
('Tetris',
 ' Lorem ipsum dolor sit amet consectetur adipisicing elit. 
 Similique officiis quod earum aliquid possimus alias. 
 Tenetur vitae, fugit tempore magni enim velit aspernatur autem optio rem officiis quisquam quasi ipsum!',
 'https://via.placeholder.com/320x320.png?text=Tetris',
 'Puzzle'
 '1984',
);

CREATE TABLE highscores (
id INTEGER GENERATED ALWAYS AS IDENTITY,
game VARCHAR(50) NOT NULL,
player VARCHAR(250) NOT NULL,
score_date DATE NOT NULL,
points INTEGER NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO highscores
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




