import {
  getDomianName
} from './regex.js';

it("pulls out a domain name from a simple url format", () => {
  const url = "google.com";
  expect(getDomianName(url)).toBe("google");
})

it("pulls out a domain name from a www url format", () => {
  const url = "www.ait.com";
  expect(getDomianName(url)).toBe("ait");
})

it("pulls out a domain name from a full url format", () => {
  const url = "https://www.mysite.com";
  expect(getDomianName(url)).toBe("mysite");
});

it("pulls out a domain name from a url with au domain", () => {
  const url = "www.website.au";
  expect(getDomianName(url)).toBe("website");
})

it("pulls out a domain name from url that starts with http", () => {
  const url = "http://www.dog.com";
  expect(getDomianName(url)).toBe("dog");
})

it("throws an error if string is empty or format is incorrect", () => {
  const wrong = "wrong format url";
  expect(() => getDomianName(wrong)).toThrow();
})