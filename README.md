#TODO

    *Readme

    *Dependencies

    *Commands

    *Tests

    *Doc


OBSERVAÇÃO SÓ QUANDO TIVER UM NOVO MIDDLEWARE DEVE-SE USAR NEXT()

Exemplo:    

Aqui next é uma função
      {
    method: 'PUT',
    route: '/:id',
    handlers: [
      users.update,
      users.log
    ]
  }

Aqui não

      {
    method: 'PUT',
    route: '/:id',
    handlers: [
      users.update,
    ]
  }



jsdoc -c jsdoc-conf.json -> global
./node_modules/.bin/jsdoc -c jsdoc-conf.json -> local powershell win
