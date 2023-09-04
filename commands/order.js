import { SlashCommandBuilder } from '@discordjs/builders';

const orderCommand = new SlashCommandBuilder()
    .setName("order")
    .setDescription("Order your favorite meal!")
    .addStringOption((option) => 
        option
            .setName("food")
            .setDescription("Select your favorite food")
            .setRequired(true)
            .setChoices(
                {
                    name: "Hamburger",
                    value: "Hamburger",
                },
                {
                    name: "Cake",
                    value: "Cake",
                },
                {
                    name: "Pizza",
                    value: "Pizza",
                },

            )
            ).addStringOption((option) => 
                option
                    .setName("drink")
                    .setDescription("Select your favorite drink")
                    .setRequired(true)
                    .setChoices(
                        {
                            name: "Hamburger",
                            value: "Hamburger",
                        },
                        {
                            name: "Cake",
                            value: "Cake",
                        },
                        {
                            name: "Pizza",
                            value: "Pizza",
                        },
                ))

                export default orderCommand.toJSON();