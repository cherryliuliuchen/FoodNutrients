---
title: Food v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="food">Food v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.nal.usda.gov">https://api.nal.usda.gov</a>

* <a href="http://localhost:5000">http://localhost:5000</a>

* <a href="https://foodapp-cqdcbbc6d8gqambb.germanywestcentral-01.azurewebsites.net">https://foodapp-cqdcbbc6d8gqambb.germanywestcentral-01.azurewebsites.net</a>

# Authentication

- HTTP Authentication, scheme: noauth 

<h1 id="food-default">default</h1>

## get__fdc_v1_foods_search

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/fdc/v1/foods/search \
  -H 'Accept: application/json'

```

```http
GET https://api.nal.usda.gov/fdc/v1/foods/search HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/fdc/v1/foods/search',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.nal.usda.gov/fdc/v1/foods/search',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.nal.usda.gov/fdc/v1/foods/search', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/fdc/v1/foods/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/fdc/v1/foods/search");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/fdc/v1/foods/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /fdc/v1/foods/search`

*https://api.nal.usda.gov/fdc/v1/foods/search?&query=cheddar&api_key=2Si9Mhg7EhQkRqF72ULhkdtOghdO2h8LbRkVjISr*

<h3 id="get__fdc_v1_foods_search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|null|query|string|false|none|
|query|query|string|false|none|
|api_key|query|string|false|none|

> Example responses

<h3 id="get__fdc_v1_foods_search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__fdc_v1_foods_search-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__fdc_v1_food_2344813

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/fdc/v1/food/2344813 \
  -H 'Accept: application/json'

```

```http
GET https://api.nal.usda.gov/fdc/v1/food/2344813 HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/fdc/v1/food/2344813',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.nal.usda.gov/fdc/v1/food/2344813',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.nal.usda.gov/fdc/v1/food/2344813', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/fdc/v1/food/2344813', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/fdc/v1/food/2344813");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/fdc/v1/food/2344813", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /fdc/v1/food/2344813`

*https://api.nal.usda.gov/fdc/v1/food/2341142?api_key=2Si9Mhg7EhQkRqF72ULhkdtOghdO2h8LbRkVjISr*

<h3 id="get__fdc_v1_food_2344813-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|none|

> Example responses

<h3 id="get__fdc_v1_food_2344813-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__fdc_v1_food_2344813-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_food_search

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/api/food/search \
  -H 'Accept: application/json'

```

```http
GET https://api.nal.usda.gov/api/food/search HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/api/food/search',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.nal.usda.gov/api/food/search',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.nal.usda.gov/api/food/search', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/api/food/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/food/search");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/api/food/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/food/search`

*azure query food*

<h3 id="get__api_food_search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|

> Example responses

<h3 id="get__api_food_search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__api_food_search-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_food_167782

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/api/food/167782 \
  -H 'Accept: application/json'

```

```http
GET https://api.nal.usda.gov/api/food/167782 HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/api/food/167782',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.nal.usda.gov/api/food/167782',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.nal.usda.gov/api/food/167782', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/api/food/167782', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/food/167782");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/api/food/167782", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/food/167782`

*queryfoodbyid*

> Example responses

<h3 id="get__api_food_167782-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__api_food_167782-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_user_register

> Code samples

```shell
# You can also use wget
curl -X POST https://api.nal.usda.gov/api/user/register \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://api.nal.usda.gov/api/user/register HTTP/1.1
Host: api.nal.usda.gov
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "name": "AdminUser",
  "email": "admin@example.com",
  "password": "123456"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/api/user/register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.nal.usda.gov/api/user/register',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.nal.usda.gov/api/user/register', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://api.nal.usda.gov/api/user/register', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/user/register");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://api.nal.usda.gov/api/user/register", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/user/register`

*register*

> Body parameter

```json
{
  "name": "AdminUser",
  "email": "admin@example.com",
  "password": "123456"
}
```

<h3 id="post__api_user_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

<h3 id="post__api_user_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="post__api_user_register-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_user_login

> Code samples

