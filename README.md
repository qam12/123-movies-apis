# 123-movies-apis

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [UML Diagrams](#UML)
- [Issues](#issues)
- [Endpoints](#endpoints)
- [Response Example](#responseExample)
- [Installation](#installation)

## Introduction

123 Movies is a comprehensive movie streaming application that offers a diverse selection of movies and web series. While many platforms require a subscription for access to premium content, 123 Movies distinguishes itself by providing a vast library of free content. The primary component of the application is its Android app, currently available on the Play Store. The backend is meticulously designed using Node.js and Express.js.

In the initial version (v1), our API primarily featured a curated collection of movies. With the upcoming version (v2), we have introduced exciting new features. Users can now create and delete accounts, ensuring a personalized experience. Additionally, enhancements like faster video rendering and smoother scrolling contribute to an improved overall user interface.

As with any evolving application, there are ongoing maintenance releases to address identified issues. It's important to note that the application is strategically designed for optimal placement of Google ads on mobile devices.

Our API services play a pivotal role in supporting various backend functionalities. However, certain key APIs, such as those responsible for populating our database with movie information, are not publicly disclosed. This strategic decision allows us to maintain a unique and curated content database for our users.

## Features

- Watch free movie and webseries in HD prints.
- Search your movie with using a keywords.
- Browsing paid movies in free on our site.

## UML Diagrams

#### Class Diagrams
<img width="300" alt="Screenshot 2023-11-27 at 12 29 54 AM" src="https://github.com/qam12/123-movies-apis/assets/31346514/3dd88a27-b291-45a4-bb58-db11a9afa7c8">

#### Architecture Diagrams
<img width="500" alt="Screenshot 2023-11-27 at 1 24 48 AM" src="https://github.com/qam12/123-movies-apis/assets/31346514/1b4b2e68-087d-4798-bfef-f395dc753a0d">

## Endpoints

| Endpoint | Description | Method |
| --------------- | --------------- | --------------- |
| /user/signup    | use for register user    | POST |
| /user/login    | use for login user    | POST |

## Response Example

`{ "method": "GET", 
"url": "/api/endpoint1", 
"headers": { "Authorization": "my-access-token" } }`

## Response Example

- Pagination is not working on api end.
- Search takes to much time to load data.
- Player is unable to play some movies from list.

## Installation

Instructions on how to install and set up your API locally.

```bash
# Clone the repository
git clone https://github.com/qamb12/123-movies-apis.git

# Navigate to the project directory
cd 123-movies-apis

# Install dependencies
npm install

# run services
node index.js

# run services
- npm run lint:fix
- npm run format:check
- npm run format:fix:all



