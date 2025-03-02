namespace CenterOfExcellence.Components.Common.Buttons;

public static class ButtonStyles
{
    public static string GetClass(ButtonVariant variant) =>
        variant switch
        {
            ButtonVariant.Primary => "px-20 py-2 bg-blue-950 hover:bg-red-500 text-heading rounded-lg text-subHeading font-subHeading transition text-white ",
            
            ButtonVariant.Secondary => "px-6 py-3 bg-secondary hover:bg-accent text-heading rounded-lg text-subHeading font-subHeading transition",
            
            ButtonVariant.Disabled => "px-6 py-3 bg-gray-300 text-gray-500 rounded-lg text-paragraph font-paragraph transition cursor-not-allowed",
            
            _ => ""
        };
}
