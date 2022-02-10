#!/usr/bin/env node

import interactiveGreeting from '../src/cli.js';
import ifPrimeGame from '../src/games/ifPrime.js';

const userName = interactiveGreeting();
ifPrimeGame(userName);
