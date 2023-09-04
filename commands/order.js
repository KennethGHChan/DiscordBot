import { SlashCommandBuilder } from '@discordjs/builders';

const orderCommand = new SlashCommandBuilder()
    .setName("upload")
    .setDescription("Upload a file")
    .addAttachmentOption((option) => 
        option
            .setName("file")
            .setDescription("upload a file")
            .setRequired(true)
    )
            // .setChoices(
            //     {
            //         name: "Hamburger",
            //         value: "Hamburger",
            //     },
            //     {
            //         name: "Cake",
            //         value: "Cake",
            //     },
            //     {
            //         name: "Pizza",
            //         value: "Pizza",
            //     },

            // )
            // ).addStringOption((option) => 
            //     option
            //         .setName("drink")
            //         .setDescription("Select your favorite drink")
            //         .setRequired(true)
            //         .setChoices(
            //             {
            //                 name: "Hamburger",
            //                 value: "Hamburger",
            //             },
            //             {
            //                 name: "Cake",
            //                 value: "Cake",
            //             },
            //             {
            //                 name: "Pizza",
            //                 value: "Pizza",
            //             },
            //     ))
                                
            export default orderCommand.toJSON();