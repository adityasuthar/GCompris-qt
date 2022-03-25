/* GCompris - readingh.js
 *
 * SPDX-FileCopyrightText: 2015 Johnny Jazeix <jazeix@gmail.com>
 *
 * Authors:
 *   Bruno Coudoin <bruno.coudoin@gcompris.net> (GTK+ version)
 *   Johnny Jazeix <jazeix@gmail.com> (Qt Quick port)
 *
 *   SPDX-License-Identifier: GPL-3.0-or-later
 */
.pragma library
.import QtQuick 2.12 as Quick
.import GCompris 1.0 as GCompris //for ApplicationInfo
.import "qrc:/gcompris/src/core/core.js" as Core

var currentLevel = 0
var items
var maxLevel

var url = "qrc:/gcompris/src/activities/readingh/resource/"
var dataSetUrl= "qrc:/gcompris/src/activities/wordsgame/resource/"

//
var level
// words to display
var words

function start(items_) {
    items = items_
    currentLevel = 0
    var locale = items.locale == "system" ? "$LOCALE" : items.locale

    items.wordlist.loadFromFile(GCompris.ApplicationInfo.getLocaleFilePath(
            dataSetUrl + "default-"+locale+".json"));
    // If wordlist is empty, we try to load from short locale and if not present again, we switch to default one
    var localeUnderscoreIndex = locale.indexOf('_')
    // probably exist a better way to see if the list is empty
    if(items.wordlist.maxLevel == 0) {
        var localeShort;
        // We will first look again for locale xx (without _XX if exist)
        if(localeUnderscoreIndex > 0) {
            localeShort = locale.substring(0, localeUnderscoreIndex)
        }
        else {
            localeShort = locale;
        }
        // If not found, we will use the default file
        items.wordlist.useDefault = true
        items.wordlist.loadFromFile(GCompris.ApplicationInfo.getLocaleFilePath(
        dataSetUrl + "default-"+localeShort+".json"));
        // We remove the using of default file for next time we enter this function
        items.wordlist.useDefault = false
    }
    maxLevel = items.wordlist.maxLevel;
    initLevel();
}

function stop() {
    items.wordDropTimer.stop();
}

function initLevel() {
    items.bar.level = currentLevel + 1;
    items.wordDropTimer.stop();
    items.answerButtonsFlow.visible = false;

    // initialize level
    level = items.wordlist.getLevelWordList(currentLevel + 1);
    items.wordlist.initRandomWord(currentLevel + 1)
    items.textToFind = items.wordlist.getRandomWord()
    Core.shuffle(level.words)
    words = level.words.slice(0, 15)
    items.currentIndex = -1

    items.wordDisplayRepeater.model = words
    items.wordDisplayRepeater.idToHideBecauseOverflow = 0
    items.answerButtonFound.isCorrectAnswer = words.indexOf(items.textToFind) != -1
    items.iAmReady.visible = true
}

function nextLevel() {
    if(maxLevel <= ++currentLevel) {
        currentLevel = 0
    }
    initLevel();
}

function previousLevel() {
    if(--currentLevel < 0) {
        currentLevel = maxLevel - 1
    }
    initLevel();
}

function run() {
    items.wordDropTimer.start();
}

function dropWord() {
    if(++items.currentIndex < words.length) {
        // Display next word
    }
    else {
        items.wordDropTimer.stop();
        items.answerButtonsFlow.visible = true
    }
}
