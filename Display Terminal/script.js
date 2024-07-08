var messageWelcome = "Welcome, ";
let userName = "Bianca, ";

let clickCounter = 0;

const logText = document.getElementById('logParagraph');
const welcomeHeader = document.getElementById('welcomeHeader');

const welcomeHeader = document.getElementById ('welcomeHeader');

function DisplayUserWelcome ()
{
   welcomeHeader.innerHTML = `${messageWelcome}${username}`;
  // console.log ("Howdy");
  FakeLogThis("Howdy");
}

function FakeLogThis(_textToLog)
{
    console.log(_textToLog);
    logText.innerHTML = _textToLog;
}

function ClickedExecuteButton()
{
clickCounter = clickCounter + 1;
if (clickCounter ==1 )
    {
        FakeLogThis ("You've clicked me once");
    }
    else{
        FakeLogThis ("You clicked this" + clickCounter + "times!"); 
    }
}