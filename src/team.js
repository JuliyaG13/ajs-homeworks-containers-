class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Этот персонаж уже существует в команде');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for (const character of characters) {
            this.members.add(character);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}

export default Team;