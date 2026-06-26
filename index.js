/* ============================================================
   LESSON 8 — OBJECTS: EXERCISES + TEST CASES  (EASY EDITION)
   ------------------------------------------------------------
   You know variables, operators, if, loops, strings, and
   functions. Now you bundle related data under ONE name with
   labels: an object. A string is letters in a row; an object is
   VALUES behind KEYS you choose.

       const user = { name: "Sam", age: 20 };
       user.name        // "Sam"   (dot access — key you know)
       user["age"]      // 20      (bracket — key in a variable)

   This file is the objects twin of lesson-7-functions-tests-easy.js.

   How to use:
   - Read the exercise, write your function where you see
     // your code here. The test call sits right below, COMMENTED:
         // console.log(makeUser());
     Delete the leading "// " to switch it on, run the file, compare.
   - Blank exercises never crash the file — only switched-on lines
     run. Do the exercises in ANY order, one at a time.
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value back.
     Run: node lesson-8-objects-tests-easy.js
   - All 3 match = exercise correct.

   COMPARING OBJECTS: two different objects are NEVER === even with
   the same contents. To check an object answer by eye, the test
   shows the expected SHAPE. To check in code, compare
   JSON.stringify(yours) to JSON.stringify(expected).

   Tools you MAY use (new this lesson):
     obj.key / obj["key"]      read & write a property
     key in obj                true if that key exists
     delete obj.key            remove a property
     for (const k in obj) {}   visit every key
     Object.keys(obj)          the keys, e.g. ["name","age"]
     Object.values(obj)        the values
     .split(" ")               cut a sentence into words
   Plus everything from before: loops, if, %, String()/Number(),
   Math.floor, function, return.

   THE OBJECT RULE: a key is a LABEL, a value is what sits behind it.
   Reading a missing key gives `undefined` (not an error) — check
   with `in` before you trust a value.

   NOTE: every exercise uses a DIFFERENT function name, so all your
   answers live in this one file with no clashes.
   ============================================================ */

/* ============================================================
   PART A — MAKE & READ
   ============================================================ */

// ----- 1. Build an object -----
// Write `makeUser()` that takes NO input and RETURNS the object { name: "Sam", age: 20 }.
// your code here

function makeUser() {
  return {
    name: "Sam",
    age: 20,
  };
}

console.log(makeUser().name);
console.log(makeUser().age);
console.log(typeof makeUser());
// console.log(makeUser());
// TEST 1:  makeUser().name      ->  "Sam"
// TEST 2:  makeUser().age       ->  20
// TEST 3:  typeof makeUser()    ->  "object"

// ----- 2. Read with a dot -----
// Write `getName(user)` that RETURNS the `name` property of the object passed in.
// your code here
function getName(user) {
  return user.name;
}
console.log(getName({ name: "Ada", age: 30 }));
console.log(getName({ name: "Bo" }));
console.log(getName({ name: "" }));
// console.log(getName({ name: "Ada", age: 30 }));
// TEST 1:  getName({ name: "Ada", age: 30 })  ->  "Ada"
// TEST 2:  getName({ name: "Bo" })            ->  "Bo"
// TEST 3:  getName({ name: "" })              ->  ""

// ----- 3. Read with a variable key (bracket) -----
// Write `getValue(obj, key)` that RETURNS the value behind `key`. The key is in a
// variable, so you MUST use bracket access obj[key] (dot would look for "key" literally).
// your code here
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue({ a: 1, b: 2 }, "b"));
console.log(getValue({ color: "red" }, "color"));
console.log(getValue({ a: 1 }, "missing"));
// console.log(getValue({ a: 1, b: 2 }, "b"));
// TEST 1:  getValue({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  getValue({ color: "red" }, "color")  ->  "red"
// TEST 3:  getValue({ a: 1 }, "missing")        ->  undefined

/* ============================================================
   PART B — CHANGE PROPERTIES (add / update / remove / check)
   ============================================================ */

// ----- 4. Update a property -----
// Write `setAge(user, newAge)` that sets user.age to newAge and RETURNS the same user.
// your code here

function setAge(user, newAge) {
  user.age = newAge;
  return user;
}
console.log(setAge({ name: "Sam", age: 20 }, 21).age);
console.log(setAge({ name: "Sam", age: 20 }, 21).name);
console.log(setAge({ age: 5 }, 0).age);
// console.log(setAge({ name: "Sam", age: 20 }, 21));
// TEST 1:  setAge({ name: "Sam", age: 20 }, 21).age  ->  21
// TEST 2:  setAge({ name: "Sam", age: 20 }, 21).name ->  "Sam"   (other keys untouched)
// TEST 3:  setAge({ age: 5 }, 0).age                 ->  0

