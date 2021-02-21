export function* range(start: number, end: number): Iterable<number> {
    for (let n = start; n < end; n++) {
        yield n;
    }
}
