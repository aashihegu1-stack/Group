// Adventure Game Custom Level — RPG Market Town
// Exported / authored for GameBuilder engine
// How to use this file:
// 1) Save as assets/js/adventureGame/GameLevelRPGMarket.js in your repo.
// 2) Add the background image at: images/RPG-Styled-Market.png  (or update path below)
// 3) Reference it in your runner or level selector:
//    import GameLevelRPGMarket from '/assets/js/adventureGame/GameLevelRPGMarket.js';
//    export const gameLevelClasses = [...existingLevels, GameLevelRPGMarket];
// 4) Ensure sprites exist at the paths listed in playerData / npcData.

import GameEnvBackground from './essentials/GameEnvBackground.js';
import Player from './essentials/Player.js';
import Npc from './essentials/Npc.js';
import Barrier from './essentials/Barrier.js';

class GameLevelRPGMarket {
    constructor(gameEnv) {
        const path = gameEnv.path;

        // ── Background ────────────────────────────────────────────────────────
        // The RPG Market image is 1400 × 788 px (standard widescreen crop).
        // Update pixels{} if your actual image dimensions differ.
        const bgData = {
            name: "rpg_market_town",
            src: path + "/images/RPG-Styled-Market.png",
            pixels: { height: 788, width: 1400 }
        };

        // ── Player ────────────────────────────────────────────────────────────
        // Reuses McArchie sprite from the existing project.
        // Swap src / pixels / orientation if you have a different hero sheet.
        const playerData = {
            id: 'Hero',
            src: path + "/images/gamebuilder/sprites/mcarchie.png",
            SCALE_FACTOR: 8,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 30,
            // Start the player near the central fountain plaza
            INIT_POSITION: { x: 580, y: 360 },
            pixels: { height: 256, width: 256 },
            orientation: { rows: 4, columns: 4 },
            down:      { row: 0, start: 0, columns: 4 },
            downRight: { row: 2, start: 0, columns: 3, rotate:  Math.PI / 16 },
            downLeft:  { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
            right:     { row: 2, start: 0, columns: 4 },
            left:      { row: 1, start: 0, columns: 4 },
            up:        { row: 3, start: 0, columns: 4 },
            upRight:   { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
            upLeft:    { row: 1, start: 0, columns: 3, rotate:  Math.PI / 16 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }   // W A S D
        };

        // ── NPCs ──────────────────────────────────────────────────────────────

        // Blacksmith at the Blackhammer Forge (upper-right area of map)
        const npcBlacksmith = {
            id: 'Blacksmith Gorrak',
            greeting: 'The forge never sleeps, and neither do I.',
            src: path + "/images/gamebuilder/sprites/Pirate.png",   // swap for a blacksmith sprite when available
            SCALE_FACTOR: 5,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 900, y: 210 },
            pixels: { height: 120, width: 335 },
            orientation: { rows: 1, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.01 },
            dialogues: [
                "Welcome to Blackhammer Forge! Finest weapons this side of the mountain.",
                "A blade is only as sharp as its smith's patience. Come back when you have coin.",
                "That fire burns hotter than dragon breath — don't get too close!"
            ],
            reaction: function () {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function () {
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        // Guild Master at the Adventurer's Guild (upper-left)
        const npcGuildMaster = {
            id: 'Guild Master Elara',
            greeting: 'Glory and gold await those brave enough to seek it.',
            src: path + "/images/gamebuilder/sprites/mcarchie.png",  // swap for guild-master sprite
            SCALE_FACTOR: 6,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 155, y: 270 },
            pixels: { height: 256, width: 256 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 4 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.01 },
            dialogues: [
                "The Adventurer's Guild is always seeking brave souls. Speak to me if you wish to take a contract.",
                "Rumor has it the dungeon entrance to the east holds ancient relics — and ancient dangers.",
                "New quests posted on the board: slay the marsh slimes, recover the stolen crown, escort the merchant convoy."
            ],
            reaction: function () {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function () {
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        // Innkeeper at the Gilded Inn (lower-right)
        const npcInnkeeper = {
            id: 'Innkeeper Marta',
            greeting: 'A warm bed and a hot meal — the Gilded Inn has it all.',
            src: path + "/images/gamebuilder/sprites/Pirate.png",   // swap for innkeeper sprite
            SCALE_FACTOR: 5,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 810, y: 520 },
            pixels: { height: 120, width: 335 },
            orientation: { rows: 1, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.01 },
            dialogues: [
                "Rest your weary bones at the Gilded Inn — only 5 gold a night!",
                "I've heard travelers speak of a strange light coming from the dungeon at midnight.",
                "The market stalls open at dawn. Best get your shopping done early before the crowds arrive."
            ],
            reaction: function () {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function () {
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        // Mysterious figure near the dungeon entrance (far right)
        const npcMystic = {
            id: 'Mysterious Stranger',
            greeting: '...',
            src: path + "/images/gamebuilder/sprites/mcarchie.png",
            SCALE_FACTOR: 7,
            ANIMATION_RATE: 1000000008,
            INIT_POSITION: { x: 1260, y: 300 },
            pixels: { height: 256, width: 256 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 4 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.01 },
            dialogues: [
                "The dungeon beyond these woods holds power beyond imagination — and madness to match.",
                "Turn back, traveler. Those who enter rarely return the same... if at all.",
                "I was once like you, full of hope. The dungeon took everything. Everything."
            ],
            reaction: function () {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function () {
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        // ── Barriers / Hitboxes ───────────────────────────────────────────────
        //
        // Coordinate system: x=left edge, y=top edge, width, height (all in px)
        // referenced against the 1400×788 background image.
        //
        // Hitbox regions derived from visual inspection of RPG-Styled-Market.png:
        //   ┌─────────────────────────────────────────────────────────────────┐
        //   │  Castle / north wall runs ~x290–710, y0–80                      │
        //   │  Adventurer's Guild building  ~x30–280, y30–320                 │
        //   │  Blackhammer Forge            ~x730–1050, y80–290               │
        //   │  Castle gate towers left      ~x285–340, y80–280                │
        //   │  Castle gate towers right     ~x650–720, y80–280                │
        //   │  Central fountain             ~x540–660, y290–410               │
        //   │  Gilded Inn                   ~x690–960, y390–640               │
        //   │  Market stalls (left block)   ~x30–530,  y390–700               │
        //   │  Town wall (left edge)        ~x0–55,    y0–788                 │
        //   │  Town wall (right mid)        ~x960–1020, y0–420                │
        //   │  Forest / right area          ~x1020–1400, y0–788               │
        //   │  Dungeon entrance rock        ~x1250–1400, y100–360             │
        //   │  Bottom town wall             ~x0–1000,  y750–788               │
        //   └─────────────────────────────────────────────────────────────────┘

        // Left world boundary
        const barrier_left_wall = {
            id: 'barrier_left_wall',
            x: 0, y: 0, width: 28, height: 788,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Right world boundary (keeps player from leaving the map)
        const barrier_right_wall = {
            id: 'barrier_right_wall',
            x: 1372, y: 0, width: 28, height: 788,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Top world boundary
        const barrier_top_wall = {
            id: 'barrier_top_wall',
            x: 0, y: 0, width: 1400, height: 20,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Bottom world boundary
        const barrier_bottom_wall = {
            id: 'barrier_bottom_wall',
            x: 0, y: 768, width: 1400, height: 20,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Castle / Northern Architecture ────────────────────────────────────

        // Castle north wall (solid stone ramparts)
        const barrier_castle_north = {
            id: 'barrier_castle_north',
            x: 290, y: 0, width: 420, height: 75,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Castle left tower
        const barrier_castle_tower_left = {
            id: 'barrier_castle_tower_left',
            x: 285, y: 0, width: 70, height: 280,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Castle right tower
        const barrier_castle_tower_right = {
            id: 'barrier_castle_tower_right',
            x: 648, y: 0, width: 75, height: 280,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Castle gate arch (solid arch sides — the walkable gap is between x355–648)
        const barrier_castle_arch_left = {
            id: 'barrier_castle_arch_left',
            x: 285, y: 75, width: 70, height: 205,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const barrier_castle_arch_right = {
            id: 'barrier_castle_arch_right',
            x: 648, y: 75, width: 75, height: 205,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Adventurer's Guild (upper-left large building) ─────────────────────
        const barrier_guild_main = {
            id: 'barrier_guild_main',
            x: 28, y: 28, width: 258, height: 290,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Guild left turret
        const barrier_guild_turret = {
            id: 'barrier_guild_turret',
            x: 28, y: 280, width: 55, height: 120,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Blackhammer Forge (upper-right smithy) ─────────────────────────────
        const barrier_forge = {
            id: 'barrier_forge',
            x: 730, y: 80, width: 310, height: 200,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Forge anvil / outdoor work area (blocks movement into fire pit)
        const barrier_forge_pit = {
            id: 'barrier_forge_pit',
            x: 840, y: 240, width: 110, height: 70,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Central Fountain ───────────────────────────────────────────────────
        // Players can walk around it but not through it
        const barrier_fountain = {
            id: 'barrier_fountain',
            x: 548, y: 300, width: 108, height: 108,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Gilded Inn (lower-right) ───────────────────────────────────────────
        const barrier_inn_main = {
            id: 'barrier_inn_main',
            x: 690, y: 400, width: 275, height: 240,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Inn right turret / tower
        const barrier_inn_turret = {
            id: 'barrier_inn_turret',
            x: 956, y: 380, width: 60, height: 140,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Inn bottom tower (lower-right conical roof)
        const barrier_inn_lower_tower = {
            id: 'barrier_inn_lower_tower',
            x: 690, y: 620, width: 100, height: 100,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Market Stalls (lower-left cluster) ────────────────────────────────
        // Potion stall
        const barrier_stall_potions = {
            id: 'barrier_stall_potions',
            x: 50, y: 420, width: 160, height: 130,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Weapon stall (swords/shields table)
        const barrier_stall_weapons = {
            id: 'barrier_stall_weapons',
            x: 110, y: 530, width: 190, height: 120,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Produce / food stall (center market)
        const barrier_stall_produce = {
            id: 'barrier_stall_produce',
            x: 300, y: 450, width: 180, height: 140,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Lower-left tent stall
        const barrier_stall_tent = {
            id: 'barrier_stall_tent',
            x: 55, y: 640, width: 200, height: 130,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // Fruit / goods stall (mid-lower)
        const barrier_stall_fruit = {
            id: 'barrier_stall_fruit',
            x: 340, y: 560, width: 200, height: 150,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Town Right Wall (separates town from forest) ──────────────────────
        const barrier_town_right_wall = {
            id: 'barrier_town_right_wall',
            x: 960, y: 0, width: 62, height: 420,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Forest Trees (right side — dense, impassable) ─────────────────────
        const barrier_forest_upper = {
            id: 'barrier_forest_upper',
            x: 1022, y: 0, width: 378, height: 200,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const barrier_forest_lower = {
            id: 'barrier_forest_lower',
            x: 1100, y: 480, width: 300, height: 310,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Dungeon Entrance Rock Structure (far upper-right) ─────────────────
        const barrier_dungeon_entrance = {
            id: 'barrier_dungeon_entrance',
            x: 1255, y: 100, width: 145, height: 260,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Decorative Barrels / Crates (scattered obstacles) ─────────────────
        const barrier_barrels_guild = {
            id: 'barrier_barrels_guild',
            x: 250, y: 330, width: 55, height: 60,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const barrier_barrels_forge = {
            id: 'barrier_barrels_forge',
            x: 1020, y: 220, width: 60, height: 55,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const barrier_cart_forge = {
            id: 'barrier_cart_forge',
            x: 1040, y: 270, width: 90, height: 60,
            visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        // ── Assemble Classes ──────────────────────────────────────────────────
        this.classes = [
            // Background must be first
            { class: GameEnvBackground, data: bgData },

            // Player
            { class: Player, data: playerData },

            // NPCs
            { class: Npc, data: npcBlacksmith },
            { class: Npc, data: npcGuildMaster },
            { class: Npc, data: npcInnkeeper },
            { class: Npc, data: npcMystic },

            // ── World Boundary Barriers ──
            { class: Barrier, data: barrier_left_wall },
            { class: Barrier, data: barrier_right_wall },
            { class: Barrier, data: barrier_top_wall },
            { class: Barrier, data: barrier_bottom_wall },

            // ── Castle ──
            { class: Barrier, data: barrier_castle_north },
            { class: Barrier, data: barrier_castle_tower_left },
            { class: Barrier, data: barrier_castle_tower_right },
            { class: Barrier, data: barrier_castle_arch_left },
            { class: Barrier, data: barrier_castle_arch_right },

            // ── Adventurer's Guild ──
            { class: Barrier, data: barrier_guild_main },
            { class: Barrier, data: barrier_guild_turret },

            // ── Blackhammer Forge ──
            { class: Barrier, data: barrier_forge },
            { class: Barrier, data: barrier_forge_pit },

            // ── Fountain ──
            { class: Barrier, data: barrier_fountain },

            // ── Gilded Inn ──
            { class: Barrier, data: barrier_inn_main },
            { class: Barrier, data: barrier_inn_turret },
            { class: Barrier, data: barrier_inn_lower_tower },

            // ── Market Stalls ──
            { class: Barrier, data: barrier_stall_potions },
            { class: Barrier, data: barrier_stall_weapons },
            { class: Barrier, data: barrier_stall_produce },
            { class: Barrier, data: barrier_stall_tent },
            { class: Barrier, data: barrier_stall_fruit },

            // ── Town Walls / Forest ──
            { class: Barrier, data: barrier_town_right_wall },
            { class: Barrier, data: barrier_forest_upper },
            { class: Barrier, data: barrier_forest_lower },

            // ── Dungeon ──
            { class: Barrier, data: barrier_dungeon_entrance },

            // ── Decorative Obstacles ──
            { class: Barrier, data: barrier_barrels_guild },
            { class: Barrier, data: barrier_barrels_forge },
            { class: Barrier, data: barrier_cart_forge },
        ];
    }
}

export default GameLevelRPGMarket;