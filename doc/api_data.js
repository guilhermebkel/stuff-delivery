define({ "api": [
  {
    "type": "post",
    "url": "/asgardian/login",
    "title": "Login",
    "name": "login",
    "group": "Asgardian",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"AShdjk1212KJSAkrlp@213HKD&&123.Qwqep@213HKD&&1n123\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidDataSupplied",
            "description": "<p>Email/Password weren't supplied or they are bad formatted.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Email doesn't belongs to anyone or password is incorrect.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidDataSupplied\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidCredentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apps/asgardian/src/routes.ts",
    "groupTitle": "Asgardian"
  },
  {
    "type": "post",
    "url": "/asgardian/signup",
    "title": "Signup",
    "name": "signup",
    "group": "Asgardian",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authenticated token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>New user email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>New user id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"AShdjk1212KJSAkrlp@213HKD&&123.Qwqep@213HKD&&1n123\",\n  \"email\": \"mota@guilherr.me\",\n  \"name\": \"Mota\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidDataSupplied",
            "description": "<p>Email/Password/Name weren't supplied or they are bad formatted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"InvalidDataSupplied\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apps/asgardian/src/routes.ts",
    "groupTitle": "Asgardian"
  }
] });
