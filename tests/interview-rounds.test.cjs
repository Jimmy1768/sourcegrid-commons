#!/usr/bin/env node
/*
 * Text checks over the Interview Skill after the Rounds change.
 * The commons is skills/; this file lives outside it, under tests/.
 *
 *   node tests/interview-rounds.test.cjs new            new behaviour (group: new)
 *   node tests/interview-rounds.test.cjs note           the adapted metadata note
 *   node tests/interview-rounds.test.cjs kept           what must not change
 *   node tests/interview-rounds.test.cjs start-command  the repo's entry point
 *
 * With no argument every check runs. Exit 0 means every selected check passed.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKILL_PATH = path.join(ROOT, 'skills', 'aide', 'interview', 'SKILL.md');

function readText(p) { return fs.readFileSync(p, 'utf8'); }
function flatten(t) { return t.replace(/\s+/g, ' ').trim(); }
function splitLines(t) {
  const body = t.endsWith('\n') ? t.slice(0, -1) : t;
  return body.split(/\r?\n/);
}
function need(cond, msg) { if (!cond) { throw new Error(msg); } }
function needContains(hay, needle, what) {
  if (!hay.includes(needle)) { throw new Error(what + ': the file does not hold ' + JSON.stringify(needle)); }
}
function needLacks(hay, needle, what) {
  if (hay.includes(needle)) { throw new Error(what + ': the file still holds ' + JSON.stringify(needle)); }
}

const skillText = readText(SKILL_PATH);
const skillFlat = flatten(skillText);
const skillLines = splitLines(skillText);
const fmMatch = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(skillText);
const frontmatter = fmMatch ? fmMatch[1] : null;
const fmLines = frontmatter === null ? [] : splitLines(frontmatter);

const TESTS = [];
function test(group, name, fn) { TESTS.push({ group: group, name: name, fn: fn }); }

// ---- the new behaviour: Rounds asks one question of the frontier ----

test('new', 'rounds-asks-one-question-of-the-frontier', function () {
  needContains(
    skillFlat,
    'Ask one question of the frontier at a time: the one the next step waits on, then wait for the answer before asking another.',
    'Rounds must ask one question at a time'
  );
});

test('new', 'rounds-drops-the-old-wording', function () {
  needLacks(skillFlat, 'Ask the whole frontier at once', 'Rounds');
  needLacks(skillFlat, 'then wait for the answers before asking more', 'Rounds');
  needLacks(skillFlat, 'Number each question', 'Rounds');
  needLacks(skillFlat, 'Where there are several options, lay them out.', 'Rounds: the bare options bullet');
  needLacks(skillFlat, 'Each round of answers reshapes the tree', 'Rounds');
  needLacks(skillFlat, 'ask the next round', 'Rounds');
});

test('new', 'rounds-keeps-a-short-title', function () {
  needContains(skillFlat, '- Give the question a short title.', 'Rounds');
});

test('new', 'rounds-keeps-the-recommended-answer', function () {
  needContains(
    skillFlat,
    '- Give the answer you recommend, and word the question so that "yes" accepts your recommendation.',
    'Rounds'
  );
});

test('new', 'rounds-lays-several-options-out-as-a-list', function () {
  needContains(
    skillFlat,
    '- Where there are several options, lay them out as a list, one to a line, the recommended one first and marked "(recommended)".',
    'Rounds'
  );
});

test('new', 'rounds-asks-the-new-frontiers-next-question', function () {
  needContains(
    skillFlat,
    'Each answer reshapes the tree. Settled decisions open the questions that waited on them: work out the new frontier and ask its next question.',
    'Rounds'
  );
});

test('new', 'file-keeps-its-shape', function () {
  const anchors = [
    [0, '---'],
    [3, 'license: MIT'],
    [4, 'metadata:'],
    [9, '  adapted: the Rounds section asks one question of the frontier at a time'],
    [10, '---'],
    [11, ''],
    [12, '# Interview'],
    [17, '## The design tree'],
    [27, '## Rounds'],
    [41, '## Facts are yours to find; decisions are theirs'],
    [52, '## Done'],
    [56, 'person who asked confirms that you share one understanding of it.']
  ];
  for (let i = 0; i < anchors.length; i++) {
    const line = skillLines[anchors[i][0]];
    need(
      line === anchors[i][1],
      'line ' + (anchors[i][0] + 1) + ' must be ' + JSON.stringify(anchors[i][1]) + ', it is ' + JSON.stringify(line)
    );
  }
  need(skillLines.length === 57, 'the file must hold 57 lines, it holds ' + skillLines.length);
});

test('new', 'file-text-is-exactly-as-specified', function () {
  const expected = [
    '---',
    'name: interview',
    'description: Question the person who asked about a plan, a decision or an idea until both of you understand it the same way, settling each decision only after the decisions it depends on. Use when they want their thinking stress-tested, or before building something whose shape is still open.',
    'license: MIT',
    'metadata:',
    '  role: aide',
    '  source_repo: mattpocock/skills',
    '  source_commit: b0618bc436ad893b3c5e84e55fba86586d34a404',
    '  source_paths: skills/productivity/grilling skills/productivity/grill-me',
    '  adapted: the Rounds section asks one question of the frontier at a time',
    '---',
    '',
    '# Interview',
    '',
    'Keep asking until you and the person who asked understand the plan the same',
    'way. Do not stop at the first answer that sounds complete.',
    '',
    '## The design tree',
    '',
    'Treat the plan as a tree of decisions: each decision opens the decisions that',
    'depend on it. Your job is to visit every part of the tree.',
    '',
    'The **frontier** is every open decision whose prerequisites are already',
    'settled: the questions you can ask now without guessing at an answer you have',
    'not heard yet. A question that depends on another question still open belongs',
    'to a later round, not this one.',
    '',
    '## Rounds',
    '',
    'Ask one question of the frontier at a time: the one the next step waits on,',
    'then wait for the answer before asking another.',
    '',
    '- Give the question a short title.',
    '- Give the answer you recommend, and word the question so that "yes" accepts',
    '  your recommendation.',
    '- Where there are several options, lay them out as a list, one to a line, the',
    '  recommended one first and marked "(recommended)".',
    '',
    'Each answer reshapes the tree. Settled decisions open the questions that waited',
    'on them: work out the new frontier and ask its next question.',
    '',
    '## Facts are yours to find; decisions are theirs',
    '',
    'Never ask the person who asked for a fact you could find yourself. When a',
    'question on the frontier needs a fact about the situation, go and find it.',
    'While you look, only the questions that depend on that fact wait; ask the',
    'rest of the frontier now.',
    '',
    'The decisions belong to the person who asked. Put each one to them, with',
    'your recommendation, and wait for their answer. Never settle a decision by',
    'assuming it.',
    '',
    '## Done',
    '',
    'The interview is done when the frontier is empty: every part of the tree',
    'visited, nothing left silently assumed. Do not act on the plan until the',
    'person who asked confirms that you share one understanding of it.'
  ].join('\n') + '\n';
  if (skillText !== expected) {
    const a = splitLines(skillText);
    const b = splitLines(expected);
    let d = -1;
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i] !== b[i]) { d = i; break; }
    }
    throw new Error(
      'the file text must be exactly the specified text; first difference at line ' + (d + 1) +
      ': file has ' + JSON.stringify(a[d]) + ', expected ' + JSON.stringify(b[d])
    );
  }
});

// ---- the note of what changed ----

test('note', 'adapted-note-in-metadata', function () {
  need(frontmatter !== null, 'the Skill must open with YAML frontmatter');
  const metaIndex = fmLines.findIndex(function (l) { return /^metadata:[ \t]*$/.test(l); });
  need(metaIndex >= 0, 'the frontmatter must hold a metadata: block');
  const adapted = [];
  fmLines.forEach(function (l, i) { if (/^[ \t]+adapted[ \t]*:/.test(l)) { adapted.push(i); } });
  need(adapted.length === 1, 'the frontmatter must hold exactly one adapted line, it holds ' + adapted.length);
  need(adapted[0] > metaIndex, 'the adapted line must sit inside the metadata: block');
  const want = '  adapted: the Rounds section asks one question of the frontier at a time';
  need(
    fmLines[adapted[0]] === want,
    'the adapted note must read ' + JSON.stringify(want) + ', it reads ' + JSON.stringify(fmLines[adapted[0]])
  );
});

// ---- what must not change ----

test('kept', 'frontmatter-keeps-name-licence-and-source', function () {
  need(frontmatter !== null, 'the Skill must open with YAML frontmatter');
  const wanted = [
    'name: interview',
    'license: MIT',
    'metadata:',
    '  role: aide',
    '  source_repo: mattpocock/skills',
    '  source_commit: b0618bc436ad893b3c5e84e55fba86586d34a404',
    '  source_paths: skills/productivity/grilling skills/productivity/grill-me'
  ];
  wanted.forEach(function (line) {
    need(fmLines.indexOf(line) >= 0, 'the frontmatter must still hold ' + JSON.stringify(line));
  });
  need(
    fmLines.some(function (l) { return l.indexOf('description: Question the person who asked about a plan, a decision or an idea') === 0; }),
    'the frontmatter must still hold the description line'
  );
});

test('kept', 'introduction-unchanged', function () {
  needContains(
    skillFlat,
    'Keep asking until you and the person who asked understand the plan the same way. Do not stop at the first answer that sounds complete.',
    'the introduction'
  );
});

test('kept', 'design-tree-and-frontier-unchanged', function () {
  needContains(
    skillFlat,
    'Treat the plan as a tree of decisions: each decision opens the decisions that depend on it. Your job is to visit every part of the tree.',
    'the design tree'
  );
  needContains(
    skillFlat,
    'The **frontier** is every open decision whose prerequisites are already settled: the questions you can ask now without guessing at an answer you have not heard yet. A question that depends on another question still open belongs to a later round, not this one.',
    'the frontier'
  );
});

test('kept', 'facts-and-decisions-section-unchanged', function () {
  needContains(skillFlat, '## Facts are yours to find; decisions are theirs', 'the facts heading');
  needContains(
    skillFlat,
    'Never ask the person who asked for a fact you could find yourself. When a question on the frontier needs a fact about the situation, go and find it. While you look, only the questions that depend on that fact wait; ask the rest of the frontier now.',
    'the facts paragraph'
  );
  needContains(
    skillFlat,
    'The decisions belong to the person who asked. Put each one to them, with your recommendation, and wait for their answer. Never settle a decision by assuming it.',
    'the decisions paragraph'
  );
});

test('kept', 'done-section-unchanged', function () {
  needContains(skillFlat, '## Done', 'the Done heading');
  needContains(
    skillFlat,
    'The interview is done when the frontier is empty: every part of the tree visited, nothing left silently assumed. Do not act on the plan until the person who asked confirms that you share one understanding of it.',
    'the Done paragraph'
  );
});

test('kept', 'sections-keep-their-order', function () {
  const rounds = skillFlat.indexOf('## Rounds');
  const facts = skillFlat.indexOf('## Facts are yours to find; decisions are theirs');
  const done = skillFlat.indexOf('## Done');
  need(rounds >= 0 && facts > rounds && done > facts, 'the Rounds, facts and Done sections must keep their order');
});

test('kept', 'commons-gains-no-test-or-checker-file', function () {
  const commons = path.join(ROOT, 'skills');
  // A Skill folder may legitimately be called "spec" (skills/aide/spec), so only
  // the test-shaped names are banned here.
  const banned = { test: true, tests: true, '__tests__': true };
  const walk = function (dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        need(!banned[entry.name], 'the commons must not gain a ' + entry.name + '/ folder: ' + p);
        walk(p);
      } else if (entry.name.includes('.test.') || entry.name.includes('.spec.')) {
        throw new Error('the commons must not gain a test file: ' + p);
      }
    });
  };
  need(fs.existsSync(commons), 'the commons folder skills/ must exist');
  walk(commons);
});

// ---- the entry point the repo is started with ----

test('start', 'start-command-unchanged', function () {
  const checker = path.join(ROOT, 'recipes', 'check');
  need(fs.existsSync(checker), 'recipes/check, the repo entry point, must still exist');
  const stat = fs.statSync(checker);
  need(stat.isFile(), 'recipes/check must still be a file');
  need(stat.size > 0, 'recipes/check must not be empty');
});

// ---- runner ----

const mode = process.argv[2] || 'all';
const selected = TESTS.filter(function (t) {
  if (mode === 'all') { return true; }
  if (mode === 'new' || mode === 'kept') { return t.group === mode; }
  return t.name.indexOf(mode) >= 0;
});

if (selected.length === 0) {
  console.error('no check matches ' + JSON.stringify(mode));
  process.exit(2);
}

let failed = 0;
selected.forEach(function (t) {
  try {
    t.fn();
    console.log('ok   ' + t.group + '/' + t.name);
  } catch (err) {
    failed += 1;
    console.error('FAIL ' + t.group + '/' + t.name + ': ' + err.message);
  }
});
console.log(selected.length + ' check(s) run, ' + failed + ' failed');
process.exit(failed === 0 ? 0 : 1);
