#TODO

    *Readme

    *Dependencies

    *Commands

    *Tests

    *Doc


OBSERVAÇÃO SÓ QUANDO TIVER UM NOVO MIDDLEWARE DEVE-SE USAR NEXT()

Exemplo:    

      {
    method: 'PUT',
    route: '/:id',
    handlers: [
      users.updateUser,
      users.log
    ]
  }

Aqui next é uma função

      {
    method: 'PUT',
    route: '/:id',
    handlers: [
      users.updateUser,
    ]
  }

Aqui não

jsdoc -c jsdoc-conf.json