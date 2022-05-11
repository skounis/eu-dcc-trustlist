# EU-DCC Trust List helper
Command line tools and a web proxy for getting the EU DCC trust list from the dgcg.covidbevis.se.

## Command line
Download the trust list encoded as a JWT.
```
npm run fetch
```

Unpack the trust list
```
npm run unpack
```

The generated files are stored in the temporart `./work` folder.

Clean up
```
npm run clean
```
## Web Proxy
The server fetches and server the Trustlist. 

Start the web proxy
```
npm run dev 
```
Visit
* Production: http://localhost:3000/api/v1/dscs/acc
* Acceptance: http://localhost:3000/api/v1/dscs


# Credits
* SE Digital Covid Certificate Trust Point
    * https://dgcg.covidbevis.se/tp/
    * https://dgcg-qa.covidbevis.se/tp/
    
_Uses paradigms from the article on https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/_