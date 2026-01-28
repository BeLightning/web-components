function triangleAngle(angle1, angle2) {
  const angle3 = 180 - angle1 - angle2;
  
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return "Invalid triangle";
  }
  
  const maxAngle = Math.max(angle1, angle2, angle3);
  
  if (maxAngle < 90) {
    return "Acute";
  }
  if (maxAngle === 90) {
    return "Right";
  }
  return "Obtuse";
}

console.log(triangleAngle(47, 47));
console.log(triangleAngle(90, 60));
console.log(triangleAngle(145, 20));
console.log(triangleAngle(10, 10));