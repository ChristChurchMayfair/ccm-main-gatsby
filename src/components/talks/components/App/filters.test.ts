//@flow
import type { Sermon, Series } from "../../types";

import { filterSeries } from "./index";

const sermon: Sermon = {
    name: "Sermon name",
    event: { id: "id", name: "Event" },
    id: "id",
    duration: 90,
    passage: "Galatians 3:1-3",
    url: "a url",
    preachedAt: "2018-08-12T10:15:58.000Z",
    speakers: [{ id: "id1", name: "Firstname Surname" }],
};

const series: Series = {
    name: "Series name",
    subtitle: "subtitle",
    id: "asdf",
    image3x2Url: "notreallyaurl",
    sermons: [sermon],
};

test("Filter Series By Name", () => {
    expect(filterSeries(series, "Series name")).toBe(true);
});

test("Filter Series By Name Case-Insensitive", () => {
    expect(filterSeries(series, "series name")).toBe(true);
});

test("Filter Series by subtitle", () => {
    expect(filterSeries(series, "subtitle")).toBe(true);
});

test("Filter series with no subtitle", () => {
    const seriesNoSubtitle = { ...series, subtitle: null };
    expect(filterSeries(seriesNoSubtitle, "subtitle")).toBe(false);
});

test("Filter series with partial name", () => {
    expect(filterSeries(series, "ser")).toBe(true);
});

test("Filter series with partial subtitle", () => {
    expect(filterSeries(series, "subt")).toBe(true);
});

test("Filter series with sermon name", () => {
    expect(filterSeries(series, "Sermon name")).toBe(true);
});

test("Filter series with junky sermon name", () => {
    expect(filterSeries(series, "pq3984kjsdfgkjfg")).toBe(false);
});

test("Filter sermons by service event", () => {
    expect(filterSeries(series, "Event")).toBe(true);
});

test("Filter sermons by partial service event", () => {
    expect(filterSeries(series, "vent")).toBe(true);
});

test("Filter sermons with missing service event", () => {
    const sermonNoEvent = { ...sermon, event: null };
    const seriesWithSermonWithNoEvent = { ...series, sermons: [sermonNoEvent] };
    expect(filterSeries(seriesWithSermonWithNoEvent, "vent")).toBe(false);
});

test("Filter sermons by year", () => {
    expect(filterSeries(series, "2018")).toBe(true);
});

test("Filter sermons by year doesnt match partial", () => {
    expect(filterSeries(series, "201")).toBe(false);
});

test("Filter sermons by month", () => {
    expect(filterSeries(series, "aug")).toBe(true);
});

test("Filter sermons by full month", () => {
    expect(filterSeries(series, "august")).toBe(true);
});

test("Filter sermons by month and year", () => {
    expect(filterSeries(series, "2018 aug")).toBe(true);
});

test("Filter series with speaker name", () => {
    expect(filterSeries(series, "surname")).toBe(true);
});

test("Filter series with speaker name with trailing space", () => {
    expect(filterSeries(series, "surname ")).toBe(true);
});

test("Filter series with passage", () => {
    expect(filterSeries(series, "Galatians")).toBe(true);
});

test("Filter series with subset of words", () => {
    expect(filterSeries(series, "Name series")).toBe(true);
});

test("Disregards multiple spaces", () => {
    expect(filterSeries(series, "afsgasgas    dsgasgasg")).toBe(false);
});

test("Empty string should match everything", () => {
    expect(filterSeries(series, "")).toBe(true);
});

test("Every word must match", () => {
    expect(filterSeries(series, "Sermon thisdoesntexistanywhere")).toBe(false);
});

test("Filter series with multiple words across multiple fields", () => {
    expect(filterSeries(series, "Series subtitle")).toBe(true);
    expect(filterSeries(series, "Series Sermon")).toBe(true);
    expect(filterSeries(series, "Series Surname")).toBe(true);
    expect(filterSeries(series, "Series Galatians")).toBe(true);
});
