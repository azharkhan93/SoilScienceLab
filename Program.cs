var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddScoped<CenterOfExcellence.Components.HeroSection.Services.IHeroSlideService, CenterOfExcellence.Components.HeroSection.Services.HeroSlideService>();

builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();  
app.UseAntiforgery();
app.UseWebSockets();  

app.MapRazorComponents<CenterOfExcellence.App>()  
    .AddInteractiveServerRenderMode();

app.Run();
