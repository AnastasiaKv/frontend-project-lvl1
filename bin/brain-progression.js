#!/usr/bin/env node

import interactiveGreeting from '../src/cli.js';
import progressionGame from '../src/games/progression.js';

const userName = interactiveGreeting();
progressionGame(userName);
