# API Template

Template for my graduation work

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

npm run dev runs server with file watch

jsdoc -c jsdoc-conf.json -> global

./node_modules/.bin/jsdoc -c jsdoc-conf.json -> local powershell windows/other OS

### Prerequisites

Obrigatory deps to run this project

```
Node >= 8.11
Npm >= 5.6.0 
MongoDB latest
```

### Installing

A step by step series of examples that tell you have to get a development env running

Intalling

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Observations

 ### These examples below show when to use next();    

* Available route next() usage

```
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      users.update,
      users.log
    ]
  }
```

* Not available rout next() usage

```

  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      users.update,
    ]
  }
```


## Deployment

Add additional notes about how to deploy this on a live system

```
First you need to configure the env file of you prefered deploy or what is implemented
```
<!-- ## Built With

 ## Contributing

 -->

## Versioning

We use [git](https://git-scm.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BrunoYamashita/TCC-api/tags). 

## Authors

* **Bruno Yamashita** - *Initial work* - [BrunoYamashita](https://github.com/BrunoYamashita)

See also the list of [contributors](https://github.com/BrunoYamashita/TCC-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

