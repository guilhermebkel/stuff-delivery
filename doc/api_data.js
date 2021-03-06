define({ "api": [
  {
    "type": "post",
    "url": "/asgardian/login",
    "title": "Login",
    "name": "Login",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"email\": \"mota@guilherr.me\",\n\t\t\t \"password\": \"12a3\"\n    }",
          "type": "json"
        }
      ]
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
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS\",\n}",
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
    "name": "Signup",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"email\": \"mota@guilherr.me\",\n\t\t\t \"password\": \"12a3\",\n      \"name\": \"Mota\"\n    }",
          "type": "json"
        }
      ]
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
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS\",\n  \"email\": \"mota@guilherr.me\",\n  \"name\": \"Mota\",\n  \"id\": 1\n}",
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
  },
  {
    "type": "post",
    "url": "/hermes/payload",
    "title": "Create payload",
    "name": "CreatePayload",
    "group": "Hermes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Payload name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "payloadDimensions",
            "description": "<p>Payload dimensions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sender",
            "description": "<p>Sender info.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "receiver",
            "description": "<p>Receiver info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Xiaomi A1\",\n\t\t\t\t\"payloadDimensions\": {\n\t\t\t\t\t\"height\": 100,\n\t\t\t\t\t\"length\": 100,\n\t\t\t\t\t\"weight\": 200,\n\t\t\t\t\t\"width\": 100\n\t\t\t\t},\n\t\t\t\t\"receiver\": {\n\t\t\t\t\t\"name\": \"Guilherme Mota\",\n\t\t\t\t\t\"address\": \"Rua Savassi\",\n\t\t\t\t\t\"city\": \"Belo Horizonte\",\n\t\t\t\t\t\"country\": \"Brasil\",\n\t\t\t\t\t\"state\": \"Minas Gerais\",\n\t\t\t\t\t\"zip_code\": 18250300\n\t\t\t\t},\n\t\t\t\t\"sender\": {\n\t\t\t\t\t\"name\": \"Marta\",\n\t\t\t\t\t\"address\": \"Rua dos Anjos\",\n\t\t\t\t\t\"city\": \"Vitória\",\n\t\t\t\t\t\"country\": \"Brasil\",\n\t\t\t\t\t\"state\": \"Espírito Santo\",\n\t\t\t\t\t\"zip_code\": 30025005\n\t\t\t\t}\n    }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth admin token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "newPayloadData",
            "description": "<p>Some details of the created payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"tracking_code\": \"SS123456789BR\"\n}",
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
            "description": "<p>The new payload data wasn't supplied or is bad formatted.</p>"
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
    "filename": "apps/hermes/src/routes.ts",
    "groupTitle": "Hermes"
  },
  {
    "type": "post",
    "url": "/hermes/track",
    "title": "Create track subscription",
    "name": "CreateTrackSubscription",
    "group": "Hermes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Payload name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingCode",
            "description": "<p>Payload tracking code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"name\": \"Xiaomi A1\",\n\t\t\t \"trackingCode\": \"SS123456789BR\"\n    }",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "newTrackSubscriptionData",
            "description": "<p>Some details of the new subscription.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n}",
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
            "description": "<p>name/trackingCode weren't supplied or are bad formatted.</p>"
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
    "filename": "apps/hermes/src/routes.ts",
    "groupTitle": "Hermes"
  },
  {
    "type": "get",
    "url": "/hermes/track",
    "title": "Get track subscriptions",
    "name": "GetCurrentTrackSubscriptions",
    "group": "Hermes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MS\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tracks",
            "description": "<p>A list of current track.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"tracks\": [\n     {\n       \"id\": 2,\n       \"name\": \"Xiaomi A1\",\n       \"last_place\": \"Belo Horizonte, MG\",\n       \"last_place_consolidated\": \"Courier\",\n       \"last_update\": \"02/04/2020\",\n       \"status\": \"New\",\n       \"tracking_code\": \"SS123456789BR\"\n     }\n  ]\n}",
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
            "field": "ResourceNotFound",
            "description": "<p>There are no subscriptions being tracked by the logged user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ResourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apps/hermes/src/routes.ts",
    "groupTitle": "Hermes"
  }
] });
