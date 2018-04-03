# Frontend For Designers - Assignment 3

In this readme you can read information about my last assignment for FFD.
The assignment consists of a web app (desktop) that shows data gathered from the spotify API.
The user can login with their own spotify account and see their personal playlists and songs.

Name: Jimmy de Kroon
StudNr: 500716228
Teacher: Koop Reynders

![](loginscreen.png)

## What can the user do?

The user can choose how they want to login:
- With an existing spotify account
- Create a new spotify account
- Login with a facebook account

![](spotifylogin.png)

After the user is logged in the api will request the playlists from their account and show them on the top of the screen

![](appstep1.png)

The user can then click one of the playlists to show the tracks inside that specific playlist
The selected playlist is indicated by a green border

![](appstep2.png)

## UI interactions & animations

All playlists will be shown horizontally, the user can scroll trough their playlists to find the one they are looking for (if the user has enough playlists)


After the user selects one of their playlists the tracks inside will animate into the screen (from the bottom up). Everytime the user selects a new playlist the current tracks will move away from the screen and the new tracks will enter.

## Interesting bits of code

The base of the app is build around the API data, so the API request is one of the most important functions.
The request checks for errors, if there are none a request is send to the spotify servers. Spotify API will only respond in this case if there is a valid access token (acquired by logging in) because we are requesting personal information. after the request is succesful we can work with the data the API send us, we start writing code in the succes: function()
```javascript
if (error) {
  alert('There was an error during the authentication');
} else {
  if (access_token) {
    $.ajax({
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        success: function(response) {

        }
      }
    }};
```
