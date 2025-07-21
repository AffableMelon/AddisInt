##  Dependencies and Why

###  Babel
I  used Babel to compile modern JavaScript (ES6+) which react uses into a version (ES5) that is compatible with older browsers ensuring the app runs reliably across most environments.

###  Webpack
Webpack bundles all the app's dependencies into optimized output files. It builds a dependency graph and generates the minimal set of files needed for deployment (`/dist` folder).

### Json server
To serve the db.json file im using I relied on a small json web server that serves the db.json file instead of building a full backend because it wasn't really required and time constriant 3 days

# Custom WebPack react app

In this project i configured webpack for a custom CRUD react app
The webpack supports:
* Environment variables 
*  Custom loaders for babael and files like images 
*  Entry and output clearely defined 
* Plugin used for HTML and environment file support

The webpack i wrote can differentiate between a development or a production server . The main difference being in developemnt the backend api is set to localhost:3000/songs
but in production it should be set to url of the prod instead

Finally when the webpack builds it builds to a deploy folder named 
" /dist "
## API
The backend used is a json server and the endpoint is localhost on port 3000 
The only endpoint is /songs 
It supports full CRUD features like 
* Getting list of songs
* Getting a specific song
* Posting / creating a song
* Put / updating a song
* Delete / removing a song


# Scripts / Commands 

After cloning the repository: 
> npm install

## Development (React + Webpack Dev Server)
> npm run start
## Build for production
> npm run build
## Start JSON Server (for API)
> npm run server

# AI Usage 

I used AI for most of the styling. As the app was a task for a short deadline i didn't want to stay long thinking about what it should look like.

I also used AI with bugs that I ran to when setting up things like pagination as i wasn't familiar with the concept before and relied on scroll behaviour instead.

