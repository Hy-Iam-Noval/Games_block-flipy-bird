export class AbstractGame {
    constructor(game) {
        this.game = game;
    }
}
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext('2d');
export function range(start, end, skip = 1) {
    const list = [start];
    for (const i of Array(end).keys()) {
        const val = i * skip;
        if (val <= start)
            continue;
        if (val >= end) {
            list.push(end);
            break;
        }
        list.push(val);
    }
    return list;
}