// ----- 5. Add a property with a variable key -----
// Write `addField(obj, key, value)` that adds key = value to obj and RETURNS obj.
// Use bracket set: obj[key] = value.
// your code here
function addField(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addField({ name: "Sam" }, "age", 20).age);
console.log(addField({}, "x", 5).x);
console.log(addField({ a: 1 }, "a", 9).a);

// console.log(addField({ name: "Sam" }, "age", 20));
// TEST 1:  addField({ name: "Sam" }, "age", 20).age   ->  20
// TEST 2:  addField({}, "x", 5).x                      ->  5
// TEST 3:  addField({ a: 1 }, "a", 9).a                ->  9     (existing key gets overwritten)

// ----- 6. Remove a property -----
// Write `removeField(obj, key)` that deletes that key from obj and RETURNS obj.
// Hint: delete obj[key].
// your code here
function removeField(obj, key) {
  delete obj[key];
  return obj;
}
console.log("a" in removeField({ a: 1, b: 2 }, "a"));
console.log("b" in removeField({ a: 1, b: 2 }, "a"));
console.log(removeField({ a: 1, b: 2 }, "a").b);

// console.log(removeField({ a: 1, b: 2 }, "a"));
// TEST 1:  "a" in removeField({ a: 1, b: 2 }, "a")     ->  false
// TEST 2:  "b" in removeField({ a: 1, b: 2 }, "a")     ->  true
// TEST 3:  removeField({ a: 1, b: 2 }, "a").b          ->  2

// ----- 7. Does the key exist? -----
// Write `hasField(obj, key)` that RETURNS true if the key exists, false otherwise.
// Hint: key in obj.  (Note: a key holding undefined still counts as existing — use `in`.)
// your code here
function hasField(obj, key) {
  return key in obj;
}
console.log(hasField({ a: 1 }, "a"));
console.log(hasField({ a: 1 }, "b"));
console.log(hasField({ a: undefined }, "a"));

// console.log(hasField({ a: 1 }, "a"));
// TEST 1:  hasField({ a: 1 }, "a")        ->  true
// TEST 2:  hasField({ a: 1 }, "b")        ->  false
// TEST 3:  hasField({ a: undefined }, "a") ->  true

/* ============================================================
   PART C — NESTED, DEFAULTS, METHODS (`this`)
   ============================================================ */

// ----- 8. Reach into a nested object -----
// Write `getCity(user)` that RETURNS user.address.city (an object inside an object).
// your code here
function getCity(user) {
  return user.address.city;
}
console.log(
  getCity({ name: "Sam", address: { city: "Lagos", zip: "100001" } }),
);
console.log(getCity({ name: "Sam", address: { city: "Paris" } }));
console.log(getCity({ address: { city: " ", zip: "0" } }));
// console.log(getCity({ name: "Sam", address: { city: "Lagos", zip: "100001" } }));
// TEST 1:  getCity({ name: "Sam", address: { city: "Lagos" } })  ->  "Lagos"
// TEST 2:  getCity({ address: { city: "Paris" } })               ->  "Paris"
// TEST 3:  getCity({ address: { city: "", zip: "0" } })          ->  ""

// ----- 9. Value or fallback -----
// Write `valueOr(obj, key, fallback)` that RETURNS obj[key] if the key EXISTS, else fallback.
// Hint: if (key in obj) return obj[key]; else return fallback.
// your code here
function valueOr(obj, key, fallback) {
  if (key in obj) {
    return obj[key];
  } else {
    return fallback;
  }
}
console.log(valueOr({ a: 1 }, "a", 0));
console.log(valueOr({ a: 1 }, "b", 0));
console.log(valueOr({ a: 0 }, "a", 99));

// console.log(valueOr({ a: 1 }, "a", 0));
// TEST 1:  valueOr({ a: 1 }, "a", 0)          ->  1
// TEST 2:  valueOr({ a: 1 }, "b", 0)          ->  0
// TEST 3:  valueOr({ a: 0 }, "a", 99)         ->  0     (key exists, so 0 wins over the fallback)

