# Commission Statement Project

## tl;dr

This repository holds the source code for the "commission statement project", which I built to help ThoughtWorks UK demand operations to auto-generate commission statements for demand team members.

The app is hosted on [GitHub pages](https://commissionsstatementproject.github.io/main/).

Questions? Just ping me. My email is rahul.rakshit@thoughtworks.com.

## How Should It Be Maintained?

What do I mean by maintaining the app? The app expects information to be in certain cells of the spreadsheet - eg. currently the date is on cell E6 and it won't work if it is anywhere else. Has your spreadsheet changed? Do you want the template to look different? You'll need to ask a developer to go and implement those changes to the app.

There is only one set of credentials: the credentials to this GitHub account. If you need changes made either I, or if I am busy, another ThoughtWorks developer may have these credentials to make the necessary changes.

## About The Code

There is a number of reasons why ensuring continuity of beach projects is so difficult. I have made a couple of decisions with this app to make sure it is as easy as possible to handover this app:

- It has minimal infrastructure: There are no credentials and keys to share. Everything is in this GitHub repo in this Github account. The app is frontend only and is hosted for free on GitHub pages. Publishing is as easy as `npm run deploy`.
- All sheet definitions are in one file: The sheet is parsed dynamically based on the configuration in `./src/sheetDefinitions/index.js`. Small position or format changes in the sheet should be as simple as changing the relevant lines in this config file. Make sure to update the tests!
- Common Stack: React is mainstream.
- Testing Strategy: I avoided mockist, isolated tests as much as possible. That way you should know rightaway when you've broken something and won't need to waste time updating mocks. I also chose Kent Dodd's [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for that reason.

## Microsoft Excel Bug

If you are exporting the csv file from Microsoft Excel, make sure that the first row isn't empty. Microsoft Excel seems to strip empty rows when exporting as csv, which will break the app. Putting in _any_ content into cell A1 before exporting should fix the issue.

## Why Isn't It OOP?

No real reason. I wanted to try something new.
