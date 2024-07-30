import { Result } from "../types/interfaces";

export const applyNumericFilter = (
  items: Result[],
  key: keyof Result,
  filterValue: string,
  ranges: { [key: string]: [number, number] }
): Result[] => {
  const [min, max] = ranges[filterValue];
  return items.filter((item) => {
    const value = item[key];
    // @ts-ignore ts(2365)
    return value >= min && value <= max;
  });
};

export const applyPercentageFilter = (
  items: Result[],
  percentage: number
): Result[] => {
  return items.filter((item) => {
    return item.price >= item.ttmhigh * (1 - percentage / 100);
  });
};

export const applyGreaterThanMAFilter = (
  items: Result[],
  filterValue: string
): Result[] => {
  if (filterValue === "10 day") {
    return items.filter((item) => {
      return item.price > item.ma10;
    });
  } else if (filterValue === "20 day") {
    return items.filter((item) => {
      return item.price > item.ma20;
    });
  } else if (filterValue === "30 day") {
    return items.filter((item) => {
      return item.price > item.ma30;
    });
  } else if (filterValue === "40 day") {
    return items.filter((item) => {
      return item.price > item.ma40;
    });
  } else {
    return items.filter((item) => {
      return item.price > item.ma50;
    });
  }
};

export const applyMACFilter = (
  items: Result[],
  percentage: number
): Result[] => {
  return items.filter((item) => {
    var denom;
    if (item.ma10 >= item.ma20) {
      denom = item.ma10;
    } else {
      denom = item.ma20;
    }
    return Math.abs(item.ma10 - item.ma20) / denom < percentage / 100;
  });
};

export const apply52WeekDiffFilter = (
  items: Result[],
  percentage: number
): Result[] => {
  return items.filter((item) => {
    return item.ttmhigh > item.ttmlow + (percentage / 100) * item.ttmlow;
  });
};

export const applyOverPeriodFilter = (
  items: Result[],
  fundamental: string,
  filterValue: string,
  period: string
): Result[] => {
  return items.filter((item) => {
    var identifier;
    if (period == "yoy") {
      identifier = "previousyear";
    }
    if (period == "qq") {
      identifier = "previousquarter";
    }
    const current = item[fundamental as keyof Result];
    const previous = item[(identifier + fundamental) as keyof Result];
    if (filterValue === "Any") {
      return current > previous;
    } else if (filterValue === "10%") {
      // @ts-ignore
      return ((current - previous) / previous) * 100 >= 10;
    } else if (filterValue === "15%") {
      // @ts-ignore
      return ((current - previous) / previous) * 100 >= 15;
    } else if (filterValue === "20%") {
      // @ts-ignore
      return ((current - previous) / previous) * 100 >= 20;
    } else if (filterValue === "25%") {
      // @ts-ignore
      return ((current - previous) / previous) * 100 >= 25;
    } else {
      // @ts-ignore
      return ((current - previous) / previous) * 100 >= 30;
    }
  });
};