// ----- 10. A counter object with a method (`this`) -----
// Write `makeCounter()` that RETURNS an object with count: 0 and a method inc()
// that adds 1 to its OWN count and RETURNS the new count.
// Hint: { count: 0, inc() { this.count++; return this.count; } }  — `this` is the object.
// your code here
function makeCounter() {
  return {
    count: 0,
    inc() {
      this.count++;
      return this.count;
    },
  };
}
const c = makeCounter();
console.log(c.inc());
console.log(makeCounter().count);
const a = makeCounter();
a.inc();
a.inc();
console.log(a.count);
const b = makeCounter();
console.log(b.inc());

// const c = makeCounter(); console.log(c.inc());
// TEST 1:  makeCounter().count        ->  0
// TEST 2:  const a = makeCounter(); a.inc(); a.inc();  a.count   ->  2
// TEST 3:  const b = makeCounter(); b.inc()                       ->  1

// ----- 11. A rectangle that knows its own area -----
// Write `makeRect(w, h)` that RETURNS { w, h, area() } where area() RETURNS w * h
// using `this`. (Shorthand: { w, h } is the same as { w: w, h: h }.)
// your code here
function makeRect(w, h) {
  return {
    w,
    h,
    area() {
      return w * h;
    },
  };
}
console.log(makeRect(3, 4).area());
console.log(makeRect(5, 1).w);
console.log(makeRect(0, 9).area());
// console.log(makeRect(3, 4).area());
// TEST 1:  makeRect(3, 4).area()   ->  12
// TEST 2:  makeRect(5, 1).w        ->  5
// TEST 3:  makeRect(0, 9).area()   ->  0

/* ============================================================
   PART D — LOOP OVER AN OBJECT (for...in / Object.keys / values)
   ============================================================ */

// ----- 12. Count the keys -----
// Write `countKeys(obj)` that RETURNS how many keys the object has.
// Hint: loop `for (const k in obj) count++`  OR  Object.keys(obj).length.
// your code here
function countKeys(obj) {
  count = 0;
  for (const k in obj) {
    count++;
  }
  return count;
}
console.log(countKeys({ a: 1, b: 2, c: 3 }));
console.log(countKeys({}));
console.log(countKeys({ x: 5 }));

// console.log(countKeys({ a: 1, b: 2, c: 3 }));
// TEST 1:  countKeys({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  countKeys({})                    ->  0
// TEST 3:  countKeys({ x: 5 })              ->  1

// ----- 13. Sum the values -----
// Write `sumValues(obj)` that RETURNS the sum of all (numeric) values.
// Hint: total = 0; for (const k in obj) total += obj[k].
// your code here
function sumValues(obj) {
  total = 0;
  for (const k in obj) {
    total += obj[k];
  }
  return total;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ x: 10 }));
console.log(sumValues({}));

// console.log(sumValues({ a: 1, b: 2, c: 3 }));
// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10 })             ->  10
// TEST 3:  sumValues({})                    ->  0

// ----- 14. Join the keys -----
// Write `joinKeys(obj)` that RETURNS the keys glued with ", " (comma + space), in order.
// Hint: build a string; add ", " before every key except the first.
// your code here

function joinKeys(obj, separator = ", ") {
  result = "";
  count = 0;
  for (const key in obj) {
    if (count > 0) {
      result += ", ";
    }
    result += key;
    count++;
  }
  return result;
}
console.log(joinKeys({ a: 1, b: 2, c: 3 }));
console.log(joinKeys({ name: 1, age: 1 }));
console.log(joinKeys({ only: 1 }));

// console.log(joinKeys({ a: 1, b: 2, c: 3 }));
// TEST 1:  joinKeys({ a: 1, b: 2, c: 3 })       ->  "a, b, c"
// TEST 2:  joinKeys({ name: 1, age: 1 })        ->  "name, age"
// TEST 3:  joinKeys({ only: 1 })                ->  "only"

// ----- 15. Biggest value -----
// Write `maxValue(obj)` that RETURNS the largest value. Assume at least one key.
// Hint: start `best` from the first value (or -Infinity), then compare each value.
// your code here
function maxValue(obj) {
  best = -Infinity;

  for (key in obj) {
    if (obj[key] > best) {
      best = obj[key];
    }
  }
  return best;
}
console.log(maxValue({ a: 5, b: 9, c: 2 }));
console.log(maxValue({ x: 7 }));
console.log(maxValue({ a: -3, b: -1 }));

