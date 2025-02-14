# web-dev-starter

This is a starter project for web development with no frameworks and minimal
dependencies. It is intended to be a starting point for web development projects
that are written in plain HTML, CSS, and JavaScript.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
npm install
```
This will install the necessary dependencies for the project.

## Development

It is recommended to use the VSCode Live Server extension to run the project
locally. This will allow you to see changes in real-time as you make them. There
is no need to run a build process or refresh the page manually. Additionally,
you do not need to setup a local server to run the project.

## Testing

To run the tests for the project, run the following command:

```bash
npm test
```


## Accessibility Lab Answers

1. The original contrast ratio between green (008000) and grey (2A2A2A) returned 2.79:1 which failed all tests. After changing the background to white (FFFFFF), the contrast ratio is now 14.35:1 which passes all tests!

2. A good amount of the site just isn't accessible using the keyboard. It appears teh nav isn't picked up at all due to it being wrapped in that div element mentioned. Changing this to a <nav> tag should fix that. Some of the text uses the <font> tag which doesn't work for some screenreaders, so changing these to the appropriate h1, h2, h3, etc. Should help the screenreader recognize things correctly.

3. The images are an easy fix! Just need to add some alt text so that the screen reader can easily explain what the content of the image is.

4. For the audio player, I added a transcript for the screenreader to recognize. I then also added an option to download the audio file for those without html audio.

5. To make the forms more accessible, I made sure to properly link the labels for inputs in the comment section. I then added a sr-only (screenreader only) class to create an invisible label that informs the screenreader of the input.

6. By changing the show-hide button to actually be a <button> element, I was able to get tab to direct to it. Then by modifying the js, I was able to accept both mouse click and enter key to toggle the button.

7. I was able to make the table more accessible through the use of table header <th> items, as well as a description/caption for the table to help explain the content of it better to any viewer of the site, screenreader or not.

8. I enlarged the text, as the text as provided was very small and hard to read. I also changed the background color of the entire website to ensure there was proper contrast with the heading "Welcome to our wildlife website".