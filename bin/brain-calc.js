#!/usr/bin/env node

import interactiveGreeting from '../src/cli.js';
import calcGame from '../src/games/calc.js';

const userName = interactiveGreeting();
calcGame(userName);