// console.log(maxValue({ a: 5, b: 9, c: 2 }));
// TEST 1:  maxValue({ a: 5, b: 9, c: 2 })     ->  9
// TEST 2:  maxValue({ x: 7 })                 ->  7
// TEST 3:  maxValue({ a: -3, b: -1 })         ->  -1

// ----- 16. Key with the biggest value -----
// Write `keyOfMax(obj)` that RETURNS the KEY whose value is largest (first one if tied).
// Hint: track both bestKey and bestVal as you loop.
// your code here

function keyOfMax(obj) {
  bestKey = null;
  bestVal = -Infinity;

  for (currentKey in obj) {
    currentVal = obj[currentKey];
    if (currentVal > bestVal) {
      bestVal = currentVal;
      bestKey = currentKey;
    }
  }
  return bestKey;
}
console.log(keyOfMax({ math: 80, art: 95, gym: 88 }));
console.log(keyOfMax({ a: 5, b: 9, c: 2 }));
console.log(keyOfMax({ only: 1 }));

// console.log(keyOfMax({ math: 80, art: 95, gym: 88 }));
// TEST 1:  keyOfMax({ math: 80, art: 95, gym: 88 })  ->  "art"
// TEST 2:  keyOfMax({ a: 5, b: 9, c: 2 })            ->  "b"
// TEST 3:  keyOfMax({ only: 1 })                     ->  "only"

/* ============================================================
   PART E — OBJECT AS A MAP / COUNTER
   The object stops being a fixed record and becomes a lookup
   table you build as you go — the classic "frequency counter".
   ============================================================ */

// ----- 17. Letter count -----
// Write `letterCount(word)` that RETURNS an object mapping each letter to how many
// times it appears. Hint: counts = {}; for each char, if missing start at 0, then +1.
//   if (counts[ch] === undefined) counts[ch] = 0;  counts[ch]++;
// your code here

function letterCount(word) {
  counts = {};
  for (i = 0; i < word.length; i++) {
    ch = word[i];
    if (counts[ch] === undefined) counts[ch] = 0;
    counts[ch]++;
  }
  return counts;
}
console.log(letterCount("hello"));
console.log(letterCount("aaa"));
console.log(letterCount(""));
// console.log(letterCount("hello"));
// TEST 1:  letterCount("hello")  ->  { h: 1, e: 1, l: 2, o: 1 }
// TEST 2:  letterCount("aaa")    ->  { a: 3 }
// TEST 3:  letterCount("")       ->  {}     (empty word, empty object)

// ----- 18. Length of each word -----
// Write `wordLengths(sentence)` that RETURNS an object mapping each word to its length.
// Hint: sentence.split(" ") gives the words; loop them, set obj[word] = word.length.
// your code here
function wordLengths(sentence) {
  words = sentence.split(" ");
  obj = {};
  for (i = 0; i < words.length; i++) {
    word = words[i];
    if (word === "") continue;
    obj[word] = word.length;
  }
  return obj;
}
console.log(wordLengths("the cat sat"));
console.log(wordLengths("hi there"));
console.log(wordLengths("one"));
// console.log(wordLengths("the cat sat"));
// TEST 1:  wordLengths("the cat sat")  ->  { the: 3, cat: 3, sat: 3 }
// TEST 2:  wordLengths("hi there")     ->  { hi: 2, there: 5 }
// TEST 3:  wordLengths("one")          ->  { one: 3 }

// ----- 19. Merge two count objects (sum shared keys) -----
// Write `mergeSums(a, b)` that RETURNS a NEW object: every key from both, and where a
// key is in BOTH its values are added. Hint: copy a's keys in, then for b's keys
// add onto whatever is already there (start from 0 if absent).
// your code here

function mergeSums(a, b) {
  result = {};
  for (key in a) {
    result[key] = a[key];
  }
  for (key in b) {
    currentCount = result[key] || 0;
    result[key] = currentCount + b[key];
  }
  return result;
}
console.log(mergeSums({ a: 1, b: 2 }, { b: 3, c: 4 }));
console.log(mergeSums({}, { x: 9 }));
console.log(mergeSums({ k: 2 }, {}));

// console.log(mergeSums({ a: 1, b: 2 }, { b: 3, c: 4 }));
// TEST 1:  mergeSums({ a: 1, b: 2 }, { b: 3, c: 4 })  ->  { a: 1, b: 5, c: 4 }
// TEST 2:  mergeSums({}, { x: 9 })                    ->  { x: 9 }
// TEST 3:  mergeSums({ k: 2 }, {})                    ->  { k: 2 }

