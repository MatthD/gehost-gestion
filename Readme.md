GESHOT GESTION APP
================

### How to use:

Just donwload our lastest release (depending on your OS system) & execute it.


### screen
[!Capture ecran](public/img/gehost-gestion.png)


### Dev

`git clone `
`cd GESHOT && npm install`
`./node_modules/.bin/electron .`



### Format used:
This is the format used in the databases, as it's json it could changed easily at any time

```json
{
  "hotels" : [ // Hotels is an array of object containing hotels infos
    {
      "id" : 42, // an ID for the hotel
      "name" : "formule2", // name of the hotel
      "quality" : 1,  // Class of the hotel : 1 to 4 *,**,***,**** 
      "rooms" : [
        {
          "id" : 1,
          "type" : "simple", // could be double / douche / bain ...
          "avalaible" : true, // Boolean, set if room could be reserved or not
          "nextReservations" : [
            "2017-10-16T18:25:43.511Z - 2017-10-18T18:25:43.511", 
            "2017-10-18T20:25:43.511Z - 2017-10-21T18:25:43.511"// Dates in formats ISO 8601
          ]
        }
      ]
    }
  ]
}
```


ToDO: 

