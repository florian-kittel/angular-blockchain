#!/bin/sh
rm -rf docs
cp -r dist docs
git subtree push --prefix docs/angular-blockchain origin gh-pages
