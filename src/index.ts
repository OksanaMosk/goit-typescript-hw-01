import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}
type User = {
  name: string;
  age: number;
};
function great(user: User): void {
  console.log(`Hello ${user.name}`);
}
