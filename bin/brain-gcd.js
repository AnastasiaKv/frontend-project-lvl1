#!/usr/bin/env node

import interactiveGreeting from '../src/cli.js';
import gcdGame from '../src/games/gcd.js';

const userName = interactiveGreeting();
gcdGame(userName);
