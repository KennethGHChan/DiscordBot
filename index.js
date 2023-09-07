import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import OrderCommand from './commands/order.js';
import rolesCommand from './commands/roles.js'
import { connectToDatabase } from './database.js';

// npm run start:dev

/** 
Goals currently:
1) When user uses command to upload a file, allow the user to add a description along with the file and the desired date and how much time before the designated date to have the bot DM this info
2) Allow user to create a to do list, creating a command to add tasks, and using emotes to delete tasks and allow user to set priority of said tasks
3) Add optional function that allows the bot to dm the user daily information such as reminders, weather or tasks.
**/

config();

// Storing environment variables into normal variables
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

// Setting and using bot token to login while also connecting to the database

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










