const VALID_DAMAGE_TYPES = {
    physical: true,
    poison: true,
    fire: true,
    water: true,
    air: true,
    earth: true
};

const VALID_RESISTANCE_TYPES = VALID_DAMAGE_TYPES;
const ARROW_TYPES = { normal: 'pierce', special: 'critical' };

var id = 1;
function generate() {
    return id++;
}

function isValidDamageType(type) {
    return VALID_DAMAGE_TYPES[type] || false;
}

function isValidResistance(type) {
    return VALID_RESISTANCE_TYPES[type] || false;
}

class Item {
    constructor(name) {
        this.name = name;
    }
    getItemInfo() {
        const len = this.name.length;
        if (len >= 3 && len <= 50) {
            return `item ${generate()} - ${this.name}`;
        }
        return "error";
    }
}

function chance(number) {
    if (number === 1) {
        return Math.floor(Math.random() * 45) + 5; // 5-49
    }
    return Math.floor(Math.random() * 90) + 10; // 10-99
}
class Weapon extends Item {
    constructor(name, attack, damageType, twoHanded) {
        super(name);
        this.attack = (attack >= 1 && attack <= 30000) ? attack : false;
        this.damageType = isValidDamageType(damageType) ? damageType : false;
        this.twoHanded = twoHanded === true;
    }
    getItemInfo() {
        if (this.damageType === false || this.attack === false) {
            return 'error';
        }
        return `${super.getItemInfo()} has ${this.attack} of ${this.damageType} damage`;
    }
}
class Sword extends Weapon {
    constructor(name, attack, damageType, twoHanded) {
        super(name, attack, damageType, twoHanded);
        this.twoHanded = (twoHanded === 'cripple' || twoHanded === 'bleed') ? twoHanded : false;
    }
    getItemInfo() {
        if (this.twoHanded === false) {
            return 'error';
        }
        return `${super.getItemInfo()} and has ${chance(1)}% ${this.twoHanded}`;
    }
}
class Bow extends Weapon {
    constructor(name, arrowType, attack, damageType, twoHanded) {
        super(name, attack, damageType, twoHanded);
        this.arrowType = ARROW_TYPES[arrowType] || false;
    }
    getItemInfo() {
        if (this.arrowType === false || this.twoHanded === false) {
            return 'error';
        }
        return `${super.getItemInfo()} and has ${chance(1)}% to apply ${this.arrowType}`;
    }
}
class Staff extends Weapon {
    constructor(name, attack, damageType, twoHanded) {
        super(name, attack, damageType, twoHanded);
    }
    getItemInfo() {
        const effectMap = {
            poison: 'poison',
            fire: 'burn',
            water: 'cold',
            air: 'electrify',
            earth: 'tremor'
        };
        const effect = effectMap[this.damageType];
        if (this.twoHanded === false || !effect) {
            return 'error';
        }
        return `${super.getItemInfo()} and has ${chance(1)}% to apply ${effect}`;
    }
}
class Armor extends Item {
    constructor(name, defense, resistance) {
        super(name);
        this.defense = (defense >= 1 && defense <= 50000) ? defense : false;
        this.resistance = isValidResistance(resistance) ? resistance : false;
    }
    getItemInfo() {
        if (this.defense === false || this.resistance === false) {
            return 'error';
        }
        return `${super.getItemInfo()} has ${this.defense} defence and ${chance(2)}% ${this.resistance} resistance`;
    }
}
class Helm extends Armor {
    constructor(name, defense, resistance, attractiveness) {
        super(name, defense, resistance);
        this.attractiveness = (attractiveness >= -5 && attractiveness <= 5) ? attractiveness : false;
    }
    getItemInfo() {
        if (this.attractiveness === false) {
            return 'error';
        }
        return `${super.getItemInfo()} and adds ${this.attractiveness} attractiveness`;
    }
}

class Boots extends Armor {
    constructor(name, defense, resistance, speed) {
        super(name, defense, resistance);
        this.speed = (speed >= 1 && speed <= 10) ? speed : false;
    }
    getItemInfo() {
        if (this.speed === false) {
            return 'error';
        }
        return `${super.getItemInfo()} and adds ${this.speed} speed`;
    }
}

class Groves extends Armor {
    constructor(name, defense, resistance, crafting) {
        super(name, defense, resistance);
        this.crafting = (crafting >= 1 && crafting <= 10) ? crafting : false;
    }
    getItemInfo() {
        if (this.crafting === false) {
            return 'error';
        }
        return `${super.getItemInfo()} and adds ${this.crafting} crafting`;
    }
}

class Robe extends Armor {
    constructor(name, defense, resistance, reputation) {
        super(name, defense, resistance);
        this.reputation = (reputation >= 1 && reputation <= 10) ? reputation : false;
    }
    getItemInfo() {
        if (this.reputation === false) {
            return 'error';
        }
        return `${super.getItemInfo()} and adds ${this.reputation} reputation`;
    }
}
class Consumable extends Item {
    constructor(name, heals, type) {
        super(name);
        this.heals = heals === true;
        this.type = (type === 'mirror' || type === 'medium' || type === 'big') ? type : false;
    }
    getItemInfo() {
        const effectRanges = {
            mirror: { min: 1, max: 10 },
            medium: { min: 11, max: 20 },
            big: { min: 21, max: 30 }
        };
        
        if (this.type === false) {
            return 'error';
        }
        
        const range = effectRanges[this.type];
        const effect = Math.floor(Math.random() * (range.max - range.min)) + range.min;
        const action = this.heals ? 'heals' : 'damages';
        return `${super.getItemInfo()}it is ${this.type} potion and ${action} for ${effect}`;
    }
}

function createItems(name, attacka, damage, hands, sword, arrow, defense, resistance, attractiveness, speed, crafting, reputation, heal, effect) {
    return [
        new Item(name),
        new Weapon(name, attacka, damage, hands),
        new Sword(name, attacka, damage, sword),
        new Bow(name, arrow, attacka, damage, hands),
        new Staff(name, attacka, damage, hands),
        new Armor(name, defense, resistance),
        new Helm(name, defense, resistance, attractiveness),
        new Boots(name, defense, resistance, speed),
        new Groves(name, defense, resistance, crafting),
        new Robe(name, defense, resistance, reputation),
        new Consumable(name, heal, effect)
    ];
}

function print(name, attacka, damage, hands, sword, arrow, defense, resistance, attractiveness, speed, crafting, reputation, heal, effect) {
    const items = createItems(name, attacka, damage, hands, sword, arrow, defense, resistance, attractiveness, speed, crafting, reputation, heal, effect);
    items.forEach(item => console.log(item.getItemInfo()));
}

print('n1233', 12536, 'fire', true, 'bleed', 'normal', 500, 'water', 3, 10, 6, 7, true, 'medium'); // example