// ----- 20. Flip keys and values -----
// Write `invert(obj)` that RETURNS a new object where each value becomes a key and
// each key becomes its value. Assume values are unique strings/numbers.
// Hint: out = {}; for (const k in obj) out[obj[k]] = k.
// your code here
function invert(obj) {
  out = {};
  for (k in obj) {
    out[obj[k]] = k;
  }
  return out;
}
console.log(invert({ a: "x", b: "y" }));
console.log(invert({ one: 1 }));
console.log(invert({}));
// console.log(invert({ a: "x", b: "y" }));
// TEST 1:  invert({ a: "x", b: "y" })   ->  { x: "a", y: "b" }
// TEST 2:  invert({ one: 1 })           ->  { "1": "one" }   (number value becomes a key)
// TEST 3:  invert({})                   ->  {}

/* ============================================================
   PART F — COMPOSE: CALL ONE FUNCTION FROM ANOTHER
   ============================================================ */

// ----- 21. Cart total (reuse sumValues) -----
// Write `cartTotal(cart)` where cart maps item -> price. RETURN the total by CALLING
// your sumValues from exercise 13.
// your code here
function cartTotal(cart) {
  return sumValues(cart);
}
console.log(cartTotal({ apple: 3, bread: 2, milk: 4 }));
console.log(cartTotal({ oen: 1 }));
console.log(cartTotal({}));
// console.log(cartTotal({ apple: 3, bread: 2, milk: 4 }));
// TEST 1:  cartTotal({ apple: 3, bread: 2, milk: 4 })  ->  9
// TEST 2:  cartTotal({ pen: 1 })                       ->  1
// TEST 3:  cartTotal({})                               ->  0

// ----- 22. Most expensive item (reuse keyOfMax) -----
// Write `mostExpensive(prices)` that RETURNS the item name with the highest price by
// CALLING your keyOfMax from exercise 16.
// your code here
function mostExpensive(prices) {
  return keyOfMax(prices);
}
console.log(mostExpensive({ apple: 3, bread: 2, milk: 4 }));
console.log(mostExpensive({ a: 5, b: 9 }));
console.log(mostExpensive({ only: 1 }));
// console.log(mostExpensive({ apple: 3, bread: 2, milk: 4 }));
// TEST 1:  mostExpensive({ apple: 3, bread: 2, milk: 4 })  ->  "milk"
// TEST 2:  mostExpensive({ a: 5, b: 9 })                   ->  "b"
// TEST 3:  mostExpensive({ only: 1 })                      ->  "only"

// ----- 23. Rename a key (reuse addField + removeField) -----
// Write `renameField(obj, oldKey, newKey)` that moves the value from oldKey to newKey
// and RETURNS obj. Read the value, addField it under newKey, removeField the oldKey.
// your code here
function renameField(obj, oldKey, newKey) {
  value = obj[oldKey];
  addField(obj, newKey, value);
  removeField(obj, oldKey);
  return obj;
}
console.log(renameField({ name: "Sam", age: 20 }, "name", "fullName").fullName);
console.log(
  renameField({ name: "Sam", age: 20 }, "name", "fullName"),
  "name",
  "fullName",
);
console.log(renameField({ name: "Sam", age: 20 }, "name", "fullName").age);
// console.log(renameField({ name: "Sam", age: 20 }, "name", "fullName"));
// TEST 1:  renameField({ name: "Sam", age: 20 }, "name", "fullName").fullName  ->  "Sam"
// TEST 2:  "name" in renameField({ name: "Sam", age: 20 }, "name", "fullName") ->  false
// TEST 3:  renameField({ name: "Sam", age: 20 }, "name", "fullName").age       ->  20

/* ============================================================
   PART G — LEETCODE-STYLE (EASY)  (the object is your tool)
   Same hash-map trick the real problems lean on: count things in
   an object, then read the counts back. No fancy data structures.
   ============================================================ */

