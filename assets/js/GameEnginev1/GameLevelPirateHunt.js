import GameEnvBackground from './essentials/GameEnvBackground.js';
import Player from './essentials/Player.js';
import Npc from './essentials/Npc.js';

class GameLevelPirateHunt {
    constructor(gameEnv) {

        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;

        const bgData = {
            name: "custom_bg",
            src: "./images/gamebuilder/bg/ship.jpg",
            pixels: { height: 700, width: 1280 }
        };

        const playerData = {
            id: 'lost sailor',
            src: "./images/gamebuilder/sprites/mcarchie.png",
            SCALE_FACTOR: 8,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 30,
            INIT_POSITION: { x: 150, y: 470 },

            pixels: { height: 256, width: 256 },
            orientation: { rows: 4, columns: 4 },

            down: { row: 0, start: 0, columns: 4 },
            downRight: { row: 2, start: 0, columns: 3, rotate: Math.PI / 16 },
            downLeft: { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
            right: { row: 2, start: 0, columns: 4 },
            left: { row: 1, start: 0, columns: 4 },
            up: { row: 3, start: 0, columns: 4 },
            upRight: { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
            upLeft: { row: 1, start: 0, columns: 3, rotate: Math.PI / 16 },

            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        /* ---------------- NPC 1 ---------------- */

        const npcData1 = {
            id: 'Gold bar',
            greeting: 'A gold bar...',
            src: "./images/gamebuilder/sprites/gold.png",

            SCALE_FACTOR: 4,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 900, y: 420 },

            pixels: { height: 200, width: 405 },
            orientation: { rows: 1, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },

            hitbox: { widthPercentage: 0.4, heightPercentage: 0.6 },

            dialogues: [
                "You took the gold bar!",
            ]
        };

        /* ---------------- NPC 2 ---------------- */

        const npcData2 = {
            id: 'Chest',
            greeting: 'A treasure chest...',
            src: "./images/gamebuilder/sprites/chest.png",

            SCALE_FACTOR: 4,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 600, y: 450 },

            pixels: { height: 256, width: 256 },
            orientation: { rows: 1, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },

            hitbox: { widthPercentage: 0.4, heightPercentage: 0.6 },

            dialogues: [
                "You took the treasure chest!",
            ]
        };

        /* ---------------- NPC 3 ---------------- */

        const npcData3 = {
            id: 'Map',
            greeting: 'Lost at sea?',
            src: "./images/gamebuilder/sprites/map.png",

            SCALE_FACTOR: 4,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 350, y: 420 },

            pixels: { height: 256, width: 256 },
            orientation: { rows: 1, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },

            hitbox: { widthPercentage: 0.4, heightPercentage: 0.6 },

            dialogues: [
                "You took the map!",
            ]
        };

        /* ---------------- NPC 4 ---------------- */

        const npcData4 = {
            id: 'ruby',
            greeting: 'A ruby...',
            src: "./images/gamebuilder/sprites/ruby.png",

            SCALE_FACTOR: 4,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 750, y: 500 },

            pixels: { height: 256, width: 256 },
            orientation: { rows: 1, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },

            hitbox: { widthPercentage: 0.4, heightPercentage: 0.6 },

            dialogues: [
                "You took the ruby!",
            ]
        };

        /* -------- LEVEL OBJECTS -------- */

        this.classes = [
            { class: GameEnvBackground, data: bgData },
            { class: Player, data: playerData },

            { class: Npc, data: npcData1 },
            { class: Npc, data: npcData2 },
            { class: Npc, data: npcData3 },
            { class: Npc, data: npcData4 }
        ];
    }
}

export default GameLevelPirateHunt;