```shell
# You can also use wget
curl -X POST https://api.nal.usda.gov/api/user/login \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://api.nal.usda.gov/api/user/login HTTP/1.1
Host: api.nal.usda.gov
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "email": "adminadmin@example.com",
  "password": "87654321"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/api/user/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.nal.usda.gov/api/user/login',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.nal.usda.gov/api/user/login', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://api.nal.usda.gov/api/user/login', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/user/login");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://api.nal.usda.gov/api/user/login", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/user/login`

*adminlogin*

> Body parameter

```json
{
  "email": "adminadmin@example.com",
  "password": "87654321"
}
```

<h3 id="post__api_user_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

<h3 id="post__api_user_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="post__api_user_login-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_user_me

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/api/user/me \
  -H 'Accept: application/json' \
  -H 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4'

```

```http
GET https://api.nal.usda.gov/api/user/me HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json
x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4

```

```javascript

const headers = {
  'Accept':'application/json',
  'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4'
};

fetch('https://api.nal.usda.gov/api/user/me',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4'
}

result = RestClient.get 'https://api.nal.usda.gov/api/user/me',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4'
}

r = requests.get('https://api.nal.usda.gov/api/user/me', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/api/user/me', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/user/me");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-auth-token": []string{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWI5MTk2NWFhZDY4OWMyZjAwNjc4In0sImlhdCI6MTcyNTI4MzIzMiwiZXhwIjoxNzI1Mjg2ODMyfQ.qZEJuslINcPAcJxM0Dd5Ph02O6_ORPgGZN5U_aKCNX4"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/api/user/me", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/user/me`

*userinformation*

<h3 id="get__api_user_me-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-token|header|string|false|none|

> Example responses

<h3 id="get__api_user_me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__api_user_me-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_myfood_

> Code samples

```shell
# You can also use wget
curl -X POST https://api.nal.usda.gov/api/myfood/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'

```

```http
POST https://api.nal.usda.gov/api/myfood/ HTTP/1.1
Host: api.nal.usda.gov
Content-Type: application/json
Accept: application/json
x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4

```

```javascript
const inputBody = '{
  "fdcId": "167782",
  "description": "Test delete"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
};

fetch('https://api.nal.usda.gov/api/myfood/',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
}

result = RestClient.post 'https://api.nal.usda.gov/api/myfood/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
}

r = requests.post('https://api.nal.usda.gov/api/myfood/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://api.nal.usda.gov/api/myfood/', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/myfood/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "x-auth-token": []string{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://api.nal.usda.gov/api/myfood/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/myfood/`

*addmyfood*

> Body parameter

```json
{
  "fdcId": "167782",
  "description": "Test delete"
}
```

<h3 id="post__api_myfood_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-token|header|string|false|none|
|body|body|object|false|none|

> Example responses

<h3 id="post__api_myfood_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="post__api_myfood_-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
noauthAuth
</aside>

## get__api_myfood_

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/api/myfood/ \
  -H 'Accept: application/json' \
  -H 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'

```

```http
GET https://api.nal.usda.gov/api/myfood/ HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json
x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4

```

```javascript

const headers = {
  'Accept':'application/json',
  'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
};

fetch('https://api.nal.usda.gov/api/myfood/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
}

result = RestClient.get 'https://api.nal.usda.gov/api/myfood/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
}