// ----- E1. First Unique Character  (LeetCode 387 lite) -----
// Write `firstUniqueChar(word)` -> the FIRST character that appears exactly once.
// If none, RETURN "". Hint: count every char into an object, then walk the word again
// and return the first char whose count is 1.
// your code here
function firstUniqueChar(word) {
  charCounts = {};
  for (i = 0; i < word.length; i++) {
    char = word[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  for (i = 0; i < word.length; i++) {
    char = word[i];
    if (charCounts[char] === 1) {
      return char;
    }
  }
  return "";
}
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("aabb"));
// console.log(firstUniqueChar("leetcode"));
// EXAMPLE 1:  firstUniqueChar("leetcode")  ->  "l"
// EXAMPLE 2:  firstUniqueChar("swiss")     ->  "w"
// EXAMPLE 3:  firstUniqueChar("aabb")      ->  ""    (every char repeats)

// ----- E2. Valid Anagram  (LeetCode 242) -----
// Write `areAnagrams(a, b)` -> true if b is a rearrangement of a (same letters, same
// counts). Hint: if lengths differ -> false; count a into an object; walk b subtracting;
// any count going negative or a missing key -> false.
// your code here
function areAnagrams(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  counts = {};
  for (i = 0; i < a.length; i++) {
    char = a[i];
    counts[char] = (counts[char] || 0) + 1;
  }
  for (i = 0; i < b.length; i++) {
    char = b[i];
    if (!counts[char]) {
      return false;
    }
    counts[char]--;
  }
  return true;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("a", "aa"));

// console.log(areAnagrams("listen", "silent"));
// EXAMPLE 1:  areAnagrams("listen", "silent")  ->  true
// EXAMPLE 2:  areAnagrams("hello", "world")    ->  false
// EXAMPLE 3:  areAnagrams("a", "aa")           ->  false   (different lengths)

// ----- E3. Most Frequent Character -----
// Write `mostFrequentChar(word)` -> the character with the highest count (if tied, the
// one whose count was reached first). Hint: build counts, then keyOfMax-style scan.
// your code here

// console.log(mostFrequentChar("banana"));
// EXAMPLE 1:  mostFrequentChar("banana")        ->  "a"   (a:3 beats n:2, b:1)
// EXAMPLE 2:  mostFrequentChar("mississippi")   ->  "i"   (i:4, s:4 tie — i seen first)
// EXAMPLE 3:  mostFrequentChar("abc")           ->  "a"   (all tie at 1 — first wins)

// ----- E4. Word Frequency -----
// Write `countWords(sentence)` -> an object mapping each word to how many times it
// appears. Hint: split on " ", then count each word like the letter counter.
// your code here

// console.log(countWords("the cat the dog the"));
// EXAMPLE 1:  countWords("the cat the dog the")  ->  { the: 3, cat: 1, dog: 1 }
// EXAMPLE 2:  countWords("hi hi")                ->  { hi: 2 }
// EXAMPLE 3:  countWords("one")                  ->  { one: 1 }

// ----- E5. Count Distinct Characters -----
// Write `distinctChars(word)` -> how many DIFFERENT characters the word has.
// Hint: count chars into an object, then the answer is Object.keys(counts).length.
// your code here

// console.log(distinctChars("hello"));
// EXAMPLE 1:  distinctChars("hello")  ->  4    (h, e, l, o)
// EXAMPLE 2:  distinctChars("aaa")    ->  1
// EXAMPLE 3:  distinctChars("abc")    ->  3

// ----- E6. Digit Frequency (numbers meet objects) -----
// Write `digitFrequency(n)` -> an object mapping each digit (as a key) to how many times
// it appears in a non-negative integer. Hint: peel digits with % 10 and Math.floor(/10),
// counting each into the object just like letters.
// your code here

// console.log(digitFrequency(1122333));
// EXAMPLE 1:  digitFrequency(1122333)  ->  { "1": 2, "2": 2, "3": 3 }
// EXAMPLE 2:  digitFrequency(112)      ->  { "1": 2, "2": 1 }
// EXAMPLE 3:  digitFrequency(5)        ->  { "5": 1 }

/* ============================================================
   CHALLENGE (optional) — merge by hand
   ============================================================ */

// ----- Deep-ish merge of two records -----
// Write `mergeRecords(a, b)` that RETURNS a new object with all keys of both; when a
// key is in BOTH, b's value WINS (later object overrides). No nested objects to worry
// about. You may use the spread { ...a, ...b } OR build it with two loops.
// your code here

// console.log(mergeRecords({ name: "Sam", age: 20 }, { age: 21, city: "Lagos" }));
// TEST 1:  mergeRecords({ name: "Sam", age: 20 }, { age: 21 }).age   ->  21   (b wins)
// TEST 2:  mergeRecords({ name: "Sam" }, { city: "Lagos" }).name     ->  "Sam"
// TEST 3:  mergeRecords({ a: 1 }, { a: 2, b: 3 }).b                   ->  3

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy object-ing!
   ============================================================ */
