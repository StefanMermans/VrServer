class Player {
    constructor(id, position, rotation) {
        this.id = id;
        this.position = position;
        this.rotation = rotation;
    }
}

class GameObject {
    constructor(id, rot, pos) {
        this.id = id;
        this.rot = rot;
        this.pos = pos;
    }
}

module.exports = class ServerUpdate {
    constructor() {
        this.count = 0;
        this.playerCount = 0;
        this.objects = [];
        this.players = [];
        this.players = [];
        this.previous = [];
    }

    addObject(obj) {
        this.objects.push(obj);
        this.count = this.objects.length;
    }

    addPlayer(id, position, rotation) {
        this.players.push(new Player(id.toString(), position, rotation));
        this.playerCount = this.players.length;
    }

    addPrevious(obj) {
        this.previous.push(obj);
    }

    toJson() {
        let obj = {
            count: this.count,
            playerCount: this.playerCount,
            players: [],
            objects: [],
            previous: this.previous
        };

        this.players.forEach((player) => {
            obj.players.push(new GameObject(player.id, player.rotation, player.position));
        });
        this.objects.forEach((object) => {
            obj.objects.push(new GameObject(object.id, object.rotation, object.position));
        });
        
        return obj;
    }
};
