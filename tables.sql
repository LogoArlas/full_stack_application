CREATE TABLE IF NOT EXISTS "User" (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS Note (
    noteId SERIAL PRIMARY KEY,
    userId INT,
    text VARCHAR(255),
    CONSTRAINT userId FOREIGN KEY(userId)
    REFERENCES "User"(userId)
);

--User is a reserved keyword. Use quotes to use it is a table name.