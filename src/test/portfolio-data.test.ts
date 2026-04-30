import { describe, expect, it } from "vitest";
import {
  profile,
  publications,
  events,
  experience,
  education,
  researchInterests,
} from "@/data/portfolio";

const isValidUrl = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

describe("portfolio data", () => {
  it("has essential profile information", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.title).toBeTruthy();
    expect(profile.email).toMatch(/@/);

    expect(profile.links).toBeDefined();
    expect(isValidUrl(profile.links.linkedin)).toBe(true);
    expect(isValidUrl(profile.links.scholar)).toBe(true);
    expect(isValidUrl(profile.links.github)).toBe(true);
    expect(isValidUrl(profile.links.orcid)).toBe(true);
  });

  it("has publications with title, venue, year, language and valid links when available", () => {
    expect(publications.length).toBeGreaterThan(0);

    for (const publication of publications) {
      expect(publication.title).toBeTruthy();
      expect(publication.authors).toBeTruthy();
      expect(publication.venue).toBeTruthy();
      expect(publication.year).toMatch(/^\d{4}$/);
      expect(publication.language).toMatch(/English|Portuguese/);

      if (publication.link && publication.link !== "#") {
        expect(isValidUrl(publication.link)).toBe(true);
      }
    }
  });

  it("has events with name, role, date, language and valid links when available", () => {
    expect(events.length).toBeGreaterThan(0);

    for (const event of events) {
      expect(event.name).toBeTruthy();
      expect(event.role).toBeTruthy();
      expect(event.date).toBeTruthy();
      expect(event.language).toMatch(/English|Portuguese/);

      if (event.link && event.link !== "#") {
        expect(isValidUrl(event.link)).toBe(true);
      }
    }
  });

  it("has professional experiences with required information", () => {
    expect(experience.length).toBeGreaterThan(0);

    for (const item of experience) {
      expect(item.role).toBeTruthy();
      expect(item.company).toBeTruthy();
      expect(item.period).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.tags.length).toBeGreaterThan(0);
    }
  });

  it("has education populated", () => {
    expect(education.length).toBeGreaterThan(0);

    for (const item of education) {
      expect(item.degree).toBeTruthy();
      expect(item.institution).toBeTruthy();
      expect(item.period).toBeTruthy();
    }
  });

  it("has research interests populated", () => {
    expect(researchInterests.length).toBeGreaterThan(0);

    for (const interest of researchInterests) {
      expect(interest.title).toBeTruthy();
      expect(interest.description).toBeTruthy();
    }
  });
});