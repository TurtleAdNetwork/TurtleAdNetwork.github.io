---
layout: page
title: Ad
permalink: /ad/
---
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create an add</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="https://github.com/TurtleAdNetwork/TurtleAdNetwork.github.io/blob/master/_pages/process.js"></script>
</head>
<body>
<form>
    <label for="websites">Choose a website:</label>

    <select name="websites" id="websites">

    </select>
    <br>
    <label for="impressions">Choose the amount off impressions</label>
    <input type="number" name="impressions" id="impressions" step="100" min="0">
    <br>
    <label for="price">Price/impression</label>
    <input type="number" name="price" id="price" disabled>
    <input class="priceCurrency" disabled>
    <br>
    <label for="totalprice" id="totalpricelabel">Total price</label>
    <input type="number" name="totalprice" id="totalprice" disabled>
    <input class="priceCurrency" disabled>
    <br>
    <label for="headlineInput">Headline</label>
    <input name="headlineInput" id="headlineInput" maxlength="35">
    <br>
    <label for="descriptionInput">Description</label>
    <input name="descriptionInput" id="descriptionInput" maxlength="115">
    <br>
    <label for="urlInput">Url</label>
    <input type="url" name="urlInput" id="urlInput" maxlength="115">
    <br>
    <label for="totalInput">Total message</label>
    <input name="totalInput" id="totalInput" disabled width="150">
</form>
</body>
</html>
```
