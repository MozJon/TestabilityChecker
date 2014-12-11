﻿var testabilityChecker: TestabilityChecker;

//Message Handler
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "checkTestability") {
            testabilityChecker = new TestabilityChecker();
            testabilityChecker.checkTestability();
            var score: number = testabilityChecker.score;
            var results = testabilityChecker.results;
            sendResponse({ results: results, score: score });
        }
    });