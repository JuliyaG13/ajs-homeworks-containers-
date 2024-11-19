import Team from './team'; 
import Character from './character'; 

describe('Team', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Warrior');
        character2 = new Character('Mage');
        character3 = new Character('Archer');
    });

    test('добавление персонажа в команду', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('добавление одинакового персонажа вызывает ошибку', () => {
        team.add(character1);
        expect(() => {
            team.add(character1);
        }).toThrow('Этот персонаж уже существует в команде');
    });

    test('добавление нескольких персонажей', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });

    test('добавление нескольких персонажей без дублирования', () => {
        team.addAll(character1, character2);
        team.addAll(character2, character3);
        expect(team.toArray()).toEqual([character1, character2, character3]);
    });

    test('конвертация команды в массив', () => {
        team.addAll(character1, character2);
        const membersArray = team.toArray();
        expect(membersArray).toEqual(expect.arrayContaining([character1, character2]));
        expect(membersArray.length).toBe(2);
    });
});