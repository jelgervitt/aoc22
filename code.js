/**
 *      [V] [G]             [H]
 *  [Z] [H] [Z]         [T] [S]
 *  [P] [D] [F]         [B] [V] [Q]
 *  [B] [M] [V] [N]     [F] [D] [N]
 *  [Q] [Q] [D] [F]     [Z] [Z] [P] [M]
 *  [M] [Z] [R] [D] [Q] [V] [T] [F] [R]
 *  [D] [L] [H] [G] [F] [Q] [M] [G] [W]
 *  [N] [C] [Q] [H] [N] [D] [Q] [M] [B]
 *  1   2   3   4   5   6   7   8   9
 */

const instr = `move 3 from 2 to 5
move 2 from 9 to 6
move 4 from 7 to 1
move 7 from 3 to 4
move 2 from 9 to 8
move 8 from 8 to 6
move 1 from 7 to 4
move 8 from 6 to 4
move 4 from 5 to 7
move 3 from 4 to 9
move 2 from 6 to 3
move 11 from 4 to 1
move 1 from 3 to 4
move 2 from 3 to 1
move 1 from 7 to 6
move 14 from 1 to 6
move 7 from 4 to 3
move 2 from 5 to 9
move 5 from 6 to 4
move 9 from 6 to 1
move 3 from 4 to 8
move 1 from 7 to 6
move 3 from 4 to 1
move 7 from 3 to 8
move 5 from 9 to 5
move 4 from 1 to 4
move 3 from 7 to 2
move 5 from 6 to 2
move 3 from 4 to 1
move 7 from 8 to 5
move 3 from 6 to 8
move 11 from 2 to 1
move 1 from 4 to 3
move 1 from 3 to 9
move 2 from 2 to 9
move 8 from 5 to 4
move 1 from 1 to 7
move 1 from 9 to 5
move 8 from 4 to 1
move 1 from 6 to 8
move 2 from 9 to 1
move 4 from 5 to 3
move 2 from 7 to 3
move 40 from 1 to 2
move 24 from 2 to 9
move 1 from 5 to 6
move 11 from 2 to 3
move 9 from 3 to 5
move 12 from 9 to 4
move 6 from 5 to 7
move 4 from 7 to 4
move 2 from 5 to 1
move 2 from 1 to 9
move 1 from 6 to 8
move 9 from 4 to 8
move 6 from 4 to 9
move 17 from 9 to 6
move 1 from 4 to 6
move 17 from 6 to 5
move 1 from 1 to 4
move 2 from 7 to 9
move 1 from 6 to 7
move 2 from 2 to 9
move 2 from 7 to 2
move 6 from 3 to 8
move 3 from 5 to 9
move 1 from 4 to 9
move 2 from 3 to 7
move 4 from 5 to 6
move 1 from 7 to 4
move 1 from 4 to 2
move 1 from 7 to 5
move 9 from 8 to 1
move 1 from 1 to 2
move 2 from 9 to 3
move 7 from 2 to 7
move 1 from 9 to 5
move 12 from 8 to 7
move 3 from 1 to 9
move 2 from 6 to 4
move 9 from 9 to 3
move 1 from 6 to 7
move 1 from 9 to 5
move 1 from 6 to 1
move 9 from 7 to 1
move 7 from 1 to 8
move 4 from 3 to 9
move 5 from 7 to 1
move 3 from 9 to 1
move 4 from 7 to 2
move 12 from 1 to 5
move 2 from 9 to 4
move 7 from 8 to 2
move 7 from 5 to 7
move 4 from 3 to 4
move 1 from 8 to 1
move 2 from 2 to 1
move 2 from 3 to 1
move 3 from 2 to 7
move 13 from 5 to 4
move 1 from 8 to 3
move 1 from 3 to 8
move 1 from 3 to 5
move 1 from 8 to 7
move 17 from 4 to 8
move 5 from 2 to 6
move 2 from 1 to 6
move 5 from 6 to 3
move 9 from 7 to 1
move 4 from 4 to 3
move 1 from 6 to 2
move 4 from 7 to 4
move 1 from 6 to 5
move 2 from 3 to 2
move 15 from 1 to 4
move 6 from 5 to 4
move 4 from 3 to 5
move 4 from 5 to 2
move 2 from 2 to 4
move 11 from 8 to 1
move 2 from 8 to 3
move 5 from 3 to 7
move 4 from 2 to 8
move 2 from 2 to 9
move 4 from 7 to 8
move 11 from 4 to 6
move 2 from 5 to 4
move 3 from 6 to 9
move 4 from 1 to 4
move 15 from 4 to 9
move 1 from 7 to 3
move 2 from 1 to 2
move 6 from 4 to 5
move 11 from 8 to 2
move 16 from 9 to 4
move 2 from 9 to 1
move 4 from 2 to 3
move 8 from 4 to 9
move 1 from 8 to 7
move 5 from 4 to 7
move 6 from 7 to 3
move 10 from 9 to 5
move 5 from 3 to 1
move 1 from 1 to 4
move 5 from 1 to 9
move 5 from 1 to 7
move 5 from 4 to 1
move 4 from 1 to 6
move 3 from 1 to 9
move 10 from 5 to 9
move 2 from 7 to 1
move 5 from 3 to 6
move 4 from 5 to 7
move 4 from 2 to 6
move 2 from 5 to 6
move 5 from 2 to 7
move 18 from 6 to 1
move 5 from 9 to 2
move 7 from 9 to 6
move 16 from 1 to 7
move 4 from 6 to 1
move 1 from 2 to 6
move 2 from 2 to 6
move 1 from 2 to 4
move 4 from 9 to 3
move 1 from 2 to 8
move 5 from 7 to 5
move 2 from 9 to 3
move 1 from 5 to 9
move 7 from 3 to 4
move 1 from 9 to 7
move 8 from 1 to 9
move 1 from 8 to 9
move 3 from 6 to 9
move 17 from 7 to 5
move 3 from 4 to 8
move 3 from 4 to 2
move 3 from 8 to 3
move 3 from 3 to 7
move 7 from 9 to 3
move 6 from 5 to 9
move 4 from 9 to 3
move 10 from 7 to 2
move 15 from 5 to 2
move 4 from 6 to 3
move 1 from 3 to 2
move 23 from 2 to 5
move 2 from 4 to 6
move 2 from 6 to 7
move 1 from 7 to 2
move 1 from 6 to 9
move 5 from 9 to 8
move 3 from 8 to 7
move 5 from 2 to 6
move 2 from 2 to 3
move 2 from 6 to 3
move 3 from 6 to 2
move 3 from 6 to 8
move 10 from 5 to 9
move 2 from 7 to 5
move 1 from 5 to 8
move 13 from 9 to 5
move 6 from 5 to 6
move 1 from 6 to 1
move 1 from 7 to 3
move 1 from 7 to 3
move 13 from 5 to 6
move 3 from 3 to 5
move 1 from 2 to 1
move 4 from 8 to 9
move 2 from 2 to 6
move 2 from 5 to 3
move 2 from 3 to 6
move 5 from 6 to 4
move 9 from 5 to 9
move 10 from 6 to 9
move 1 from 1 to 7
move 3 from 3 to 9
move 1 from 8 to 1
move 3 from 6 to 3
move 1 from 7 to 6
move 1 from 8 to 7
move 2 from 6 to 1
move 2 from 6 to 4
move 3 from 4 to 6
move 2 from 1 to 4
move 10 from 9 to 6
move 6 from 4 to 9
move 17 from 9 to 1
move 4 from 9 to 5
move 19 from 1 to 7
move 4 from 5 to 6
move 1 from 9 to 3
move 5 from 3 to 4
move 5 from 4 to 8
move 17 from 6 to 9
move 17 from 9 to 2
move 1 from 6 to 1
move 1 from 1 to 2
move 1 from 8 to 3
move 2 from 3 to 2
move 5 from 7 to 1
move 1 from 7 to 3
move 5 from 2 to 9
move 4 from 8 to 2
move 2 from 7 to 8
move 3 from 9 to 3
move 7 from 3 to 9
move 2 from 8 to 7
move 8 from 2 to 9
move 5 from 9 to 6
move 4 from 3 to 9
move 11 from 2 to 3
move 2 from 6 to 5
move 1 from 9 to 4
move 10 from 7 to 3
move 3 from 1 to 8
move 2 from 6 to 7
move 15 from 3 to 8
move 2 from 3 to 2
move 2 from 1 to 3
move 14 from 9 to 6
move 1 from 4 to 9
move 14 from 6 to 3
move 5 from 7 to 2
move 2 from 9 to 2
move 1 from 5 to 3
move 1 from 5 to 8
move 12 from 3 to 7
move 13 from 7 to 8
move 1 from 6 to 7
move 5 from 2 to 6
move 1 from 6 to 2
move 1 from 7 to 6
move 4 from 6 to 8
move 31 from 8 to 7
move 15 from 7 to 8
move 7 from 7 to 5
move 4 from 2 to 3
move 1 from 6 to 2
move 3 from 5 to 8
move 9 from 7 to 4
move 2 from 2 to 9
move 4 from 5 to 6
move 13 from 3 to 9
move 3 from 3 to 5
move 13 from 9 to 1
move 1 from 3 to 2
move 2 from 6 to 5
move 1 from 3 to 4
move 2 from 6 to 5
move 1 from 9 to 1
move 6 from 8 to 9
move 5 from 5 to 2
move 2 from 9 to 8
move 2 from 1 to 6
move 1 from 9 to 4
move 12 from 8 to 4
move 2 from 6 to 9
move 11 from 4 to 3
move 9 from 4 to 2
move 4 from 9 to 7
move 2 from 5 to 6
move 8 from 3 to 4
move 2 from 3 to 9
move 2 from 8 to 9
move 4 from 4 to 9
move 2 from 6 to 7
move 1 from 3 to 7
move 2 from 9 to 1
move 5 from 4 to 2
move 9 from 1 to 8
move 1 from 4 to 9
move 4 from 9 to 3
move 1 from 3 to 6
move 4 from 8 to 7
move 1 from 3 to 6
move 4 from 1 to 7
move 1 from 3 to 8
move 1 from 1 to 8
move 2 from 6 to 7
move 2 from 9 to 1
move 1 from 4 to 5
move 1 from 1 to 5
move 11 from 8 to 4
move 12 from 2 to 8
move 1 from 9 to 8
move 2 from 4 to 5
move 1 from 1 to 8
move 5 from 2 to 1
move 1 from 3 to 2
move 9 from 7 to 3
move 6 from 7 to 5
move 1 from 3 to 4
move 1 from 5 to 1
move 4 from 2 to 5
move 4 from 4 to 1
move 2 from 7 to 3
move 3 from 4 to 1
move 6 from 3 to 7
move 9 from 8 to 7
move 3 from 8 to 7
move 11 from 5 to 9
move 2 from 4 to 8
move 5 from 8 to 7
move 1 from 9 to 8
move 12 from 9 to 5
move 1 from 4 to 5
move 5 from 1 to 8
move 6 from 8 to 3
move 1 from 3 to 8
move 3 from 7 to 9
move 4 from 7 to 6
move 3 from 1 to 3
move 3 from 1 to 6
move 1 from 8 to 1
move 7 from 6 to 2
move 3 from 1 to 8
move 7 from 3 to 4
move 3 from 4 to 1
move 1 from 4 to 2
move 3 from 1 to 2
move 1 from 7 to 6
move 1 from 8 to 5
move 9 from 5 to 3
move 1 from 6 to 9
move 11 from 3 to 6
move 1 from 4 to 1
move 1 from 3 to 4
move 8 from 6 to 9
move 1 from 3 to 1
move 1 from 9 to 1
move 2 from 6 to 2
move 5 from 5 to 7
move 5 from 9 to 3
move 2 from 8 to 5
move 1 from 1 to 2
move 1 from 9 to 1
move 15 from 7 to 4
move 1 from 1 to 6
move 1 from 6 to 9
move 3 from 9 to 3
move 1 from 3 to 5
move 5 from 5 to 3
move 9 from 2 to 9
move 5 from 4 to 1
move 1 from 6 to 7
move 7 from 9 to 3
move 1 from 4 to 7
move 1 from 9 to 6
move 1 from 6 to 5
move 2 from 1 to 4
move 3 from 9 to 3
move 1 from 5 to 6
move 7 from 4 to 3
move 1 from 9 to 3
move 16 from 3 to 1
move 9 from 1 to 3
move 5 from 4 to 2
move 1 from 6 to 9
move 12 from 1 to 9
move 3 from 2 to 9
move 5 from 7 to 3
move 2 from 4 to 8
move 2 from 7 to 2
move 12 from 3 to 5
move 6 from 2 to 9
move 12 from 3 to 1
move 2 from 8 to 6
move 1 from 6 to 1
move 6 from 5 to 8
move 5 from 3 to 2
move 2 from 5 to 8
move 8 from 1 to 8
move 13 from 9 to 7
move 4 from 7 to 5
move 4 from 1 to 4
move 8 from 5 to 6
move 1 from 1 to 6
move 4 from 7 to 3
move 1 from 3 to 1
move 1 from 1 to 9
move 4 from 9 to 5
move 3 from 3 to 7
move 12 from 8 to 7
move 2 from 4 to 3
move 2 from 6 to 9
move 4 from 8 to 2
move 2 from 3 to 9
move 2 from 4 to 7
move 3 from 5 to 7
move 2 from 9 to 7
move 3 from 6 to 1
move 4 from 6 to 7
move 1 from 5 to 4
move 1 from 9 to 3
move 12 from 2 to 5
move 4 from 9 to 7
move 11 from 5 to 1
move 1 from 6 to 5
move 1 from 1 to 4
move 10 from 1 to 2
move 2 from 5 to 1
move 1 from 3 to 5
move 7 from 2 to 5
move 8 from 7 to 8
move 2 from 2 to 8
move 3 from 9 to 4
move 5 from 4 to 3
move 1 from 5 to 7
move 3 from 7 to 1
move 3 from 5 to 8
move 1 from 2 to 5
move 12 from 7 to 6
move 4 from 1 to 3
move 2 from 5 to 6
move 7 from 3 to 7
move 14 from 6 to 4
move 1 from 5 to 6
move 3 from 1 to 3
move 4 from 3 to 2
move 2 from 5 to 8
move 11 from 7 to 4
move 7 from 4 to 5
move 1 from 3 to 4
move 1 from 5 to 6
move 14 from 8 to 7
move 11 from 7 to 3
move 2 from 2 to 6
move 1 from 2 to 3
move 5 from 5 to 4
move 4 from 6 to 4
move 8 from 7 to 8
move 3 from 7 to 3
move 1 from 2 to 1
move 5 from 8 to 2
move 4 from 4 to 3
move 1 from 2 to 9
move 1 from 1 to 9
move 3 from 2 to 1
move 1 from 5 to 4
move 3 from 8 to 1
move 1 from 7 to 4
move 4 from 3 to 9
move 1 from 8 to 7
move 2 from 9 to 1
move 6 from 3 to 4
move 28 from 4 to 7
move 15 from 7 to 8
move 3 from 3 to 8
move 1 from 2 to 9
move 2 from 3 to 2
move 7 from 1 to 4
move 10 from 4 to 5
move 10 from 5 to 6
move 3 from 8 to 2
move 1 from 1 to 7
move 1 from 4 to 7
move 1 from 9 to 6
move 9 from 6 to 7
move 1 from 2 to 4
move 1 from 9 to 5`;