r = requests.get('https://api.nal.usda.gov/api/myfood/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/api/myfood/', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/myfood/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-auth-token": []string{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/api/myfood/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/myfood/`

*getmyfood*

<h3 id="get__api_myfood_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-token|header|string|false|none|

> Example responses

<h3 id="get__api_myfood_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__api_myfood_-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## delete__api_myfood_66d8274e0e648fb9f5d5d480

> Code samples

```shell
# You can also use wget
curl -X DELETE https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480 \
  -H 'Accept: application/json' \
  -H 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'

```

```http
DELETE https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480 HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json
x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4

```

```javascript

const headers = {
  'Accept':'application/json',
  'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
};

fetch('https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
}

result = RestClient.delete 'https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4'
}

r = requests.delete('https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-auth-token": []string{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWZhZWY1ZWQ0NDQxNjliNzQ0NjExIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MjU0NDA5MzMsImV4cCI6MTcyNTQ0NDUzM30.eL8m5khZt5QT52qE4wTFxaRfs4DcI9ZeizyyjTnXLc4"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://api.nal.usda.gov/api/myfood/66d8274e0e648fb9f5d5d480", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/myfood/66d8274e0e648fb9f5d5d480`

*deletemyfood*

<h3 id="delete__api_myfood_66d8274e0e648fb9f5d5d480-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-token|header|string|false|none|

> Example responses

<h3 id="delete__api_myfood_66d8274e0e648fb9f5d5d480-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="delete__api_myfood_66d8274e0e648fb9f5d5d480-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__api_user_admin_66d5b91965aad689c2f00678

> Code samples

```shell
# You can also use wget
curl -X PUT https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc'

```

```http
PUT https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678 HTTP/1.1
Host: api.nal.usda.gov
Content-Type: application/json
Accept: application/json
x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc

```

```javascript
const inputBody = '{
  "name": "Yayaya",
  "isActive": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc'
};

fetch('https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc'
}

result = RestClient.put 'https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc'
}

r = requests.put('https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'x-auth-token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "x-auth-token": []string{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNWRjZTFjYmYyZTE2MjIxMzA4MDg1IiwiaXNBZG1pbiI6dHJ1ZX0sImlhdCI6MTcyNTM1NTMzOSwiZXhwIjoxNzI1MzU4OTM5fQ.Fc-CAxrJ2ZGY9P6W9utlNcAHx5UVkWNvqs33i2TSbJc"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://api.nal.usda.gov/api/user/admin/66d5b91965aad689c2f00678", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/user/admin/66d5b91965aad689c2f00678`

*adminmodifyuser*

> Body parameter

```json
{
  "name": "Yayaya",
  "isActive": true
}
```

<h3 id="put__api_user_admin_66d5b91965aad689c2f00678-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-token|header|string|false|none|
|body|body|object|false|none|

> Example responses

<h3 id="put__api_user_admin_66d5b91965aad689c2f00678-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="put__api_user_admin_66d5b91965aad689c2f00678-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__api_user_admin

> Code samples

```shell
# You can also use wget
curl -X POST https://api.nal.usda.gov/api/user/admin \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-token: string'

```

```http
POST https://api.nal.usda.gov/api/user/admin HTTP/1.1
Host: api.nal.usda.gov
Content-Type: application/json
Accept: application/json
x-auth-token: string

```

```javascript
const inputBody = '{
  "name": "newUser",
  "email": "newuser@example.com",
  "password": "newUserPassword",
  "isActive": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-auth-token':'string'
};

fetch('https://api.nal.usda.gov/api/user/admin',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-auth-token' => 'string'
}

result = RestClient.post 'https://api.nal.usda.gov/api/user/admin',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-auth-token': 'string'
}

r = requests.post('https://api.nal.usda.gov/api/user/admin', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'x-auth-token' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://api.nal.usda.gov/api/user/admin', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/user/admin");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "x-auth-token": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://api.nal.usda.gov/api/user/admin", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/user/admin`

*admincreatenew*

> Body parameter

```json
{
  "name": "newUser",
  "email": "newuser@example.com",
  "password": "newUserPassword",
  "isActive": true
}
```

<h3 id="post__api_user_admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-token|header|string|false|none|
|body|body|object|false|none|

> Example responses

<h3 id="post__api_user_admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="post__api_user_admin-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__api_user_validate-token

> Code samples

```shell
# You can also use wget
curl -X GET https://api.nal.usda.gov/api/user/validate-token \
  -H 'Accept: application/json'

```

```http
GET https://api.nal.usda.gov/api/user/validate-token HTTP/1.1
Host: api.nal.usda.gov
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.nal.usda.gov/api/user/validate-token',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.nal.usda.gov/api/user/validate-token',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.nal.usda.gov/api/user/validate-token', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://api.nal.usda.gov/api/user/validate-token', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://api.nal.usda.gov/api/user/validate-token");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.nal.usda.gov/api/user/validate-token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/user/validate-token`

*http://localhost:5000/api/user/validate-token*

> Example responses

<h3 id="get__api_user_validate-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<h3 id="get__api_user_validate-token-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

