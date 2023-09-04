// const Discord = require("discord.js")

// const TOKEN = "MTEwMDY2MTA2NTQxNjcyMDM4NA.G4HwVt.aD6m7oi1wRAAzj9_ScS5Y_pQ3tTJG6fJH-kAgE";

// const client = new Discord.Client({
//     intents: ["Guilds", "GuildMessages"]
// });

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// });

// client.on("messageCreate", (message) => {
//     if (message.content == "hi") {
//         message.reply("Hello World")
//     }
// })

// client.login(TOKEN);

// MTEwMDY2MTA2NTQxNjcyMDM4NA.G4HwVt.aD6m7oi1wRAAzj9_ScS5Y_pQ3tTJG6fJH-kAgE

// cIuOgsmFR8rdaIic

// testing

import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import OrderCommand from './commands/order.js';
import rolesCommand from './commands/roles.js'
import { connectToDatabase } from './database.js';



config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.guild_id;


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const rest = new REST({ version: '10' }).setToken(TOKEN)

client.login(TOKEN);
client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}`)
    await connectToDatabase();
})

// client.on('interactionCreate', (interaction) => {
//     if (interaction.isChatInputCommand()) {
//         const food = interaction.options.get("food").value;
//         const drink = interaction.options.get("drink").value;
//         interaction.reply({
//             content: `You ordered a ${food} and ${drink}`,
//     });
//     }
// });

async function main() {

    const commands = [OrderCommand, rolesCommand];
        

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
}
main()





// npm run start:dev






