const grade = { Math: 90, English: 85, Science: 88 };

for (const content in grade) {
  console.log(`${content}: ${grade[content]}`);
}
