---
layout: page
title: Submit an Ad
permalink: /ad/
---
**Note:** TurtleShell web extension will be required to Pay & Send the Ad.<br>
<a href="https://addons.mozilla.org/en-US/firefox/addon/turtleshell/">Download: TurtleShell on FireFox</a>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create an add</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="process.js"></script>
</head>
<body>
<form>
    <label for="websites">Choose a website:</label>

    <select name="websites" id="websites">

    </select>
    <br>
    <label for="impressions">Choose the amount of impressions</label>
    <input type="number" name="impressions" id="impressions" step="100" min="0">
    <br>
    <label for="price">Price/impression</label>
    <input type="number" name="price" id="price" disabled>
    <input class="priceCurrency" size="5%" disabled>
    <br>
    <label for="totalprice" id="totalpricelabel">Total price</label>
    <input type="number" name="totalprice" id="totalprice" disabled>
    <input class="priceCurrency" size="5%" disabled>
    <br>
    <label for="headlineInput">Ad Headline</label>
    <input name="headlineInput" id="headlineInput" maxlength="35">
    <br>
    <label for="descriptionInput">Ad Description</label>
    <input name="descriptionInput" id="descriptionInput" size="45%" maxlength="115">
    <br>
    <label for="urlInput">Ad Url</label>
    <input type="url" name="urlInput" id="urlInput" size="30%" maxlength="115">
    <br>
    <label for="totalInput">Full Ad</label>
    <input name="totalInput" id="totalInput" maxlength="140" disabled width="150">
    <br>
    <input id="btnSubmit"  type="button" value="Post Advertisement"/>
</form>
</body>
</html>