const rawStacks = `    [V] [G]             [H]        
[Z] [H] [Z]         [T] [S]        
[P] [D] [F]         [B] [V] [Q]    
[B] [M] [V] [N]     [F] [D] [N]    
[Q] [Q] [D] [F]     [Z] [Z] [P] [M]
[M] [Z] [R] [D] [Q] [V] [T] [F] [R]
[D] [L] [H] [G] [F] [Q] [M] [G] [W]
[N] [C] [Q] [H] [N] [D] [Q] [M] [B]
 1   2   3   4   5   6   7   8   9`;

const unpInstr = instr.split("\n");

// convert the given stacks to workable data
let arr = [];
rows = rawStacks.split("\n");
let col = 1;
for (i = 0; i < rows.length; i++) {
  arr.push([]);
  for (row of rows) {
    char = row[col];
    if (char === " ") continue;
    arr[i].push(char);
  }
  arr[i].pop(-1);
  col += 4;
}

arr.unshift([" "]);

// create array of instructions
const regexp = /(\d+)/g;
const directions = unpInstr.map(line => [...line.match(regexp)]);

/************************************ Part 1 ********************************************/

// run the movements of boxes

for (dir of directions) {
  const amt = dir[0];
  const from = dir[1];
  const to = dir[2];

  for (let i = 0; i < amt; i++) {
    let box = arr[from].shift();
    arr[to].unshift(box);
  }
}

// show the tops of each stack

res = arr.map(row => row[0]);

console.log(res);

/************************************ Part 2 ********************************************/
