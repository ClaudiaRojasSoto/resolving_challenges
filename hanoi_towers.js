function move(starting, goal) {
  const remaining = 6 - starting - goal;

  const steps = [];
  steps.push(`${starting}->${remaining}`);
  steps.push(`${starting}->${goal}`);
  steps.push(`${remaining}->${goal}`);

  return steps.join(' ');
}
