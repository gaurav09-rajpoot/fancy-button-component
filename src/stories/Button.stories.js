import Button from "../component.js/Button"
export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />
export const PrefixIconButton = Template.bind({});
PrefixIconButton.args = {
    primary: true,
    label: "Prifix Icon Button",
    size: "md",
    prifixIconSrc: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
};
export const ButtonWithBorder = Template.bind({});
ButtonWithBorder.args = {
    primary: true,
    label: "Button with border",
    size: "lg",

    border: "5px solid black",
};


export const Red = Template.bind({})
Red.args = {
    backgroundColor: "#0092ff",
    label: "Press Me",
    size: "md",
};

export const LongLabel = Template.bind({})
LongLabel.args = {
    backgroundColor: "red",
    label: "Button with long label text",
    size: "md",
};
export const backgroundColor = Template.bind({})
backgroundColor.args = {
    backgroundColor: "red",
    label: "Button with background color",
    size: "md",
};

