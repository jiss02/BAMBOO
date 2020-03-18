# BAMBOO



<p align="center">
  <h3 align="center">대나무 숲 만들기 실습</h3>
  <p align="center">
    React와 Django Rest Frame워크 활용하기<br /><br />
    <img src="https://user-images.githubusercontent.com/42693808/76918039-947b8800-6908-11ea-9672-82deda42a439.png"/><br/>
</p>



&nbsp;
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Python](#python)
    * [Prerequisites](#prerequisites)
    * [Requirements](#requirements)
    * [Starting Django](#starting-django)
  * [React](#react)
    * [Starting React](#starting-react)
    * [Dependency](#dependency)

&nbsp;
<!-- ABOUT THE PROJECT -->

## About The Project


### Built With

* Python Django
* Django-Rest-Framework
* SQLite3
* React.js

&nbsp;
<!-- GETTING STARTED -->

## Getting Started

### Python

---

#### Prerequisites

Setup project environment with [venv](https://docs.python.org/3/library/venv.html) and [pip](https://pip.pypa.io).

* setting venv

```bash
$ python3 -m venv venv
$ . venv/Scripts/activate
```

* Django

```bash
$ pip install django
```

&nbsp;

#### Requirements

```
asgiref==3.2.3
Django==3.0.2
django-cors-headers==3.2.1
djangorestframework==3.11.0
pytz==2019.3
sqlparse==0.3.0
```

> not including some modules.

&nbsp;

#### Starting Django

1. Clone the repo

```sh
$ git clone https://github.com/jiss02/BAMBOO.git
```

2. Migrate Database

```sh
$ cd djangoback
$ python manage.py migrate
```

3. Run server

```sh
$ python manage.py runserver
```

---

### React

---

#### Starting React

- Install Node.js 10 LTS
- Clone the repository

```
git clone https://github.com/jiss02/BAMBOO.git
```

- Install dependencies

```
cd reactfront
npm install
```

- Build and run the project

```
npm start
```



#### Dependency

```
"dependencies": {
    "@material-ui/core": "^4.8.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.3.0"
  }
```