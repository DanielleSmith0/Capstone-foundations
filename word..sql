CREATE TABLE baseWords (
    id SERIAL PRIMARY KEY,
    word VARCHAR(50) NOT NULL,
);

CREATE TABLE customWords (
    id SERIAL PRIMARY KEY,
    word VARCHAR(50) NOT NULL,
);

CREATE TABLE allWords {
    id SERIAL PRIMARY KEY,
    base_id INTEGER NOT NULL REFERENCES baseWords(id),
    custom_id INTEGER NOT NULL REFERENCES customWords(id)
}

INSERT INTO baseWords (word)
            values ('run'),
            ('rice'),
            ('rat'),
            ('carrot'),
            ('bird'),
            ('four'),
            ('bear'),
            ('deer'),
            ('bread'),
            ('crayons'),
            ('drive'),
            ('freckles'),
            ('grandpa'),
            ('prince'),
            ('tree'),
            ('rabbit'),
            ('really'),
            ('berry'),
            ('blueberry'),
            ('guitar'),
            ('sit'),
            ('soup'),
            ('salt'),
            ('dance'),
            ('pencil'),
            ('listen'),
            ('bus'),
            ('horse'),
            ('yes'),
            ('scoop'),
            ('slow'),
            ('smell'),
            ('snail'),
            ('spoon'),
            ('stop'),
            ('swim');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}