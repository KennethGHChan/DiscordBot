import { SlashCommandBuilder } from '@discordjs/builders';

const rolesCommand = new SlashCommandBuilder()
    .setName('add role')
    .setDescription('Add a role')
    .addRoleOption((option) => option.setName('new role')
    .setDescription('Adds the New Role')
    );
    

    export default rolesCommand.toJSON();