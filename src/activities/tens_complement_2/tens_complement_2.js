/* GCompris - tens_complement_2.js
 *
 * SPDX-FileCopyrightText: 2022 Samarth Raj <mailforsamarth@gmail.com>
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 */
.pragma library
.import QtQuick 2.12 as Quick

var currentLevel = 0
var numberOfLevel = 4
var items

function start(items_) {
    items = items_
    currentLevel = 0
    initLevel()
}

function stop() {
}

function initLevel() {
    items.bar.level = currentLevel + 1
    var arr = ["(", "+", ")+(", "+", ")="]
    for(var i=0;i<arr.length;i++) {
        var card = {
            "symbolValue": arr[i]
        }
        items.symbolListMode.append(card)
    }
    for(var i=0;i<5;i++) {
        var card = {
            "visibility": true
        }
        items.cardListModel.append(card)
    }
}

function nextLevel() {
    if(numberOfLevel <= ++currentLevel) {
        currentLevel = 0
    }
    initLevel();
}

function previousLevel() {
    if(--currentLevel < 0) {
        currentLevel = numberOfLevel - 1
    }
    initLevel();
}
