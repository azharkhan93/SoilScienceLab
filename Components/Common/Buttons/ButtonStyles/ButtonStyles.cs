namespace CenterOfExcellence.Components.Common.Buttons;

public static class ButtonStyles
{
    public static string GetClass(ButtonVariant variant) =>
        variant switch
        {
            ButtonVariant.Primary => "py-2 px-10  bg-blue-950 hover:bg-red-800 hover:pl-8  rounded-md text-subHeading font-subHeading transition text-white",


            ButtonVariant.Secondary => " px-10 bg-blue-950 hover:bg-red-800 font-paragraph rounded-lg  transition text-[18px] text-white",

            ButtonVariant.Disabled => "px-6 py-3 bg-gray-300 text-gray-500 rounded-lg text-paragraph font-paragraph transition cursor-not-allowed",

            _ => ""
        };
}
