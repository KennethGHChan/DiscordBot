import { SlashCommandBuilder } from '@discordjs/builders';

const uploadCommand = new SlashCommandBuilder()

    .setName("upload")
    .setDescription("Upload a file")
    .addAttachmentOption((option) => 
        option
            .setName("file")
            .setDescription("upload a file")
            .setRequired(true)
    )
    .addStringOption(option => 
        option
            .setName("description")
            .setDescription("Provide a description for the file")
            .setRequired(true)
        )
    .addStringOption(option => 
        option
            .setName("schedule")
            .setDescription("When would you like to receive the file?")
            .setRequired(true)
        )
                                
export default uploadCommand.toJSON();