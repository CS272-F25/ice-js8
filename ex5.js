function powerRecursive(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * powerRecursive(base, exp - 1);
  }
}

function power(base, exp) {
  let accumulator = 1;
  for (let i = 0; i < exp; i++) {
    accumulator *= base;
  }
  return accumulator;
}

function test(base, exp) {
  console.log(`Testing ${base} to the power ${exp}`);
  console.log(`Recursive: ${powerRecursive(base, exp)}`);
  console.log(`Loop:      ${power(base, exp)}`);
  console.log(`Operator:  ${base ** exp}`);
  console.log();
}

test(100, 0);
test(3, 4);
test(2, 16);
