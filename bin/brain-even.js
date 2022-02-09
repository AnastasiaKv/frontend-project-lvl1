#!/usr/bin/env node

import interactiveGreeting from '../src/cli.js';
import ifEvenGame from '../src/ifEven.js';

const userName = interactiveGreeting();
ifEvenGame(userName);
