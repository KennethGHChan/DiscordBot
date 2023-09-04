
import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import OrderCommand from './commands/order.js';
import rolesCommand from './commands/roles.js'
import { connectToDatabase } from './database.js';

// npm run start:dev


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










