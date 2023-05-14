import type { User } from "@/types/user";

export const shuffle_divide = (arr: User[], sections: number) => {
  let length = arr.length;
  arr.sort(() => Math.random() - 0.5);
  let n = Math.ceil(length / sections);

  let groups:User[][] = [];
  for (let i = 0; i < length; i += n) {
    groups.push(arr.slice(i, i + n));
  }
  return groups;
};

export const gradeToStr = (grade: string) => {
  if (grade == "1") return "WIP/新人";
  if (grade == "2") return "TERM";
  if (grade == "3") return "GP";
  if (grade == "4") return "院生以上";
};